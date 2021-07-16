export const selectPersona = (value) => (dispatch) => {
    console.log(value)
    dispatch({
        type: 'SELECTPERSONA',
        payload : value
    })
}