class HeroiDeterminado {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let tipoAtaque = "";
        switch (this.tipo) {
            case "mago":
                tipoAtaque = "magia";
                break;
            case "guerreiro":
                tipoAtaque = "espada";
                break;
            case "monge":
                tipoAtaque = "artes marciais";
                break;
            case "ninja":
                tipoAtaque = "shuriken";
                break;
            default:
                tipoAtaque = "ataque desconhecido";
        }
        return tipoAtaque;
    }
}


let heroiMagoDeFogo = new HeroiDeterminado("Ryuu", 25, "mago");

let ataque = heroiMagoDeFogo.atacar();

console.log(`O ${heroiMagoDeFogo.tipo} atacou usando ${ataque}`);

