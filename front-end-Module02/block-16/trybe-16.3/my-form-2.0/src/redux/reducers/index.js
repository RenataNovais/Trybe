import { combineReducers } from 'redux';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  resume: '',
  role: '',
  roleDescription: '',
  all: [],
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HANDLER':
      return {
        ...state,
        [action.name]: [action.value]
      };
    case 'SUBMITED':
      action.event.preventDefault(); 
      return {
        ...INITIAL_STATE,
        all: [
          {
            name: state.name,
            email: state.email,
            cpf: state.cpf,
            address: state.address,
            city: state.city,
            countryState: state.countryState,
            resume: state.resume,
            role: state.role,
            roleDescription: state.roleDescription,
          },
        ],
      };
    case 'CLEAR':
      return {
        ...state,
        name: '',
        email: '',
        cpf: '',
        address: '',
        city: '',
        countryState: '',
        resume: '',
        role: '',
        roleDescription: '',
      };
    case 'CLEAR_ALL':
      return {
        ...state,
        all: []
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ reducer });

export default rootReducer;