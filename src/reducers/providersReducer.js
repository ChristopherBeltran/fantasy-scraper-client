const initialState = {
    loggedIntoYahoo: false,
    loggedIntoESPN: false
}

export default (state, action) => {
    switch (action.type) {
        case "YAHOO_LOGIN":
            return {
                ...state,
                loggedIntoESPN: state.loggedIntoESPN,
                loggedIntoYahoo: true
            }
        case "ESPN_LOGIN":
            return {
                ...state,
                loggedIntoYahoo: state.loggedIntoYahoo,
                loggedIntoESPN: true
            }
        default:
            return initialState
    }
}