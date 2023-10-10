export const anlamlıKısım = (num) =>{
    num.toString()
    num.split("").replace(/[^0-9]/, "")
    for(let i = 0; i<num.length;i++){
        parseInt(num[i])
    }
    while(num.length>4){
        for(let i=num.length;i>0;i--){
            if(num[i]>5){
                num[i].replace('')
                num[i--]++
            }
            if(num[i]<5){
                num[i].replace('')
            }
            if(num[i]===5){
                if(num[i--]%2===0){
                    num[i].replace('')
                    num[i--]++
                }
            }
        }
    }
}
