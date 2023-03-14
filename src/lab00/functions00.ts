/////Exercício2
export function florCalc(rSum: number, tSum: number, rPreco: number, tPreco: number): number {
  const total: number = rSum * rPreco + +tSum * tPreco;

  return total;
}

/////Exercício3

export function vCilindro(r: number, a: number): number {
  const pi: number = 3.14;

  let vCil = (pi * r) ** 2 * a;

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
