export const searchVisible = () => (dispatch) => {
    dispatch({
        type: 'SEARCHVISIBLE'
    })
}
export const federatedSearchVisible = () => (dispatch) => {
    dispatch({
        type: 'FEDERATEDSEARCH_VISIBLE'
    })
}
export const catOne = () => (dispatch) => {
    dispatch({
        type: 'CAT_ONE'
    })
}
export const catTwo = () => (dispatch) => {
    dispatch({
        type: 'CAT_TWO'
    })
}