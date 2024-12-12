//operadores de atribuição

//recebe
let nome = "Nagila";
let idade = 42;

//atribuidor incremental
nome += " Silva";
idade += 1;

//atribuidor decremental
idade -= 5;

//operadores aritméticos 

let adicao = 2 + 2;
let subtracao = 2 - 3;
let divisao = 2 / 2;
let mutiplicacao = 2 * 2;
let restoDaDivisao = 16 % 2;
let restoDaDivisao = 3 % 2;

//concatenação 
let concatenacao = "ola" + "" + "Adriana"

//concatenção com template string
let concatenacao = 'seja bem-vindo ${nome}';

//operadores de comparação
let igual = 2 == 2;//true
let igualDenovo = 2 == 3;//false
let diferente = 2 != 2;//true
let diferenteDenovo = 2 != 3;//false
let igualEmtudo = 2 === 2;//true
let igualQuaseTudo = 2 === 3;//false
let igualQuaseTudo2 = 2 === '2';//false
let diferenteEmtudo = 2 !== 2;//false
let diferenteQuasetudo = 2 !== 3;//true
let diferenteQuasetudo2 = 2 !== '2';//true
let maiorQ = 2 > 3;//false
let maiorQ2 = 3 > 2;//true
let menorQ = 3 < 2;//false
let menorQ2 = 2 < 3;//true
let maiorOuIgualQ = 2 >= 3;//false
let maiorOuIgualQ2 = 3 >= 2;//true
let maiorOuIgualQ3 = 3 >= 3;//true
let menorOuIgualQ = 3 <= 2;//false
let menorOuIgualQ2 = 2 <= 3;//true
let menorOuIgualQ3 = 3 <= 3;//true

//Operadores Lógicos
let elogico = 2 == 2 && 3 == 3;//true
let elogicoFalso = 2 != 2 && 3 == 3;//false
let oulogico = 2 == 2 || 3 == 3;//true
let oulogicoTrueTambem = 2 == 2 || 3 != 3;//true
let oulogicoFalso = 2 != 2 || 3 != 3;//false