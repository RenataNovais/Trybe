import { DO_LOGIN, REGISTER_COSTUMER } from './actionCreators';

const initialState = {
  login: {
    email: '',
    senha: '',
  },
  costumers: [
    {
      name: 'Renata',
      cel: '232323232',
      email: 'rnovaiscs@gmail.com',
      fullAddress: {
        address: 'alameda',
        city: 'Belo Horizonte',
        countryState: 'MG',
      },
      seller: 'Paulo',
    },
  ],
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case DO_LOGIN:
      return {
        ...state,
        login: ({
          ...state.login,
          email: action.login.email,
          senha: action.login.senha,
        }),
      };
    case REGISTER_COSTUMER:
      console.log(action);
      return {
        ...state,
        costumers: [
          ...state.costumers,
          {
            name: action.costumer.name,
            cel: action.costumer.cel,
            email: action.costumer.email,
            fullAddress: {
              address: action.costumer.fullAddress.address,
              city: action.costumer.fullAddress.city,
              countryState: action.costumer.fullAddress.countryState,
            },
            seller: action.costumer.seller,
          }
        ]
      }
    default:
      return state;
  }
};

// const estadoInicial = {
//   name: 'testando',
//   sobrenome: 'nenhum',
//   idade: 'velha',
// }

// const store = (parametro) => ({
//   ...parametro,
//   oi: 'sou o estado inicial'
// });


// function reducer2(estado = estadoInicial, BATATINHA) {
//   switch (BATATINHA.type) {
//     case 'RENATA':
//       return {
//         ...estadoInicial,
//         sobrenome: BATATINHA.sobrenome,
//         idade: BATATINHA.idade,
//       }
//     case 'CARLA':
//       return 'NAKAJUNI'
//     // case açãoRENATA:
//     //   return 'NOVAIS cs'
//     default:
//       return estado;
//   }
// }

// // const acaoRENATA = {
// //   type: 'RENATA',
// //   sobrenome: 'NOVAIS',
// //   idade: 24,
// // }

// const acaoRENATA = (payload) => ({
//   type: 'RENATA',
//   sobrenome: payload.sobrenome,
//   idade: payload.idade,
// })

// console.log(reducer2('', acaoRENATA({sobrenome: 'NAKAJUNI', idade: 24})));
// console.log(reducer2('', acaoRENATA));
// console.log(store(reducer2('', acaoRENATA({sobrenome: 'NAKAJUNI OI', idade: 24}))));
// console.log(reducer2('sou legal', 'CARLA'));
// console.log(reducer2('somos legais', 'FULANO'));
// // console.log(reducer2());
// console.log(reducer2(null, 'RENATA'));
// console.log(reducer2(null, 'RENATA'));
