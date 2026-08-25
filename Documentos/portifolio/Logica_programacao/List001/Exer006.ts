function quociente(numero1: number, numero2: number): number{
    if(numero1 > numero2){
        throw new Error(`Valor1 não pode ser maior que valor2`);
    }

    return numero1 / numero2;
}

function resto(numero1: number, numero2: number): number{

    return numero1 % numero2;
}

console.log(`Quociente => ${quociente(3, 4)}`);
console.log(`Resto da div => ${resto(17, 2)}`);