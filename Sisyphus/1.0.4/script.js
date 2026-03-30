!async function(){
  try{
const { initializeApp } =await import("https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js");
const { getDatabase, ref, set, get } = await import("https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js");
const firebaseConfig = {
  apiKey: "AIzaSyAaUwCDxexTHvRGeVEdxexZ_l8YEcOnydY",
  authDomain: "sabdaliterasi-base.firebaseapp.com",
  databaseURL: "https://sabdaliterasi-base-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sabdaliterasi-base",
  storageBucket: "sabdaliterasi-base.firebasestorage.app",
  messagingSenderId: "732711083710",
  appId: "1:732711083710:web:f1dfc12ff77eb04349c8ef",
  measurementId: "G-MNFTZ3E5YK"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
async function saveHistory(id,data) {
  try {
    await set(ref(db, "message/"+id), data);
  } catch (err) {
    console.error("Error:", err);
  }
}
async function getHistory(id) {
  const snapshot = await get(ref(db, "message/"+id));

  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return false
  }
}
let HistoryChat;
  const {parse:jpar,stringify:jstr}=JSON;
  const context=AI_SB_context;
  const crypto=mycrypto();
    let token;
    let lokasi={};
    let historyId=stringx(32);
if(!localStorage.getItem('__Secure-0SB6AI5')){
  localStorage.setItem('__Secure-0SB6AI5', historyId); HistoryChat=[]
}
else{
historyId=localStorage.getItem('__Secure-0SB6AI5')
}; 
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
   document.cookie=`__Secure-0K6EY1=${kunci};Secure;SameSite=Strict;Path=/`;
   const IPreal=await getRealIP();
   lokasi.realIP=IPreal||void 0;
    lokasi.id=historyId;
    token = await crypto.n(jstr(lokasi),kunci)
const headers={}
   if(await token)headers["Authorization"]=token;
   const a=await fetch("/api/sisyphus", {
     method: "PUT",
     headers,
     body:jstr({
    page: context.page,
    content: context.content})
   })
  if(!a.ok){throw new Error(`HTTP error! Status: ${a.status}`)}
  const histo=await a.json()
       let scriptElement = document.createElement("script");
    scriptElement.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js"; 
    scriptElement.type = "text/javascript";
  let firstScript = document.head.querySelector("script");  
       scriptElement.onload = () => {
let scriptElement1 = document.createElement("script");
    scriptElement1.src = "https://cdn.jsdelivr.net/npm/dompurify@3.0.6/dist/purify.min.js"; 
    scriptElement1.type = "text/javascript";
    scriptElement1.onload = () => {
         let linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "/wp-content/cdn/g/ajax-jquery/assets/repository/Sisyphus/1.0.1/style.min.css"; 
    linkElement.type = "text/css";  
   linkElement.onload = () => {
       const AI_SB=document.getElementById("Sisyphus");AI_SB.innerHTML=`<div class="AI-float-btn" id="AI-toggle"> <div class="AI-avatar-ring"> <img src="https://sabdaliterasi.xyz/api/convert/img/ckeditor/1740675887267_1000221160.jpg?width=180" class="AI-avatar"> </div> </div> <div class="AI-chatbox" id="AI-chatbox"> <div class="AI-header"> <img src="https://sabdaliterasi.xyz/api/convert/img/ckeditor/1740675887267_1000221160.jpg?width=180" class="AI-avatar-sm"> <span>CS Sisyphus</span> </div> <div class="AI-messages" id="AI-messages"><div id="AI_SB_open"> <h3>Halo, Comrade!</h3> <p>Silahkan mulai percakapan kamu bersama Sisyphus.</p> </div></div> <div class="AI-input-area"> <textarea id="AI-input" placeholder="Tulis pesan..." disabled></textarea> <button id="AI-send">➤</button> </div> </div>`;fadeIn(AI_SB);start(histo)
    }
   if (firstScript) {
        document.head.insertBefore(linkElement, firstScript);      
    } else {
        document.head.appendChild(linkElement);
    }     
     }
    if (firstScript) {
      document.head.insertBefore(scriptElement1, firstScript);
    } else {
      document.head.appendChild(scriptElement1);
    } 
            };
 if (firstScript) {
      document.head.insertBefore(scriptElement, firstScript);
    } else {
      document.head.appendChild(scriptElement);
    } 
  async function start(h) {  

  const renderer = new marked.Renderer();
renderer.link = function(token) {
  const href = token.href;
  const title = token.title ? `title="${token.title}"` : '';
  const text = token.text;

  return `<a href="${href}" ${title} target="_blank" rel="noopener noreferrer">${text}</a>`;
};
marked.setOptions({ renderer, breaks: true });
  const toggle = document.getElementById("AI-toggle");
  const chatbox = document.getElementById("AI-chatbox");
  const sendBtn = document.getElementById("AI-send");
  const input = document.getElementById("AI-input");
  const messages = document.getElementById("AI-messages");
  const AI_SB_open=document.getElementById("AI_SB_open");
  if(h.history){
    displayChatHistory(h.history)
    HistoryChat=h.history
  }else{
    HistoryChat=[]
  } 
 
input.disabled = false;
toggle.addEventListener("click", function (event) {
     chatbox.style.display =
      chatbox.style.display === "flex" ? "none" : "flex";
     event.stopPropagation(); // Mencegah event click merambat ke window
});
window.addEventListener("click", function (event) {
    if (
        chatbox.style.display === "flex" &&
        !chatbox.contains(event.target) &&
        event.target !== toggle
    ) {
        chatbox.style.display = "none"; // Tutup jendela chat
    }
});
  function addMessage(text, type) {
    
    const msg = document.createElement("div");
    msg.className = "AI-msg " + (type === "user" ? "AI-user" : "AI-bot");
    msg.innerHTML = DOMPurify.sanitize(marked.parse(text),{ ADD_ATTR: ['target'] });
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
    return msg
  }
  sendBtn.onclick = sendMessage;
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
 async function sendMessage(){
   
input.disabled = true;
  const prompt = input.value.trim();
  if (!prompt) return;
   if (AI_SB_open) {
            AI_SB_open.remove();
    }
  addMessage(prompt, "user");
  input.value = "";
let data_user={
            "role": "user",
            "prompt": prompt,
            "id": stringx(21),
            "createdAt": new Date().toISOString(),
        }
  HistoryChat.push(data_user);
   let aiBubble;
   setTimeout(() => {
          aiBubble = addMessage("*Sedang Mengetik...*", "bot");
         messages.scrollTop = messages.scrollHeight;
        }, 500);
 try{
  const res = await fetch("/api/sisyphus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: jstr({
    message: prompt
    })
  });

  if (!res.body || !res.ok) {
   throw new Error("Error:"+res.status)
    return;
  }
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let currentText = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });

    let parts = buffer.split("\n\n");
    buffer = parts.pop();

    for (let part of parts) {
      const lines = part.split("\n");
      let event = "";
      let data = "";

      for (let line of lines) {
        if (line.startsWith("event:")) {
          event = line.replace("event:", "").trim();
        }
        if (line.startsWith("data:")) {
          data += line.replace("data:", "").trim();
        }
      }

      if (event === "text-delta") {
        try {
          const json = JSON.parse(data);
          currentText += json.textDelta;
          
aiBubble.innerHTML =  DOMPurify.sanitize(marked.parse(currentText),{ ADD_ATTR: ['target'] });
          
          messages.scrollTop = messages.scrollHeight;
        } catch (err) {
          console.error("Parse error:", err);
        }
      }
    }
  }

  let pesan=currentText;
  let status="completed";
  if(currentText.length <= 0){
    pesan="Maaf, Comrade. Untuk saat ini aku tidak dapat membantu, silakan hubungi Admin kami melalui:\n\n- **Email:** [info@sabdaliterasi.xyz](mailto:info@sabdaliterasi.xyz)\n- **WhatsApp:** [6285186664889](https://wa.me/6285186664889)";
    status="unfinished"
  }
