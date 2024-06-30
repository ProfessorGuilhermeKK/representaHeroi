class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataque() {
        if (this.tipo === 'mago') {
            return 'usou magia';
        } else if (this.tipo === 'guerreiro') {
            return 'usou espada';
        } else if (this.tipo === 'monge') {
            return 'usou artes marciais';
        } else if (this.tipo === 'ninja') {
            return 'shuriken';
        } else {
            return 'tipo inválido';
        }
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque()}.`);
    }
}


const heroi1 = new Heroi('Geraldinho', 250, 'guerreiro');
heroi1.atacar(); 
