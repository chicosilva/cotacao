const updateList = e => {
  
  return {
    type: "UPDATE_LIST",
    payload: {list: [{
      _id: 1,
      description: "VAmos te",
      created_at: "12/12/1980"
    },
    {
      _id: 2,
      description: "Test 2",
      created_at: "12/12/2000",
    }
  ]}
  }
}

const removeList = e => {
  console.log('asd')
  return {
    type: "REMOVE_LIST",
    payload: {list: []}
  }
}

module.exports = { updateList, removeList};