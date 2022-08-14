// Questão 1
const funcionario = {
    codigo: 10,
    nome: 'João'
};

// Questão 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

// Questão 3 e 
interface Funcionario {  
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}