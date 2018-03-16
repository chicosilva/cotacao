const initialUser = {
  
  title: "Orçamentos",
  data: {
    email: '',
  },
}

const reduceUser = function (state=initialUser, action) {
  
  switch (action.type) {
    
    case 'NEW_USER':
      return {
        ...state,
        user: action.payload.data
      }
    
    case 'USER_DATA':
      
      return {
        ...state,
        data: action.payload.data
      }
    
    default:
        return state;

  }

}

export default reduceUser;