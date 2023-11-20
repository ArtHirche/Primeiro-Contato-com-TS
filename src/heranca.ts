//Herança:
class Pessoa {
    nome: string;
    age: number;

    cumprimento(nome: string) {
        console.log(`Olá, ${nome}!`);
    }
}

interface Teste {
    salario: number;
    comer(): void;
}

class HerancaUsuario extends Pessoa implements Teste{
    salario: number;
    comer(): void {
        console.log('comendo...');
    }
}

const herancaUser = new HerancaUsuario();