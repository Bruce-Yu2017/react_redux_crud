const defaultState = {
  names: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_NAME":
    // console.log("get all ne")
      return {
        names: action.names
      }
      
  
    default:
      return state;
  }
}