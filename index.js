const characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','*','(',')']

// RandomNumber calculation

function getRandomNumber(){
    let randomNumber = Math.floor(Math.random()*characters.length)
    return randomNumber;
}

// generate the Password

function genPass() {

    const passwordLength = 15
    const allowedCharacterLength = characters.length
    let pass1 = []
    let pass2 = []
        
    for (let i=0; i<passwordLength; i++){
        let singleCharacter = characters[getRandomNumber(allowedCharacterLength)]
        pass1.push(singleCharacter)
    }
    
    for (let i=0; i<passwordLength; i++){
        let singleCharacter = characters[getRandomNumber(allowedCharacterLength)]
        pass2.push(singleCharacter)
    }

    // display the passwords
    
    document.getElementById("displayPass1").textContent = pass1.join("");
    document.getElementById("displayPass2").textContent = pass2.join("");
}

