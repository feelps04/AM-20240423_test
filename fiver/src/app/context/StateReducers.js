import { reducerCases } from "./constants";

export const initialState = {
    showLoginModal: false,
    showSignupModal: true,
    userInfo: undefined,
    isSeller: false,
    gigData: undefined

};

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_USER:
            return {
                ...state,
                userInfo: action.userInfo,
            };
        case reducerCases.TOGGLE_LOGIN_MODAL:
            return {
                ...state,
                showLoginModal: action.showLoginModal,
            };
        case reducerCases.TOGGLE_SIGNUP_MODAL:
            return {
                ...state,
                showSignupModal: action.showSignupModal,
            };
        case reducerCases.CLOSE_AUTH_MODEL:
            return {
                ...state,
                showSignupModal: false,
                showLoginModal: false,
            };
        case reducerCases.SET_USER:
            return {
                ...state,
                userInfo: action.userInfo,
            };
        case reducerCases.SWITCH_MODE:
            return {
                ...state,
                isSeller: !state.isSeller,
            };
        case reducerCases.SET_GIG_DATA:
            return {
                ...state,
                gigData: action.gigData,
            }


        default:
            return state;
    }
};

export default reducer;