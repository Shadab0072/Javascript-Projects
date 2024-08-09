const Body = document.querySelector('body');
const Button = document.querySelectorAll('.box')

Button.forEach( (ButtonValue)=>{
    ButtonValue.addEventListener('click', (e)=>{

       switch (e.target.id) {
        case 'yellow':
            Body.style.backgroundColor = e.target.id
            break;
        case 'purple':
                Body.style.backgroundColor = e.target.id
                break;
         case 'green':
              Body.style.backgroundColor = e.target.id
                    break;
          case 'grey':
                        Body.style.backgroundColor = e.target.id
                        break;
                        
          case 'red':
                        Body.style.backgroundColor = e.target.id
                        break;
                        
          case 'orange':
                        Body.style.backgroundColor = e.target.id
                        break;
                        
       }
    })
})
   



// digital clock

const clock = document.getElementById('clock')
    

setInterval(()=>{
    const date = new Date()
    clock.innerHTML =  date.toLocaleTimeString()
},1000)

