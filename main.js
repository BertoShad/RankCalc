var vitorias = 110
var derrotas = 1
var rank


    function calculoRank() {

        var res = vitorias - derrotas

    switch (true) {
        case res <= 10:
            rank = "Ferro";
            break
        
        case res <= 20:
            rank = "Bronze";
            break
        
        case res <= 50:
            rank = "Prata";
            break
        
        case res <= 80:
            rank = "Ouro";
            break
        
        case res <= 90:
            rank = "Diamante";
            break
        
        case res <= 100:
            rank = "Lendário";
            break
        
        case res >= 101:
            rank = "Imortal";
            break

        default:
            rank = "Desconhecido";
    }
    return res
}   
var resultado = calculoRank();
console.log(`O Herói tem o saldo de ${resultado} vitórias e está no nível ${rank}`)