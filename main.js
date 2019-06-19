const numberOfProcesses = document.querySelector("#numberOfProcesses input");
const numOfProcBtn = document.querySelector("#numberOfProcesses button");
const processesPeriods = document.querySelector("#processesPeriods");
const result = document.querySelector("#result table");
function generatePeriods(){
    for(let i=0;i<numberOfProcesses.value;i++){
        processesPeriods.insertAdjacentHTML("beforeend",`<div id='processPerid'>
        <label>period of process ${i+1}</label><input id="pp" type="number">
        <label>execution time of process ${i + 1}</label><input id="excT" type="number"></div>`);
    }
    processesPeriods.insertAdjacentHTML("beforeend", `<button id="start">start Scheduling</button>`);
    const startBtn = document.querySelector("#start");
    startBtn.onclick = scheduling;
}
function scheduling() {
    const processPerid = document.querySelectorAll("#processPerid #pp");
    const processExc = document.querySelectorAll("#excT");
    let maxperiod=0;
    for(let i=0;i<processPerid.length;i++){
        if (parseInt(processPerid[i].value)>maxperiod){
            maxperiod = parseInt(processPerid[i].value);
        }
    }
    for(let i=0;i<processPerid.length;i++){
        for (let j= 0; j< processPerid.length; j++) {
            if (parseInt(processPerid[j].value)>parseInt(processPerid[i].value) ) {
                let temp = parseInt(processPerid[i].value)
                processPerid[i].value = parseInt(processPerid[j].value);
                processPerid[j].value = temp;
                let temp2 = parseInt(processExc[i].value)
                processExc[i].value = parseInt(processExc[j].value);
                processExc[j].value = temp2;
            }
        }
    }
    let SCM = maxperiod;
    console.log(SCM);
    let mul=1;
    while(true){
        count = 0;
        for (let i = 0; i < processPerid.length; i++) {
            if (SCM % parseInt(processPerid[i].value)==0) {
                count++;
            }
        }
        if(count==processPerid.length){
            break;
        }
        SCM = maxperiod*++mul;
    }
    console.log(SCM);
    for (let i = 0; i < numberOfProcesses.value;i++){
        result.insertAdjacentHTML("beforeend",`<tr id="p"></tr>`)
    }
    result.insertAdjacentHTML("beforeend", `<tr id="time"></tr>`)
    const p=document.querySelectorAll("#p");
    const time=document.querySelector("#time");
    for (let i = 0; i < numberOfProcesses.value; i++) {
        for(let j=0;j<SCM+1;j++){
            p[i].insertAdjacentHTML("beforeend", `<td id="t${i}${j}">0</td>`);
        }
    }
    for (let i = 0; i < numberOfProcesses.value; i++) {
                    document.querySelector(`#t${i}0`).innerText=`p${i+1}`
    }
    for(let j=0;j<SCM+1;j++){
        if(j==0){
            time.insertAdjacentHTML("beforeend", `<td>T</td>`);
            continue;
        }
        time.insertAdjacentHTML("beforeend", `<td>${j}</td>`);
    }
    console.log("hgjfgkhfddhf");
    let tI=[];
    let tF=[];
    let pE=[];
    for(let i=0;i<processPerid.length;i++){
        tI.push(0);
        tF.push(parseInt(processPerid[i].value));
        pE.push(0);
    }
    let timer=0;
    if (processPerid.length==2){
        for (let i = 0; i < SCM; i++) {
            if (timer >= tI[0] && timer < tF[0]) {
                document.querySelector(`#t0${timer + 1}`).innerText = 1;
                document.querySelector(`#t0${timer + 1}`).bgColor = "#2167cf";
                timer++;
                pE[0]++;
                if (pE[0] == parseInt(processExc[0].value)) {
                    tI[0] = tI[0] + parseInt(processPerid[0].value);
                    tF[0] += parseInt(processPerid[0].value);
                    pE[0] = 0;
                }
            }
            else if (timer >= tI[1] && timer < tF[1]) {
                document.querySelector(`#t1${timer + 1}`).innerText = 1;
                document.querySelector(`#t1${timer + 1}`).bgColor = "#cf6721";
                timer++;
                pE[1]++;
                if (pE[1] == parseInt(processExc[1].value)) {
                    tI[1] = tI[1] + parseInt(processPerid[1].value);
                    tF[1] += parseInt(processPerid[1].value);
                    pE[1] = 0;
                }
            }
            else {
                timer++;
            }
        } 
    }
    if (processPerid.length==3){
        for (let i = 0; i < SCM; i++) {
            if (timer >= tI[0] && timer < tF[0]) {
                document.querySelector(`#t0${timer + 1}`).innerText = 1;
                document.querySelector(`#t0${timer + 1}`).bgColor = "#2167cf";
                timer++;
                pE[0]++;
                if (pE[0] == parseInt(processExc[0].value)) {
                    tI[0] = tI[0] + parseInt(processPerid[0].value);
                    tF[0] += parseInt(processPerid[0].value);
                    pE[0] = 0;
                }
            }
            else if (timer >= tI[1] && timer < tF[1]) {
                document.querySelector(`#t1${timer + 1}`).innerText = 1;
                document.querySelector(`#t1${timer + 1}`).bgColor = "#cf6721";
                timer++;
                pE[1]++;
                if (pE[1] == parseInt(processExc[1].value)) {
                    tI[1] = tI[1] + parseInt(processPerid[1].value);
                    tF[1] += parseInt(processPerid[1].value);
                    pE[1] = 0;
                }
            }
            else if (timer >= tI[2] && timer < tF[2]) {
                document.querySelector(`#t2${timer + 1}`).innerText = 1;
                document.querySelector(`#t2${timer + 1}`).bgColor = "#cfbe21";
                timer++;
                pE[2]++;
                if (pE[2] == parseInt(processExc[2].value)) {
                    tI[2] = tI[2] + parseInt(processPerid[2].value);
                    tF[2] += parseInt(processPerid[2].value);
                    pE[2] = 0;
                }
            }
           
            else {
                timer++;
            }
        } 
    }
    if (processPerid.length==4){
        for (let i = 0; i < SCM; i++) {
            if (timer >= tI[0] && timer < tF[0]) {
                document.querySelector(`#t0${timer + 1}`).innerText = 1;
                document.querySelector(`#t0${timer + 1}`).bgColor = "#2167cf";
                timer++;
                pE[0]++;
                if (pE[0] == parseInt(processExc[0].value)) {
                    tI[0] = tI[0] + parseInt(processPerid[0].value);
                    tF[0] += parseInt(processPerid[0].value);
                    pE[0] = 0;
                }
            }
            else if (timer >= tI[1] && timer < tF[1]) {
                document.querySelector(`#t1${timer + 1}`).innerText = 1;
                document.querySelector(`#t1${timer + 1}`).bgColor = "#cf6721";
                timer++;
                pE[1]++;
                if (pE[1] == parseInt(processExc[1].value)) {
                    tI[1] = tI[1] + parseInt(processPerid[1].value);
                    tF[1] += parseInt(processPerid[1].value);
                    pE[1] = 0;
                }
            }
            else if (timer >= tI[2] && timer < tF[2]) {
                document.querySelector(`#t2${timer + 1}`).innerText = 1;
                document.querySelector(`#t2${timer + 1}`).bgColor = "#cfbe21";
                timer++;
                pE[2]++;
                if (pE[2] == parseInt(processExc[2].value)) {
                    tI[2] = tI[2] + parseInt(processPerid[2].value);
                    tF[2] += parseInt(processPerid[2].value);
                    pE[2] = 0;
                }
            }
            else if (timer >= tI[3] && timer < tF[3]) {
                document.querySelector(`#t3${timer + 1}`).innerText = 1;
                document.querySelector(`#t3${timer + 1}`).bgColor = "#ac21cf";
                timer++;
                pE[3]++;
                if (pE[3] == parseInt(processExc[3].value)) {
                    tI[3] = tI[3] + parseInt(processPerid[3].value);
                    tF[3] += parseInt(processPerid[3].value);
                    pE[3] = 0;
                }
            }
            else {
                timer++;
            }
        } 
    }
      
}
numOfProcBtn.onclick = generatePeriods;
