RandomColor = () => {
    let hex = "0123456789ABCDEF";
    let value = "#"

    for(let i=0; i<6; i++) {
        value += hex[Math.floor(Math.random()*16)];
        
    }
    return value
}


const start = document.getElementById('start')
const stop = document.getElementById('stop')

let v1 ;

const startChanging = () => {
    v1 = setInterval(()=>{ 
        document.body.style.backgroundColor = RandomColor();
    },1000)
}

const stopChanging = () =>{
    clearInterval(v1)
   
}

start.addEventListener('click' , startChanging);
stop.addEventListener('click', stopChanging)



