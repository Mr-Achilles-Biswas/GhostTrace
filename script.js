const terminal = document.getElementById("terminal");

function addLine(text){
    const div = document.createElement("div");

    div.className = "line";
    div.innerHTML = text;

    terminal.appendChild(div);

    terminal.scrollTop = terminal.scrollHeight;
}

function rand(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function randomIP(){
    return `${rand(10,255)}.${rand(0,255)}.${rand(0,255)}.${rand(0,255)}`;
}

function startTrace(){

    terminal.innerHTML = "";

    const target =
        document.getElementById("target").value || "UNKNOWN_TARGET";

    const logs = [

        "[BOOT] Initializing GhostTrace Engine...",

        `[INFO] Target locked: ${target}`,

        "[SCAN] Searching breach databases...",

        `[IP] ${randomIP()}`,

        "[BYPASS] Firewall bypass successful.",

        "[DECRYPT] Decrypting archives...",

        "[FOUND] 7 leaked credentials detected.",

        "[TRACE COMPLETE]"
    ];

    logs.forEach((log,index)=>{

        setTimeout(()=>{

            addLine(log);

        }, index * 1000);

    });
}
