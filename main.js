// novo comentário
// Este arquivo contém exemplos de diferentes funcionalidades JavaScript

console.log("=== TESTE JAVASCRIPT ===");

// 1. Variáveis e tipos de dados
let nome = "João";
let idade = 25;
let ativo = true;
let hobbies = ["programação", "música", "esportes"];

console.log("1. Variáveis:");
console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);
console.log("Hobbies:", hobbies);

// 2. Funções
function calcularIdadeEmDias(anos) {
    return anos * 365;
}

const calcularIMC = (peso, altura) => {
    return (peso / (altura * altura)).toFixed(2);
};

console.log("\n2. Funções:");
console.log(`Idade em dias: ${calcularIdadeEmDias(idade)}`);
console.log(`IMC: ${calcularIMC(70, 1.75)}`);

// 3. Objetos
const pessoa = {
    nome: "Maria",
    idade: 30,
    profissao: "Desenvolvedora",
    saudacao() {
        return `Olá, eu sou ${this.nome} e trabalho como ${this.profissao}`;
    }
};

console.log("\n3. Objetos:");
console.log(pessoa.saudacao());

// 4. Arrays e métodos
const numeros = [1, 2, 3, 4, 5];
const numerosPares = numeros.filter(num => num % 2 === 0);
const soma = numeros.reduce((acc, num) => acc + num, 0);

console.log("\n4. Arrays:");
console.log("Números originais:", numeros);
console.log("Números pares:", numerosPares);
console.log("Soma total:", soma);

// 5. Promises e async/await
function simularRequisicaoAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ dados: "Dados carregados com sucesso!", timestamp: new Date() });
        }, 1000);
    });
}

async function testarAsync() {
    console.log("\n5. Async/Await:");
    console.log("Carregando dados...");
    const resultado = await simularRequisicaoAPI();
    console.log("Resultado:", resultado);
}

// 6. Classes
class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }
    
    fazerSom() {
        return `${this.nome} faz algum som`;
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome, "Canino");
        this.raca = raca;
    }
    
    fazerSom() {
        return `${this.nome} late: Au Au!`;
    }
}

console.log("\n6. Classes:");
const meuCachorro = new Cachorro("Rex", "Golden Retriever");
console.log(meuCachorro.fazerSom());

// 7. Destructuring e Spread
const usuario = { id: 1, nome: "Ana", email: "ana@email.com" };
const { nome: nomeUsuario, email } = usuario;
const novosDados = { ...usuario, telefone: "123456789" };

console.log("\n7. Destructuring e Spread:");
console.log("Nome extraído:", nomeUsuario);
console.log("Email extraído:", email);
console.log("Novos dados:", novosDados);

// 8. Map e Set
const mapa = new Map();
mapa.set("chave1", "valor1");
mapa.set("chave2", "valor2");

const conjunto = new Set([1, 2, 2, 3, 3, 4]);
console.log("\n8. Map e Set:");
console.log("Map:", mapa.get("chave1"));
console.log("Set (valores únicos):", Array.from(conjunto));

// 9. Try/Catch
function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida!");
        }
        return a / b;
    } catch (erro) {
        console.error("Erro capturado:", erro.message);
        return null;
    }
}

console.log("\n9. Try/Catch:");
console.log("10 / 2 =", dividir(10, 2));
console.log("10 / 0 =", dividir(10, 0));

// 10. Teste de performance
console.log("\n10. Teste de Performance:");
const inicio = performance.now();

// Simular operação pesada
let resultado = 0;
for (let i = 0; i < 1000000; i++) {
    resultado += i;
}

const fim = performance.now();
console.log(`Loop executado em ${(fim - inicio).toFixed(2)}ms`);

// Executar teste async
testarAsync().then(() => {
    console.log("\n=== TESTE CONCLUÍDO ===");
});

// Exportar para uso em outros módulos (se necessário)
module.exports = {
    calcularIdadeEmDias,
    calcularIMC,
    Animal,
    Cachorro
};
