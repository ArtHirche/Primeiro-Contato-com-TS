// Interface:
interface User {
    nome: string;
    age: number;
    maior: boolean;
    estado: 'solteiro' | 'namorando'
}

let usuario: User;

usuario = {
    nome: "Arthur",
    age: 18,
    maior: true,
    estado: 'namorando'
};

const printUser = (user: User) => {
    console.log(user.nome);
    console.log(user.age);
    console.log(user.maior);
    console.log(user.estado)
};

printUser(usuario)