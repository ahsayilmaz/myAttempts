export const palindromeTwo=(sentence)=>{
    let listOfLetters = sentence.replace(/[^a-zA-Z]/,"").split("")
    let areLetttersEqual = 0
    for(let i =0;i<parseInt(listOfLetters.length/2);i++){
        if(listOfLetters[i].toLowerCase===listOfLetters[listOfLetters.length-1 - i].toLowerCase){areLetttersEqual++}
    }
    return areLetttersEqual===parseInt(listOfLetters.length/2)
}