let data_ai={
            "role": "assistant",
            "id": stringx(21),
            "content": [
                {
                    "type": "text",
                    "content": currentText
                }
            ],
            "createdAt": new Date().toISOString(),
            "status": status
        }
HistoryChat.push(data_ai);
await saveHistory(historyId, HistoryChat);
input.disabled = false;


    }catch(e){     
aiBubble.innerHTML=`<p>Maaf, Comrade. Untuk saat ini aku tidak dapat membantu, silakan hubungi Admin kami melalui:</p><ul><li><b>Email:</b> <a href="mailto:info@sabdaliterasi.xyz">info@sabdaliterasi.xyz</a></li><li><b>WhatsApp:</b> <a href="https://wa.me/6285186664889" target="_blank" rel="noopener noreferrer">6285186664889</a></li></ul>`
    let data_ai={
            "role": "assistant",
            "id": stringx(21),
            "content": [
                {
                    "type": "text",
                    "content": "Maaf, Comrade. Untuk saat ini aku tidak dapat membantu, silakan hubungi Admin kami melalui:\n\n- **Email:** [info@sabdaliterasi.xyz](mailto:info@sabdaliterasi.xyz)\n- **WhatsApp:** [6285186664889](https://wa.me/6285186664889)"
                }
            ],
            "createdAt": new Date().toISOString(),
            "status": "unfinished"
        }
HistoryChat.push(data_ai);
await saveHistory(historyId, HistoryChat);
   console.error(e.message)
    return;  
    }
 }
