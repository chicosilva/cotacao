const initial = {

  title: "Orçamentos",
  columns: [{
    dataField: '_id',
    text: 'ID'
  }, {
    dataField: 'description',
    text: 'Descrição'
  }, {
    dataField: 'created_at',
    text: 'Data'
  }],

  list: []

}

const reduceUser = function (state = initial, action) {

  switch (action.type) {
    
    case 'UPDATE_LIST':
      return {
        ...state,
        list: action.payload.list
      }
    
    case 'REMOVE_LIST':
      
      return {
        ...state,
        list: action.payload.list
      }
    
      default:
        return state;

  }

}

export default reduceUser;