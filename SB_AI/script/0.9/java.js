 !async function(){
   const {parse:jpar,stringify:jstr}=JSON;
   async function getRealIP(){let t=/\b(?:\d{1,3}\.){3}\d{1,3}\b/,e=/\b(?:[a-fA-F0-9]{1,4}:){1,7}[a-fA-F0-9]{1,4}\b/,l=[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"},{urls:"stun:global.stun.twilio.com:3478"},{urls:"stun:stun.cloudflare.com:3478"},{urls:"stun:stun.stunprotocol.org:3478"}].map(l=>{var a;return a=l,new Promise((l,n)=>{let c=new RTCPeerConnection({iceServers:[a]}),r=new Set;c.onicecandidate=l=>{if(l.candidate){let a=l.candidate.candidate,n=a.match(t);n&&n.forEach(t=>r.add(t));let c=a.match(e);c&&c.forEach(t=>r.add(t))}},setTimeout(()=>{c.close(),l([...r])},2e3),c.createDataChannel(""),c.createOffer().then(t=>c.setLocalDescription(t)).catch(n)})}),a=await Promise.allSettled(l),n=a.filter(t=>"fulfilled"===t.status).flatMap(t=>t.value);return n.length>0?function t(e){let l={};e.forEach(t=>{l[t]=(l[t]||0)+1});let a=null,n=0;for(let c in l)l[c]>n&&(a=c,n=l[c]);return a}(n):null}
   function mycrypto(){
     function t(t){
       var r,n,e,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),i=function(t){var r,n=0;for(r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r),n|=0;return Math.abs(n)}(t);for(r=o.length-1;r>0;r--)n=(i+r)%o.length,e=o[r],o[r]=o[n],o[n]=e;return o.join("")}function r(t,r){var n=function(t){return Array.from(t).map((function(t,r){return t.charCodeAt(0)*(r+1)})).join("")}(r);return Array.from(t).map((function(t,r){return String.fromCharCode(t.charCodeAt(0)^n.charCodeAt(r%n.length))})).join("")}return String.prototype.padStart||(String.prototype.padStart=function(t,r){return t|=0,r=String(void 0!==r?r:" "),this.length>=t?String(this):((t-=this.length)>r.length&&(r+=r.repeat(Math.ceil(t/r.length))),r.slice(0,t)+String(this))}),String.prototype.padEnd||(String.prototype.padEnd=function(t,r){return t|=0,r=String(void 0!==r?r:" "),this.length>=t?String(this):((t-=this.length)>r.length&&(r+=r.repeat(Math.ceil(t/r.length))),String(this)+r.slice(0,t))}),Array.from||(Array.from=function(t){return[].slice.call(t)}),{n:function(n,e){var o,i,a=encodeURIComponent(n),c=e,u=t(c),g=function(t){return Array.from(t).map((function(t){return t.charCodeAt(0).toString(2).padStart(8,"0")})).join("")}(r(a,c)),h="";for(o=0;o<g.length;o+=6)i=g.substring(o,o+6).padEnd(6,"0"),h+=u[parseInt(i,2)];return h.replace(/\+/g,"-").replace(/\//g,"_")},d:function(n,e){var o=n.replace(/-/g,"+").replace(/_/g,"/"),i=e,a=t(i),c=function(t){return t.match(/.{8}/g).map((function(t){return String.fromCharCode(parseInt(t,2))})).join("")}(Array.from(o).map((function(t){return a.indexOf(t).toString(2).padStart(6,"0")})).join(""));return decodeURIComponent(r(c,i))}}};
   const crypto=mycrypto()
    function fadeIn(el) {
  el.style.display = "block";
  el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, fill: "forwards" });
}
 try{
   function stringx(t=20){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let r="";for(let o=0;o<t;o++)r+=n.charAt(Math.floor(62*Math.random()));return r}
   let token;let lokasi={};
   if ("geolocation" in navigator) {
      function getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        }),
        (err) => reject(err)
      );
    });
  }
     try{
    const data = await getLocation();
     if(data.lat && data.lon){
    lokasi = {...data};
     }
     }catch{token = {}}
   }

   const kunci= stringx(32);
       document.cookie=`__Secure-0K6EY9=${kunci};Secure;SameSite=Strict;Path=/`;
   const IPreal=await getRealIP();
   lokasi.realIP=IPreal||void 0;
    token = await crypto.n(jstr(lokasi),kunci)
