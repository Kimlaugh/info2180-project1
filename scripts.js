window.onload = function(){
    const submitBtn = document.getElementsByClassName('btn')[1]
    const emailArea = document.getElementById("email")
    const messageArea = document.querySelector(".message")
    

    console.log(submitBtn) 
    console.log(emailArea)
    console.log(messageArea)
    var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    submitBtn.addEventListener("click",(event) =>{
        event.preventDefault()
        console.log(event)
        if(emailArea.value.match(emailPattern)){
            email = emailArea.value
            let successMessage = "Thank you! Your email address " + email +" has been added to our mailing list!"
            messageArea.textContent = successMessage
        }
        else{
            let failMessage = "Please enter a valid email address"
            messageArea.textContent = failMessage
        }

    })
}



        
        




   