function displayChatHistory(h) {
      const AI_SB_messages=messages;
        AI_SB_messages.innerHTML = "";
        h.forEach(item => {
        const messageDiv = document.createElement("div");
          messageDiv.classList.add("AI-msg")
            if (item.role === "user") {
              messageDiv.classList.add("AI-user");         
              messageDiv.innerHTML = DOMPurify.sanitize(marked.parse(item.prompt),{ ADD_ATTR: ['target'] });
            } else if (item.role === "assistant") {
            messageDiv.classList.add("AI-bot");
              const pesan=DOMPurify.sanitize(marked.parse(item.content[0].content),{ ADD_ATTR: ['target'] });
              messageDiv.innerHTML = pesan;
            }
            AI_SB_messages.appendChild(messageDiv);
        });
     AI_SB_messages.scrollTop = AI_SB_messages.scrollHeight;
    }
}
   async function getRealIP(){
     let t=/\b(?:\d{1,3}\.){3}\d{1,3}\b/,e=/\b(?:[a-fA-F0-9]{1,4}:){1,7}[a-fA-F0-9]{1,4}\b/,l=[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.services.mozilla.com"},{urls:"stun:global.stun.twilio.com:3478"},{urls:"stun:stun.cloudflare.com:3478"},{urls:"stun:stun.stunprotocol.org:3478"}].map(l=>{var a;return a=l,new Promise((l,n)=>{let c=new RTCPeerConnection({iceServers:[a]}),r=new Set;c.onicecandidate=l=>{if(l.candidate){let a=l.candidate.candidate,n=a.match(t);n&&n.forEach(t=>r.add(t));let c=a.match(e);c&&c.forEach(t=>r.add(t))}},setTimeout(()=>{c.close(),l([...r])},2e3),c.createDataChannel(""),c.createOffer().then(t=>c.setLocalDescription(t)).catch(n)})}),a=await Promise.allSettled(l),n=a.filter(t=>"fulfilled"===t.status).flatMap(t=>t.value);return n.length>0?function t(e){let l={};e.forEach(t=>{l[t]=(l[t]||0)+1});let a=null,n=0;for(let c in l)l[c]>n&&(a=c,n=l[c]);return a}(n):null}
   function mycrypto(){
     function t(t){
       var r,n,e,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),i=function(t){var r,n=0;for(r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r),n|=0;return Math.abs(n)}(t);for(r=o.length-1;r>0;r--)n=(i+r)%o.length,e=o[r],o[r]=o[n],o[n]=e;return o.join("")}function r(t,r){var n=function(t){return Array.from(t).map((function(t,r){return t.charCodeAt(0)*(r+1)})).join("")}(r);return Array.from(t).map((function(t,r){return String.fromCharCode(t.charCodeAt(0)^n.charCodeAt(r%n.length))})).join("")}return String.prototype.padStart||(String.prototype.padStart=function(t,r){return t|=0,r=String(void 0!==r?r:" "),this.length>=t?String(this):((t-=this.length)>r.length&&(r+=r.repeat(Math.ceil(t/r.length))),r.slice(0,t)+String(this))}),String.prototype.padEnd||(String.prototype.padEnd=function(t,r){return t|=0,r=String(void 0!==r?r:" "),this.length>=t?String(this):((t-=this.length)>r.length&&(r+=r.repeat(Math.ceil(t/r.length))),String(this)+r.slice(0,t))}),Array.from||(Array.from=function(t){return[].slice.call(t)}),{n:function(n,e){var o,i,a=encodeURIComponent(n),c=e,u=t(c),g=function(t){return Array.from(t).map((function(t){return t.charCodeAt(0).toString(2).padStart(8,"0")})).join("")}(r(a,c)),h="";for(o=0;o<g.length;o+=6)i=g.substring(o,o+6).padEnd(6,"0"),h+=u[parseInt(i,2)];return h.replace(/\+/g,"-").replace(/\//g,"_")},d:function(n,e){var o=n.replace(/-/g,"+").replace(/_/g,"/"),i=e,a=t(i),c=function(t){return t.match(/.{8}/g).map((function(t){return String.fromCharCode(parseInt(t,2))})).join("")}(Array.from(o).map((function(t){return a.indexOf(t).toString(2).padStart(6,"0")})).join(""));return decodeURIComponent(r(c,i))}}}; 
    function sseToJSON(sseText) {
  const lines = sseText.split("\n");

  let content = "";
  let currentEvent = null;

  for (let line of lines) {
    line = line.trim();

    if (line.startsWith("event:")) {
      currentEvent = line.replace("event:", "").trim();
    }

    if (line.startsWith("data:")) {
      const jsonStr = line.replace("data:", "").trim();

      if (!jsonStr) continue;

      try {
        const data = JSON.parse(jsonStr);

        if (currentEvent === "text-delta" && data.textDelta) {
          content += data.textDelta;
        }
      } catch (e) {
        // abaikan jika bukan JSON valid
      }
    }
  }

  return  content ;
}
    function stringx(t=20){
    const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let r="";for(let o=0;o<t;o++)r+=n.charAt(Math.floor(62*Math.random()));return r}
    function fadeIn(el) {
  el.style.display = "block";
  el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, fill: "forwards" });
}

  }catch(e){console.error(e.message)}
  }();