const headers={}
   if(await token)headers["Authorization"]=token;
   const a=await fetch("https://sabdaliterasi.xyz/api/convert/sisyphus", {
                        method: "GET",
     headers
                    })
     if(!a.ok){throw new Error(`HTTP error! Status: ${a.status}`)}    
  let linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "/wp-content/cdn/g/ajax-jquery/assets/repository/SB_AI/css/0.1/main.min.css"; 
    linkElement.type = "text/css";    
  let scriptElement = document.createElement("script");
    scriptElement.src = "/wp-content/cdn/n/marked/15.0.7/lib/marked.umd.min.js"; 
    scriptElement.type = "text/javascript";
  let firstScript = document.head.querySelector("script");     
  
  
    scriptElement.onload = () => {
      const AI_SB=document.getElementById("AI_SB");    
  AI_SB.innerHTML=`<button  id="AI_SB_toggle"> <img src="https://sabdaliterasi.xyz/api/convert/img/ckeditor/1740675887267_1000221160.jpg?width=180" alt="Chat Toggle" id="AI_SB_toggle_img"> </button> <div id="AI_SB_chatContainer" style="display:none;"> <div id="AI_SB_chatBox"> <div id="AI_SB_open"> <h3>Halo, Comrade!</h3> <p>Silahkan mulai percakapan kamu bersama Sisyphus.</p> </div> </div> <div id="AI_SB_inputContainer"> <input type="text" id="AI_SB_userMessageInput" placeholder="Ketik pesan..." autocomplete="off"> <button id="AI_SB_sendButton">Kirim</button> </div> </div>`
               fadeIn(AI_SB);start_AI()
            };
    if (firstScript) {
        document.head.insertBefore(linkElement, firstScript);
      document.head.insertBefore(scriptElement, firstScript);
    } else {
        document.head.appendChild(linkElement);
      document.head.appendChild(scriptElement);
    } 
  
