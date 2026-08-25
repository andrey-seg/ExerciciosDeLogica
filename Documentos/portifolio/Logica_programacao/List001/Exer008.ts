function fahrenheitParaCelcius(graus: number): number{

    return (graus - 32) * (5 / 9);
}

console.log(`Temperatura em graus celsius => ${fahrenheitParaCelcius(68)}`);