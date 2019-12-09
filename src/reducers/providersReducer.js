const initialState = {
    loggedIntoYahoo: false
}

export default (state, action) => {
    switch (action.type) {
        case "YAHOO_LOGIN":
            return {
                loggedIntoYahoo: true
            }
        default:
            return initialState
    }
}