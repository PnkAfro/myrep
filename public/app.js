const form = document.getElementById('form')
const userInputChar = document.getElementById('userInputChar')
const userInputText = document.getElementById('userInputText')
const subBtn = document.getElementById('btn')
const charValue = userInputChar.value




form.addEventListener('submit',(e) => {
    e.preventDefault()
    
   if(userInputChar.value.trim().length === 1 && isNaN(userInputChar.value.trim()) && userInputText.value.trim() != '' ){
     
     console.log('hmmmm')
    form.submit()}

    else {
        window.alert('please enter valid input!')
   }
})

subBtn.addEventListener('click', () => {
    
})