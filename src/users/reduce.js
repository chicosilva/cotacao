const initialUser = {
  token: '',
  title: "Usuários",
  data: [],
  error: false,
  success: false,
}

export const getToken = () => sessionStorage.getItem('token');

const reduceUser = function (state = initialUser, action) {
  
  switch (action.type) {

    case 'NEW_USER':
      return Object.assign({},
        state, {
          data: action.payload,
          error: false,
          success: true
        }
      )
    
    case 'USER_DATA':
      return Object.assign({}, state, {
        data: action.payload,
        error: false
      })

    default:
      return state;

  }

}


export default reduceUser;