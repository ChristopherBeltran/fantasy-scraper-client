const initialState = {
    loggedIntoYahoo: false,
    loggedIntoESPN: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "YAHOO_LOGIN":
            return {
                ...state,
                loggedIntoYahoo: true
            }
        case "ESPN_LOGIN":
            return {
                ...state,
                loggedIntoESPN: true
            }
        default:
            return state
    }
}