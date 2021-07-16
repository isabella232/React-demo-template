const initState = {
    query : null
}

const getQuery  = (state = initState, action) => {
switch(action.type){
    case 'GET_QUERY':
        return {
            ...state,
            query: action.payload
        }
        default:
      return { ...state };

    
}
}

export default getQuery