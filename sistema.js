let numerodeAlunos = 10 ;

// for (let contador = 0; contador <= numerodeAlunos; contador++) {
 //   console.log(contador)

  //  if(contador == 0){
       // console.log("O numero atual é zero")
  //  }else if(contador % 2 == 0){
   //     console.log("O numero é " + contador + " par")
   // }else{
   //     console.log(`o numero é ${contador} impar`)
  //  }
//}


let contador = 0;

while(contador <= numerodeAlunos) {
    console.log(contador)
    
    if(contador == 0){
        console.log("O numero atual é zero")
    }else if(contador % 2 != 0){
        console.log("O numero é" + contador + " impar")
    }else{
        console.log(`O numero é ${contador} par`)
    }
    contador++;
}
