export const DO_LOGIN = 'DO_LOGIN';

export const doLogin = (user) => ({
  type: DO_LOGIN,
  login: {
    email: user.email,
    senha: user.senha,
  },
});

export const REGISTER_COSTUMER = 'REGISTER_COSTUMER';

export const doRegisterCostumer = (info) => ({
  type: REGISTER_COSTUMER,
  costumer: {
    name: info.name,
    cel: info.cel,
    email: info.email,
    fullAddress: {
      address: info.fullAddress.address,
      city: info.fullAddress.city,
      countryState: info.fullAddress.countryState,
    },
    seller: info.seller,
  }
});
