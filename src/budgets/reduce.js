const initial = {

  title: "Orçamentos",
  data: [],
  columns: [{
    dataField: '_id',
    text: 'ID'
  }, {
    dataField: 'description',
    text: 'Descrição'
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
          data: action.payload,
          success: true
        }
      )
    
    case 'NEW_BUDGET':
      return Object.assign({},
        state, {
          data: action.payload,
          success: true
        }
      )

    case 'ERROR_LOAD_DATA':
      return Object.assign({}, state, {
        data: action.payload,
        success: false
      });

    default:
      return state;

  }

}

export default budgetsReducer;