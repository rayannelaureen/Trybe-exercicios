               /* EXERCICIO 1*/


 let a = 60;
 let b = 40;
 let c = 20;
 let valor = -5;

 let multiplicacao = a * b;
 let adicao = a + b;
 let subtracao = a - b;
 let divisao = a / b;

 console.log(multiplicacao);

 console.log(adicao);

 console.log(subtracao);

 console.log(divisao);

                /* EXERCICIO 2*/

if (a > b){
     console.log(a + ' é maior que ' + b);
    
}

                /* EXERCICIO 3*/
if(a > b || a > c){
     console.log(a + ' é maior que ' + b + ' e ' + c);
}
 else if(b > a || b > c){
     console.log(b + ' é maior que ' + a + ' e ' + c);
}
 else if(c > a || c > b){
     console.log(c + ' é maior que ' + a + ' e ' + b);
}

                 /* EXERCICIO 4*/
if(valor > 0){
     console.log('positive');
}
 else if(valor < 0){
     console.log('negative');
 }else{
     console.log('zero');
}
                   /* EXERCICIO 5*/
let triangulo = 180;
let angulo1 = 40;
let angulo2 = 60;
let angulo3 = 20;

if (angulo1 + angulo2 + angulo3 === triangulo){
     console.log('true');

}else{
     console.log('false')
}
/* EXERCICIO 6*/
let peca = 'rei';

 switch(peca){
     case 'rei':
         console.log('Pode mover-se em qualquer direção, porém apenas uma casa por vez.');
         break
     case 'dama':
         console.log(' Pode mover-se em qualquer direção (vertical, horizontal e diagonal), quantas casas quiser, desde que estejam livres.');
         break
     case 'torre':
         console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
         break
     case 'bispo':
         console.log('Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.');
         break
     case 'cavalo':
         console.log('É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.');
         break
     case 'peão':
         console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.');                
}
                /* EXERCICIO 8*/
let numero1 = 7;
let numero2 = 2;
let numero3 = 5;


 if(numero1 % numero1 ===0 || numero2 % numero2 || numero3 % numero3){
     console.log('true');

}

                 /*EXERCICIO 10*/
let custo = 50;
let venda = 100;
let vendasPorMes = 1000

let lucro = (venda - custo) * vendasPorMes;
console.log(lucro);

/* EXERCICIO 11*/

let salarioBruto = 2594;
let aliquotaINSS = 285;
let salarioBase = (salarioBruto - aliquotaINSS);

let valorIr = 173;
let valorDeduzido = 142;
let calculando = valorIr - valorDeduzido;

let salarioLiquido = salarioBase - calculando;
console.log(salarioLiquido);

