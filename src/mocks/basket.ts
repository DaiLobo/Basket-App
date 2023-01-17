const abobora = require('../../assets/frutas/Abóbora.png');
const batata = require('../../assets/frutas/Batata.png');
const brocolis = require('../../assets/frutas/Brócolis.png');
const pepino = require('../../assets/frutas/Pepino.png');
const tomate = require('../../assets/frutas/Tomate.png');
const logo = require('../../assets/logo.png');

const basket = {
  header: {
    title: 'Detalhe da cesta',
  },
  details: {
    name: 'Cesta de Verduras',
    logoFarm: logo,
    farmName: 'Jenny Jack Farm',
    description:
      'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinhas',
    price: 'R$ 40,00',
  },
  itens: {
    titulo: 'Itens da cesta',
    lista: [
      {
        nome: 'Tomate',
        imagem: tomate,
      },
      {
        nome: 'Brócolis',
        imagem: brocolis,
      },
      {
        nome: 'Batata',
        imagem: batata,
      },
      {
        nome: 'Pepino',
        imagem: pepino,
      },
      {
        nome: 'Abóbora',
        imagem: abobora,
      },
    ],
  },
};

export default basket;
