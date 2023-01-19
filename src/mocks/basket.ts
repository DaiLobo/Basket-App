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
    button: 'Comprar',
  },
  itens: {
    title: 'Itens da cesta',
    list: [
      {
        name: 'Tomate',
        image: tomate,
      },
      {
        name: 'Brócolis',
        image: brocolis,
      },
      {
        name: 'Batata',
        image: batata,
      },
      {
        name: 'Pepino',
        image: pepino,
      },
      {
        name: 'Abóbora',
        image: abobora,
      },
    ],
  },
};

export default basket;
