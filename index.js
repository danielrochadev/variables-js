var carro = "Chevrolet";
console.log(carro);

const pi = 3.14;
let resultado = pi * 100;
console.log(resultado);

let primeiroAno = 100;
let segundoAno = 100;
let resultado2 = primeiroAno + segundoAno;
console.log(resultado2);

let nome = "Daniel";
let sobrenome = "Rocha";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

let name = "Daniel";
let lastName = "Evangelista";
console.log(
  `Olá, eu me chamo ${name} ${lastName} e estou testando template string`
);

let informacoesCarro = [
  {
    nome: "Tucson",
    anoFabricação: 2009,
    câmbio: "Manual",
  },
  {
    nome: "Fiesta",
    anoFabricação: 2015,
    câmbio: "Automático",
  },
];
console.log(informacoesCarro.length);
// " - Verificando quantidade dentro do objeto através do length"

const testandoTipo = true;
console.log(typeof testandoTipo + " - testando o tipo da variável");
