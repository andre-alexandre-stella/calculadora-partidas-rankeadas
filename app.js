let qtdeVitorias = 100;
let qtdeDerrotas = 55;
let saldoVitorias = calcularSaldo(qtdeVitorias, qtdeDerrotas);
let nivel = verificarNivel(saldoVitorias);
console.log(`O herói tem saldo de ${saldoVitorias} e está no nível ${nivel}.`);

function calcularSaldo(vitorias, derrotas){
    return vitorias - derrotas;
}

function verificarNivel(saldo){
    let nivel = '';
    switch(true){
        case (saldo >= 101):
            nivel = 'Imortal';
            break;
        case (saldo >= 91):
            nivel = 'Lendário';
            break;
        case (saldo >= 81):
            nivel = 'Diamante';
            break;
        case (saldo >= 51):
            nivel = 'Ouro';
            break;
        case (saldo >= 21):
            nivel = 'Prata';
            break;
        case (saldo >= 11):
            nivel = 'Bronze';
            break;
        default:
            nivel = 'Ferro';
    }
    return nivel;
}