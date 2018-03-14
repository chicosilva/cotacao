
const initial = {value: 'Opa'}

const reduceUser = function(state = initial, action){
    
    switch(action.type){
      case 'ALTERACAO':
        return {value: action.payload}
      default:
        return state;

    }

}

export default reduceUser;