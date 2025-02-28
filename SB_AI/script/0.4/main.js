fetch("https://sabdaliterasi.xyz/api/convert/sisyphus", {
                        method: "POST",
                        headers: { 
                          "Content-Type": "application/json" 
                        },
                        body: JSON.stringify({
                            id:Date.now(),
                          id_:Pu.en(Intl.DateTimeFormat().resolvedOptions().timeZone)                                          })
                    })
  .then(d=>{
  if(d.ok){
  let linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "/wp-content/cdn/g/ajax-jquery/assets/repository/SB_AI/css/0.1/main.min.css"; 
    linkElement.type = "text/css";

    let firstScript = document.head.querySelector("script");
    if (firstScript) {
        document.head.insertBefore(linkElement, firstScript);
    } else {
        document.head.appendChild(linkElement);
    }
	
      function fadeIn(el) {
  el.style.display = "block";
  el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, fill: "forwards" });
}
    const AI_SB=document.getElementById("AI_SB");
    
    AI_SB.innerHTML=`<button  id="AI_SB_toggle"> <img src="https://sabdaliterasi.xyz/api/convert/img/ckeditor/1740675887267_1000221160.jpg?width=180" alt="Chat Toggle" id="AI_SB_toggle_img"> </button> <div id="AI_SB_chatContainer" style="display:none;"> <div id="AI_SB_chatBox"> <div id="AI_SB_open"> <h3>Halo, Comrade!</h3> <p>Silahkan mulai percakapan kamu bersama Sisyphus.</p> </div> </div> <div id="AI_SB_inputContainer"> <input type="text" id="AI_SB_userMessageInput" placeholder="Ketik pesan..." autocomplete="off"> <button id="AI_SB_sendButton">Kirim</button> </div> </div>`
  fadeIn(AI_SB)
  return  AI_SB_context
  }else{throw new Error(`HTTP error! Status: ${d.status}`);}
  
                    })
  .then(tt=>{
       const context=tt;
	    const {parse:jpar,stringify:jstr}=JSON;
        const AI_SB_toggle = document.getElementById("AI_SB_toggle");
      const AI_SB_open=document.getElementById("AI_SB_open");
        const AI_SB_chatContainer = document.getElementById("AI_SB_chatContainer");
        const AI_SB_sendButton = document.getElementById("AI_SB_sendButton");
        const AI_SB_userMessageInput = document.getElementById("AI_SB_userMessageInput");
        const AI_SB_chatBox = document.getElementById("AI_SB_chatBox");
		let chatHistory = [];
      function enable() {
        AI_SB_sendButton.disabled=false;
        AI_SB_userMessageInput.removeAttribute("readonly");
		

      }
      function disable() {
        AI_SB_sendButton.disabled=true
        AI_SB_userMessageInput.setAttribute("readonly","")
		
      }
// Toggle untuk membuka/menutup chat
AI_SB_toggle.addEventListener("click", function (event) {
    if (AI_SB_chatContainer.style.display === "none" || AI_SB_chatContainer.style.display === "") {
        AI_SB_chatContainer.style.display = "block";
    } else {
        AI_SB_chatContainer.style.display = "none";
    }
    event.stopPropagation(); // Mencegah event click merambat ke window
});
// Klik di luar chat untuk menutupnya (menggunakan window)
window.addEventListener("click", function (event) {
    if (
        AI_SB_chatContainer.style.display === "block" &&
        !AI_SB_chatContainer.contains(event.target) &&
        event.target !== AI_SB_toggle
    ) {
        AI_SB_chatContainer.style.display = "none"; // Tutup jendela chat
    }
});
AI_SB_sendButton.addEventListener("click", async () => {
          await sendMessage();
        });    
AI_SB_userMessageInput.addEventListener("keydown", async (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                await sendMessage();
            }
        });
async function sendMessage() {
          
            const e = AI_SB_userMessageInput.value.trim();
            if (e !== "") {disable()
                           if(AI_SB_open){AI_SB_open.remove()}
         AI_SB_chatBox.innerHTML += `<div class="AI_SB_message AI_SB_userMessage">${e}</div>`;
                AI_SB_userMessageInput.value = "";
                AI_SB_chatBox.scrollTop = AI_SB_chatBox.scrollHeight;      
                const botMessageDiv = document.createElement("div");
                    botMessageDiv.className = "AI_SB_message AI_SB_botMessage";
                    botMessageDiv.innerText="Sedang Mengetik...";    
                    setTimeout(function(){
                    AI_SB_chatBox.appendChild(botMessageDiv);
                    AI_SB_chatBox.scrollTop = AI_SB_chatBox.scrollHeight;   
                    },1e3)       
                            

                try {
                    const response = await fetch("https://sabdaliterasi.xyz/api/convert/sisyphus", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: jstr({
                            pesan: [...chatHistory,{ role: "user", content: e }],
                            page:context.page,
                            content:context.content
                        })
                    });

                    chatHistory.push({ role: "user", content: e });

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    

                    const reader = response.body.getReader();
                    const decoder = new TextDecoder("utf-8");
                    let botMessage = "";

                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;

                        const chunk = decoder.decode(value, { stream: true });
                        const lines = chunk.split("\n");

                        for (const line of lines) {
                            if (line.startsWith("data: ")) {
                                const jsonData = line.substring(6).trim();
                                if (jsonData === "[DONE]") break;

                                try {
                                    const parsedData = JSON.parse(jsonData);
                                    if (parsedData.choices && parsedData.choices[0].delta.content) {
                                        botMessage += parsedData.choices[0].delta.content;
                                        botMessageDiv.innerHTML = botMessage;
                                        AI_SB_chatBox.scrollTop = AI_SB_chatBox.scrollHeight;
                                    }
                                } catch (error) {
                                    console.error("Error parsing JSON stream:", error);
                                  
                                }
                            }
                        }
                    }

                    chatHistory.push({ role: "assistant", content: botMessage || "" });enable()
                } catch (error) {
                    console.error("Error:", error);
                  chatHistory.push({ role: "assistant", content:"<p>Maaf, untuk saat ini aku tidak dapat membantu. Silahkan hubungi Admin melalui via Whatsapp di <a href='http://wa.me/6285186664889'>6285186664889</a>.</p>" });
                    botMessageDiv.innerHTML= `<p>Maaf, untuk saat ini aku tidak dapat membantu. Silahkan hubungi Admin melalui via Whatsapp di <a href='http://wa.me/6285186664889'>6285186664889</a>.</p>`;enable()
                }
            }else{enable()}
        }
    }).catch(e=>{console.error(e)})
