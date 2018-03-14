function changeValue(e){
  
  return {
    type: "ALTERACAO",
    payload: e.target.value
  }
}

export default changeValue;