let box = document.querySelector('.box')

window.addEventListener('keydown', (e) => {
    box.innerHTML = `<h1>${e.key == " " ? 'space' : e.key}  
    &&  ${e.keyCode} && ${e.code}</h1>`
 });

 

 