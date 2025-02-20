# download_js.ps1 - Skrip untuk mengunduh file JS dengan custom header Origin & Referer
$baseFolder = "main"  # Folder utama penyimpanan
$fileList = "daftar_js.txt"  # File yang berisi daftar URL JavaScript

# Pastikan folder utama ada
New-Item -ItemType Directory -Path $baseFolder -Force | Out-Null

# Baca setiap URL dari daftar_js.txt
Get-Content $fileList | ForEach-Object {
    $url = $_.Trim()
    if ($url -ne "") {
        try {
            # Ambil domain dan path file
            $uri = New-Object System.Uri($url)
            $domain = $uri.Host
            $path = $uri.AbsolutePath.TrimStart("/")

            # Buat direktori sesuai domain dan path
            $folder = "$baseFolder\$domain\" + (Split-Path $path)
            New-Item -ItemType Directory -Path $folder -Force | Out-Null

            # Cek status kode sebelum download dengan custom header
            $headers = @{
                "Origin"   = "https://sabdaliterasi.xyz"
                "Referer"  = "https://sabdaliterasi.xyz/"
                "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
            }

            $response = Invoke-WebRequest -Uri $url -Method Head -Headers $headers -MaximumRedirection 0 -ErrorAction Stop

            if ($response.StatusCode -eq 200) {
                # Download file hanya jika status 200
                $outputFile = "$baseFolder\$domain\$path"
                Invoke-WebRequest -Uri $url -OutFile $outputFile -Headers $headers -MaximumRedirection 0
                Write-Host "✅ Berhasil mengunduh: $url -> $outputFile"
            } else {
                Write-Host "⚠️ Status bukan 200: $url (Status: $($response.StatusCode))" -ForegroundColor Yellow
            }
        } catch {
            # Tangani error jika status 307 atau error lainnya
            if ($_.Exception.Response.StatusCode -eq 307) {
                Write-Host "❌ Redirect 307 terdeteksi, SKIP: $url" -ForegroundColor Red
            } else {
                Write-Host "❌ Gagal mengunduh: $url - $($_.Exception.Message)" -ForegroundColor Red
            }
        }
    }
}
