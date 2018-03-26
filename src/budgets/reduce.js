const initial = {

  title: "Orçamentos",
  list: [],
  success: false,
  start_date: null,
  columns: [{
    dataField: 'title',
    text: 'Orçamento'
  }, {
    dataField: 'created_at',
    text: 'Data'
  }]

}

const TYPES = {
  LIST: 'LIST',
  UPDATE_DATE: 'UPDATE_DATE',
  NEW: 'NEW',
}

const budgetsReducer = function (state = initial, action) {

  switch (action.type) {

    case TYPES.UPDATE_DATE:
      return {...state, start_date: action.payload}

    case TYPES.LIST:
      return Object.assign({},
        state, {
          list: action.payload.data.list,
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

module.exports.budgetsReducer = budgetsReducer;
module.exports.TYPES = TYPES;