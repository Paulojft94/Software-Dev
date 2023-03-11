//LAB02 Algoritmia e Programação ISEP/QA: Bloco 2
////// exercício1
export function calculateBoysPercentage(boys: number, girls: number): number {
  let total: number = boys + girls;

  let boysPercentage = boys / total;

  return boysPercentage;
}

export function calculateGirlsPercentage(boys: number, girls: number): number {
  let total: number = boys + girls;

  if (total == 0) throw new RangeError("Boys and girls must not equal zero");

  let girlsPercentage = girls / total;

  return girlsPercentage;
}

///////////

//Exercício #2

export function valorIntroduzido(inputNum: number): any {
  let valorNota: string;

  if (inputNum >= 8) {
    return (valorNota = "VERDADEIRO");
  }
}

///////////

//Exercício #3

export function pontos(x1: number, y1: number, x2: number, y2: number): number {
  let distPontos: number;
  let calc: number;

  calc = (x2 - x1) ^ (2 + (y2 - y1)) ^ 2;

  distPontos = calc ^ 0.5;

  return distPontos;
}

///////////

//Exercício #4

export function verNumber(num: number): any {
  let valor: any;
  let digito1: number;
  let digito2: number;
  let digito3: number;

  if (num % 100 === num || num % 1000 === num) {
    digito3 = num % 10;
    digito2 = (num / 10) % 10;
    digito1 = (num / 100) % 10;
    valor = Math.floor(digito1);
  } else {
    valor = "Number não tem 3 dígitos";
  }

  return valor;
}

///////////

//Exercício #5

export function evenCalc(num: number): string {
  let even: string = "Não É PAR";

  if (num % 2 == 0) even = "É Par";
  return even;
} ///////////

//Exercício #6
export function funcao(num: number): number {
  let output: number = 0;
  if (num < 0) {
    output = num;
  }
  if (num == 0) {
    output = 0;
  }
  if (num > 0) {
    output = num ** 2 - 2 * num;
  }
  return output;
}
///////////

//Exercício #7

export function volumeCubo(numArea: number): number {
  let aresta: number;
  let vol: number;

  if (numArea > 0) {
    aresta = (numArea / 6) ** 0.5;
    vol = aresta ** 3;
  } else vol = -1;
  return vol;
}

export function cubeClassification(cubeClass: number): string {
  let classification: string = "aa";

  if (cubeClass <= 1) {
    classification = "Pequeno";
  } else if (cubeClass > 1 && cubeClass < 2) {
    classification = "Médio";
  } else if (cubeClass > 2) {
    classification = "Grande";
  }
  return classification;
}

///////////

//Exercício #8

export function calcHoras(numSec: number): string {
  let hours: number = Math.floor(numSec / 3600);
  let minutes: number = Math.floor((numSec % 3600) / 60);
  let seconds: number = numSec % 60;

  let formatRes = hours + ":" + minutes + ":" + seconds;

  return formatRes;
}

//Exercício #9

export function saudacao(numSec: number): string {
  const horaS = 3600;

  let sauda: string = "a";

  let LimitDia1: number = 6 * horaS;
  let limitDia2: number = 12 * horaS;
  let limitTar1: number = 12 * horaS + 1;
  let limitTar2: number = 20 * horaS;
  let limitNoi1: number = 20 * horaS + 1;
  let eixoNoi: number = 24 * horaS - 1;
  let limitNoi2: number = 5 * horaS + (horaS - 1);

  if (numSec >= LimitDia1 && numSec < limitDia2) sauda = "Bom dia";

  if (numSec >= limitTar1 && numSec < limitTar2) sauda = "Boa tarde";

  if ((numSec >= limitNoi1 && numSec <= eixoNoi) || (numSec >= 0 && numSec <= limitNoi2)) sauda = "Boa Noite";

  return sauda;
}

//Exercício #10

export function multiDiv(x: number, y: number): string {
  let resultado: string = "s";

  if (x % y == 0) resultado = "X é Múltiplo de Y";
  else if (y % x == 0) resultado = "Y é Múltiplo de x";
  else resultado = "X não é múltiplo, nem divisor de Y";

  return resultado;
}

//Exercício #11
export function numSegregation(num: number): number[] {
  let numDigit: number[] = [0, 0, 0];

  numDigit[0] = Math.floor(num / 100);
  numDigit[1] = Math.floor((num % 100) / 10);
  numDigit[2] = num % 10;

  return numDigit;
}

export function numListClassification(list: number[]): string {
  let classificacao: string = "a";

  if (list[0] < list[1] && list[1] < list[2]) classificacao = "A sequência é crescente";
  else classificacao = "A sequência não é crescente";

  return classificacao;
}

//Exercício #12

export function discountedPreco(price: number): number {
  let rebatido: number;

  if (price > 200) {
    rebatido = price * 0.4;
  } else if (price > 100 && price <= 200) {
    rebatido = price * 0.6;
  } else if (price > 50 && price <= 100) {
    rebatido = price * 0.7;
  } else rebatido = price * 0.8;

  return rebatido;
}

//Exercício #13

export function turmaClassificacao(num: number): string {
  let resultado: string = "s2";

  if (num < 0 || num > 1) {
    resultado = "Valor Inválido";
  } else if (num < 0.2) {
    resultado = "Turma Má";
  } else if (num < 0.5) {
    resultado = "Turma Fraca";
  } else if (num < 0.7) {
    resultado = "Turma Razoável";
  } else if (num < 0.9) {
    resultado = "Turma Boa";
  } else if (num <= 1) {
    resultado = "Turma Excelente";
  }

  return resultado;
}

//Exercício #14

export function empresaGrupo(num: number): string {
  let anuncio: string = "a";

  if (num >= 0 && num <= 0.3) {
    anuncio = "Índice de poluícão aceitável";
  } else if (num > 0.5) {
    anuncio = "Todos os grupos estão suspensos";
  } else if (num > 0.4) {
    anuncio = "Os grupos 1 e 2 estão suspensos";
  } else if (num > 0.3) {
    anuncio = "O grupo 1 está suspenso";
  }

  return anuncio;
}

//Exercício #14

export function tempoCalc(erva: number, arvores: number, arbustos: number): number {
  let duracaoServico: number = 0;
  let gramaDur: number = erva * 300;
  let arvoresDur: number = arvores * 600;
  let arbustosDur: number = arbustos * 400;

  duracaoServico = gramaDur + arvoresDur + arbustosDur;

  return duracaoServico;
}

export function precoCalc(erva: number, arvs: number, arbustos: number, maoObra: number): number {
  let precoGrama: number = erva * 10;
  let precoArvs: number = arvs * 20;
  let precoArbustos: number = arbustos * 15;
  let manPowerPrice: number = (maoObra / 3600) * 10;
  let precoTotal: number;

  precoTotal = precoGrama + precoArvs + precoArbustos + manPowerPrice;

  return precoTotal;
}
