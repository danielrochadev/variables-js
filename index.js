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

let possuiMoto = null;
let possuiCarro = null;

if (possuiMoto) {
  console.log("Ele possui moto");
} else if (possuiCarro) {
  console.log("Ele possui carro");
} else {
  console.log("Não tem nenhum veículo");
}

if (1 > 2 && 2 > 4) {
  console.log("true");
} else {
  console.log("false");
}

function imcCalc(peso, altura) {
  const imc = peso / altura ** 2;

  return imc;
}

console.log(imcCalc(80, 1.75));

function carroFavorito(carro) {
  if (carro === "Fusca") {
    console.log("Você gosta de Fusca");
  } else if (carro === "Gol") {
    console.log("Você gosta de Gol");
  } else {
    console.log("Você gosta de outro carro");
  }
}

carroFavorito();

let car = {
  name: "Ferrari",
  anoFabricação: 2021,
  Quilometragem: 0,
  dirigir: function (km) {
    let kmatualizado = km + car.Quilometragem;

    car.Quilometragem = kmatualizado;

    return `Agora o carro tem ${kmatualizado}km rodados.`;
  },
  cor: "Azul",
};
