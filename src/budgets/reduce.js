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

const budgetsReducer = function (state = initial, action) {

  switch (action.type) {

    case 'UPDATE_DATE':
      return {...state, start_date: action.payload}

    case 'GET_LIST':
      return Object.assign({},
        state, {
          list: action.payload.data.budgets,
          success: false
        }
      )
    
    case 'NEW_BUDGET':
      
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

export default budgetsReducer;