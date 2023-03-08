// exercício1
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
