//Classes:
class Usuario {
    public nome: string;
    public age: number;
    private saldoBancario: number

    constructor(nome: string, age: number) {
        this.nome = nome;
        this.age = age;
        this.saldoBancario = 0;
    }
}

const classUser = new Usuario("Arthur", 18);