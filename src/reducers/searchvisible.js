
const initState = {
    searchVisible: false,
    federatedSearchVisible: false,
    catOne : false,
    catTwo: false
}

 const visibility  = (state = initState, action) => {
switch(action.type){
    case 'SEARCHVISIBLE':
        return {
            ...state,
            searchVisible: true
        };
    case 'FEDERATEDSEARCH_VISIBLE':
            return {
                ...state,
                federatedSearchVisible: !state.federatedSearchVisible
            };
    case 'CAT_ONE':
            return {
                ...state,
                catOne: true
            };
    case 'CAT_TWO':
            return {
                ...state,
                catTwo: true
            };
        default:
      return { ...state };

    
}
}

export default visibility