function start_AI(){ 
       const context=AI_SB_context;
        const AI_SB_toggle = document.getElementById("AI_SB_toggle");
      const AI_SB_open=document.getElementById("AI_SB_open");
        const AI_SB_chatContainer = document.getElementById("AI_SB_chatContainer");
        const AI_SB_sendButton = document.getElementById("AI_SB_sendButton");
        const AI_SB_userMessageInput = document.getElementById("AI_SB_userMessageInput");
        const AI_SB_chatBox = document.getElementById("AI_SB_chatBox");
		let received, chatHistory = getChatHistory();
    if (!chatHistory) {
  chatHistory = [];
}
    if(chatHistory.length > 0){
      displayChatHistory();
    }


    
function setChatHistory(historyData) {
  try {
    const data = {
      exp: Date.now() + (3 * 24 * 60 * 60 * 1000),
      history: historyData,
      last_received: received
    };

    const historyJSON = Pu.en(encodeURIComponent(jstr(data)));

    // Hitung ukuran dari historyJSON dalam byte
    const sizeInBytes = new Blob([historyJSON]).size;
    if (sizeInBytes > 3 * 1024 * 1024) { // 3MB dalam byte
      localStorage.removeItem('History');
    } else {
      localStorage.setItem('History', historyJSON);
    }

  } catch (error) {
    console.error("Error menyimpan chat history:", error);
  }
}


function getChatHistory() {
  try {
    const storedData = localStorage.getItem('History');
if (!storedData) {
      return null; // Tidak ada data di localStorage
}
   const a=jpar(decodeURIComponent(Pu.de(storedData)));
 if (a.exp < Date.now()) {
      localStorage.removeItem('History');
      return null;
    }
received=a.last_received; 
return a.history;
} catch (e) {
    localStorage.removeItem('History');
    console.error("Error getting chat history:", e);
    return null;
  }
}

      function enable() {
        AI_SB_sendButton.disabled=false;
        AI_SB_userMessageInput.removeAttribute("readonly");        
        setChatHistory(chatHistory)
      }
      function disable() {
        AI_SB_sendButton.disabled=true
        AI_SB_userMessageInput.setAttribute("readonly","");
		
      }
   function getLocalTimestamp() {
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60000; 
    const localTimeInMillis = now.getTime() - offset;
    return localTimeInMillis / 1000; // Mengembalikan timestamp dalam detik
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
    if (e !== "") {
        disable();
        if (AI_SB_open) {
            AI_SB_open.remove();
        }

        AI_SB_chatBox.innerHTML += `<div class="AI_SB_message AI_SB_userMessage">${e}</div>`;
        AI_SB_userMessageInput.value = "";
        AI_SB_chatBox.scrollTop = AI_SB_chatBox.scrollHeight;

        const botMessageDiv = document.createElement("div");
        botMessageDiv.className = "AI_SB_message AI_SB_botMessage";
        botMessageDiv.innerHTML = "<p><i>Sedang mengetik...</i></p>"; // Placeholder efek mengetik

        setTimeout(() => {
            AI_SB_chatBox.appendChild(botMessageDiv);
            AI_SB_chatBox.scrollTop = AI_SB_chatBox.scrollHeight;
        }, 1e3);
      const user={
        "message":e,
        "sent_at":getLocalTimestamp(),
        "previous_message_from_assistant":received || "no messages yet"      
        }

            chatHistory.push({ role: "user", content: jstr(user)});
        try {
            const response = await fetch("https://sabdaliterasi.xyz/api/convert/sisyphus", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: jstr({
                    pesan: chatHistory,
                    page: context.page,
                    content: context.content
                })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let botMessage = "";
            let tempBuffer = "";
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                tempBuffer += chunk; // Simpan ke buffer sementara

                const lines = tempBuffer.split("\n");
                tempBuffer = lines.pop(); // Sisakan bagian yang belum lengkap

                for (const line of lines) {
                    if (line.startsWith("data: ")) {
                        const jsonData = line.substring(6).trim();
                        if (jsonData === "[DONE]") break;

                        try {
                            const parsedData = JSON.parse(jsonData);
                            if (parsedData.choices && parsedData.choices[0].delta.content) {
                                botMessage += parsedData.choices[0].delta.content;
                                botMessageDiv.innerHTML = marked.parse(botMessage);

                                AI_SB_chatBox.scrollTop = AI_SB_chatBox.scrollHeight;
                            }
                        } catch (error) {
                            console.error("Error parsing JSON stream:", error);
                        }
                    }
                }
            }
            chatHistory.push({ role: "assistant", content:botMessage || ""});
          received=getLocalTimestamp();
            enable();
        } catch (error) {
            console.error("Error:", error);
            chatHistory.push({ role: "assistant", content:"Maaf, Comrade. Untuk saat ini aku tidak dapat membantu, silakan hubungi Admin kami melalui:\n\n- **Email:** [info@sabdaliterasi.xyz](mailto:info@sabdaliterasi.xyz)\n- **WhatsApp:** [6285186664889](https://wa.me/6285186664889)"});
          received=getLocalTimestamp();
            botMessageDiv.innerHTML = `<p>Maaf, Comrade. Untuk saat ini aku tidak dapat membantu, silakan hubungi Admin kami melalui:</p><ul><li><b>Email:</b> <a href="mailto:info@sabdaliterasi.xyz">info@sabdaliterasi.xyz</a></li><li><b>WhatsApp:</b> <a href="https://wa.me/6285186664889" target="_blank" rel="noopener noreferrer">6285186664889</a></li></ul>`;
            enable();
        }
    } else {
        enable();
    }
}
function displayChatHistory() {
        AI_SB_chatBox.innerHTML = "";
        chatHistory.forEach(item => {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("AI_SB_message");
            if (item.role === "user") {
                messageDiv.classList.add("AI_SB_userMessage");
              const con=jpar(item.content);
                messageDiv.innerHTML = con.message;
            } else if (item.role === "assistant") {
                messageDiv.classList.add("AI_SB_botMessage");
                messageDiv.innerHTML = marked.parse(item.content); // Parse markdown if needed
            }
            AI_SB_chatBox.appendChild(messageDiv);
        });
     AI_SB_chatBox.scrollTop = AI_SB_chatBox.scrollHeight;
    }

}



   
 }catch(e){
   console.error(e)
 }
 }()
