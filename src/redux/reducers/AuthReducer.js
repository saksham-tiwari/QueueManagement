export function AuthReducer(state = {}, action) {
    switch (action.type) {
        case "User_Email":
            return {
                ...state,
                email: action.payload
            };
            case "User_Pass":
            return {
                ...state,
                pass: action.payload
            };
            case "User_Name":
            return {
                ...state,
                name: action.payload
            };
            case "User_Mobile":
            return {
                ...state,
                mobile: action.payload
            };
            case "User_Gender":
            return {
                ...state,
                gender: action.payload
            };
            case "User_Type":
            return {
                ...state,
                type: action.payload
            };
        default:
            return state;
    }
}