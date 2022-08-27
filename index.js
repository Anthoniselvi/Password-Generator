 const characters = ['A','B','C','D','a','b','c','d','1','2','3','4','@','$','%','#']

function genPass() {
   
    let num=15
    for (let i=0; i<=characters.length; i++){
    
    let randomIndex = Math.floor(Math.random() * characters.length)
        resultStr = characters[randomIndex]
    }
        return resultStr
    }

    function renderPassword(){
        let passwords = generatePassword()
        for (let i=0; i<displayPassword.length; i++){
        displayPassword[i].textContent = passwords[i]
    }
    }
generateBtn.addEventListener('click', renderPassword)   

