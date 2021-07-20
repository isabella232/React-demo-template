export const getQuery = (value) => (dispatch) => {
    dispatch({
        type: 'GET_QUERY',
        payload : value
    })
}