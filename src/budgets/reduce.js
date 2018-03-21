const initial = {

  title: "Orçamentos",
  list: [],
  success: false,
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

    case 'UPDATE_LIST':
      return Object.assign({},
        state, {
          list: action.payload,
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