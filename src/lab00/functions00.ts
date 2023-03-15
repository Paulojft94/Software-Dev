/////Exercício2
export function florCalc(rSum: number, tSum: number, rPreco: number, tPreco: number): number {
  const total: number = rSum * rPreco + +tSum * tPreco;

  return total;
}

/////Exercício3

export function vCilindro(r: number, a: number): number {
  const pi: number = 3.14;

  let vCil = (pi * r) ** 2 * a * 1000;

  return vCil;
}

/////Exercício4

export function rectP(c: number, a: number): number {
  let perRect: number = 2 * c + 2 * a;
  return perRect;
}

/////Exercício5

export function hipoCalc(c1: number, c2: number): number {
  let hipo: number = (c1 ** 2 + c2 ** 2) ** 0.5;

  return hipo;
}

/////Exercício6

export function tempConv(tempInput: number): number {
  let fahrenheit = 32 + (9 / 5) * tempInput;

  return fahrenheit;
}

/////Exercício7

export function minConverter(h: number, m: number): number {
  const minutosPast = h * 60 + m;

  return minutosPast;
}

/////Exercício8

export function trovoadaDist(del: number): number {
  const distKM = (del * 340) / 1000;

  return distKM;
}

/////Exercício9 (X)

export function runDist(zeMins: number): number {
  let kmPerMin: number;
  let meanVel: number = 42.195 / (60 * (4 * 60)) + 2 * 60 + 10;

  kmPerMin = meanVel * 60;
  let zeDist = kmPerMin * zeMins;

  return zeDist;
}

/////Exercício10

export function alturaEd(queda: number): number {
  const altura: number = 0 * queda + (9.8 * 2 ** 2) / 2;

  return altura;
}

export function alturaEdi(sombraEd: number, altPessoa: number, sombraPessoa: number): number {
  const alturaEdificio = (sombraEd / sombraPessoa) * altPessoa;
  return alturaEdificio;
}
