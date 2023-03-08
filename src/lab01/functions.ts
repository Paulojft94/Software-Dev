//LAB02 Algoritmia e Programação ISEP/QA: Bloco 2
////// exercício1
export function calculateBoysPercentage(boys: number, girls: number): number {

    let total: number = boys + girls;


    let boysPercentage = boys / total;

    return boysPercentage;
}

export function calculateGirlsPercentage(boys: number, girls: number): number {

    let total: number = boys + girls;

    if (total == 0)
        throw new RangeError('Boys and girls must not equal zero');

    let girlsPercentage = girls / total;

    return girlsPercentage;
}

///////////

//Exercício #2

export function valorIntroduzido(inputNum: number): any{
let valorNota:string;

    if(inputNum >= 8){
    return valorNota = "VERDADEIRO"; 
}

}

///////////

//Exercício #3

export function pontos(x1:number, y1:number, x2:number, y2:number ):number{
let distPontos:number;
let calc: number;

calc = (x2-x1)^2+(y2-y1)^2;

distPontos = calc^0.5;

return distPontos;
}

///////////

//Exercício #4

export function verNumber(num:number): any{
let valor: any;
let digito1: number;
let digito2: number;
let digito3: number;

    if (num % 100 === num || num % 1000 === num) {
        digito3= num%10;
        digito2=(num/10)%10;
        digito1=(num/100)%10;
        valor = Math.floor(digito1);
    
        }     else {
                 valor= "Number não tem 3 dígitos";
            }

    return valor;
}

///////////

//Exercício #5

export function evenCalc(num:number):string{
let even:string = "Não É PAR";

    if(num%2==0)

    even= "É Par";
    return even;

}


///////////

//Exercício #6
export function funcao(num:number):number{
let output:number=0;
if(num<0){
output=num;
}
if(num==0){
output=0;
}
if(num>0){
output=(num**2)-(2*num);
}
    return output;
}