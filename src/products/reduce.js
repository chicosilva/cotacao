const initial = {

  title: "Produtos",
  list: [],
  success: false,
  start_date: null,
  columns: [{
    dataField: 'name',
    text: 'Nome'
  }, {
    dataField: 'created_at',
    text: 'Data'
  }]

}

const TYPES = {
  LIST: 'LIST',
  NEW: 'NEW',
}

const productsReducer = function (state = initial, action) {

  switch (action.type) {

    case TYPES.LIST:
      return Object.assign({},
        state, {
          list: action.payload.data.budgets,
          success: false
        }
      )
    
    case TYPES.NEW:
      
      return Object.assign({},
        state, {
          data: action.payload,
          success: true
        }
      )
    
    default:
      return state;

  }

}

module.exports.productsReducer = productsReducer;
module.exports.TYPES = TYPES;