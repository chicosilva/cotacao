import { AlertDanger, AlertSuccess } from '../core/AlertMessages';

const initialUser = {
  token: '',
  title: "Orçamentos",
  error: false,
}


const reduceUser = function (state=initialUser, action) {
  
  switch (action.type) {
    
    case 'NEW_USER':
      return {...state, user: action.payload.data}
    
    case 'ERROR_VALIDATION':
      return {...state, user: action.payload.data}

    case 'USER_DATA':
      return {
        ...state, 
        user: action.payload.data
      }
    
    default:
        return state;

  }

}

export default reduceUser;