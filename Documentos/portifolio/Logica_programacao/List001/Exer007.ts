function idadePessoAnos(dias: number): number{

    return dias / 365;
}

function idadePessoaMeses(dias: number): number{
    
    return (dias / 365) * 12;
}

function idadePessoaDias(dias: number): number{
    
    return dias;
}

console.log(`Idade em anos => ${idadePessoAnos(365)}`);
console.log(`Idade em meses => ${idadePessoaMeses(365)}`);
console.log(`Idade em dias => ${idadePessoaDias(365)}`);