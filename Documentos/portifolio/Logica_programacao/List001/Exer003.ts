function cacularAreaBaseadoEmRaio(raio: number): number{

    return (raio ** 2) * 3.14159;
}

function calcularPerimentro(raio: number): number{

    return (3.14159 * 2) * raio
}

console.log(`Area => ${cacularAreaBaseadoEmRaio(5)}`);
console.log(`Perimetro => ${calcularPerimentro(3)}`)