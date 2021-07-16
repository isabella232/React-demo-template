export const getQuery = (value) => (dispatch) => {
    console.log(value)
    dispatch({
        type: 'GET_QUERY',
        payload : value
    })
}