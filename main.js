let simulate = document.querySelector('.createLiftFloorButton');
let restart = document.querySelector('.goToFirstPage');
restart.addEventListener('click', hideSecondPage);
simulate.addEventListener('click', ()=> {
    let floorInputValue=document.querySelector('#floorNumber').value;
    let liftInputValue=document.querySelector('#liftNumber').value;

    if (floorInputValue <1 || liftInputValue<1){
        alert("Please Enter positive values: ")
    }
    if (floorInputValue >3 || liftInputValue>1){
        alert("Please Enter less than 3 floors and 1 lift ")
    }
    else{
        document.querySelector('.firstPage').style.display = 'none';
        document.querySelector('.secondPage').style.display = 'block';
        makingFloors();
    }
    
});
function hideSecondPage() {
    document.querySelector('.secondPage').style.display = 'none';
    document.querySelector('.firstPage').style.display = 'flex';

    deletingFloors();

}
function makingFloors() {
    let floorInput = document.querySelector('#floorNumber').value;
    let liftInput = document.querySelector('#liftNumber').value;
    for (let i = floorInput; i > 0; i--) {
        let floordiv = document.createElement('div');
        floordiv.className = 'box';
        let buttonLift = document.createElement('div');
        buttonLift.className = 'buttonLift';
        let buttondiv1 = document.createElement('div');
        buttondiv1.className = 'button';
        let button1 = document.createElement("button");
        let text1 = document.createTextNode("Up");
        button1.className = "up";
        button1.setAttribute('id', `up${i}`);
        button1.appendChild(text1);
        let button2 = document.createElement("button");
        let text2 = document.createTextNode("Down");
        button2.className = "down";
        button2.setAttribute('id', `down${i}`);
        button2.appendChild(text2);
        buttondiv1.appendChild(button1);
        buttondiv1.appendChild(button2);
        buttonLift.appendChild(buttondiv1);
        floordiv.appendChild(buttonLift);
        let hrdiv = document.createElement('div');
        hrdiv.className = 'hrfloorName';
        let hr = document.createElement('hr');
        let spanFloorNo = document.createElement('span');
        spanFloorNo.innerText = `Floor ${i}`;
        hrdiv.appendChild(hr);
        hrdiv.appendChild(spanFloorNo);
        floordiv.appendChild(hrdiv);
        if (i==floorInput){
            button1.style.display = 'none';
        }
        if (i==1){
            button2.style.display = 'none';
        }
        document.querySelector('.secondPage').appendChild(floordiv);
    }
    let mainLift = document.createElement('div');
    mainLift.className = 'mainLift';

    for (let j = 1; j <= liftInput; j++) {
        let liftdiv = document.createElement('div');
        liftdiv.className = 'lift';
        liftdiv.setAttribute('id', `lift${j}`);
        liftdiv.setAttribute('flag', `free`);
        let gates = document.createElement('div');
        gates.className = 'gates';
        gates.setAttribute('id', `gates`);
        let gate1 = document.createElement('div');
        gate1.className = 'gate1';
        gates.appendChild(gate1);
        let gate2 = document.createElement('div');
        gate2.className = 'gate2';
        gates.appendChild(gate2);
        liftdiv.appendChild(gates);
        mainLift.appendChild(liftdiv);
    }
    const mainbuttonlift = document.querySelectorAll('.buttonLift');
    const lastbox = mainbuttonlift[mainbuttonlift.length - 1];
    lastbox.appendChild(mainLift);
    let selectAllLift = document.querySelectorAll('.lift');
    let up = document.querySelectorAll('.up');
    let down = document.querySelectorAll('.down');
    let nUp = up.length;
    let prev = 0;
    let oldFloorValueArray=[];

    for(let i=0;i<selectAllLift.length;i++){
        oldFloorValueArray.push(1)
    }
    up.forEach((e, i) => {
        e.addEventListener('click', () => {
            let floorValue = nUp - i;
            for (let i = 0; i < selectAllLift.length; i++) {
                 if (selectAllLift[i].getAttribute('flag') === 'free') {
                    selectAllLift[i].setAttribute('flag', 'busy');
                    moveLift(selectAllLift[i], floorValue,oldFloorValueArray[i]);
                    oldFloorValueArray[i]=floorValue;
                    
                    break;
                }
            }
        })
    })
    down.forEach((e, i) => {
        e.addEventListener('click', () => {
            let floorValue = nUp - i;
            for (let i = 0; i < selectAllLift.length; i++) {
                if (selectAllLift[i].getAttribute('flag') === 'free') {
                    selectAllLift[i].setAttribute('flag', 'busy');
                    moveLift(selectAllLift[i], floorValue,oldFloorValueArray[i]);
                    oldFloorValueArray[i]=floorValue;
                    break;
                }
            }
        })
    })
}
function moveLift(liftno, floorNo,oldFloorValue) {

    if (floorNo>7){
        liftno.style.transform = `translateY(${-92.5 * (floorNo - 1)}px)`
    }
    else
        liftno.style.transform = `translateY(${-93 * (floorNo - 1)}px)`;
    let prev= `${ Math.abs(floorNo - oldFloorValue)}s`
    liftno.style.transitionDuration = prev;


    setTimeout(() => {

        gateopenclose(liftno);
        setTimeout(() =>{
            liftno.setAttribute('flag', 'free')
        },3500);
        console.log(liftno.getAttribute('flag'))
    },  Math.abs(floorNo - oldFloorValue) * 1000)

} 

function gateopenclose(liftno) {
    let gates=liftno.firstChild; 
    let gate1 = document.querySelector('.gate1');
    // let gate2 = document.querySelector('.gate2');
    setTimeout(() => {

        gates.children[0].style.width = '3px';
        gates.children[1].style.width = '3px';
    }, 500);

    // gate close in 2.5s
    setTimeout(() => {
        gates.children[0].style.width = '25px';
        gates.children[1].style.width = '25px';
    }, 2500)
}

function deletingFloors() {
    let floorInput = document.querySelector('#floorNumber').value;

    for (let i = floorInput; i > 0; i--) {
        let floordiv = document.querySelector('.box');
        floordiv.remove();
    }
}