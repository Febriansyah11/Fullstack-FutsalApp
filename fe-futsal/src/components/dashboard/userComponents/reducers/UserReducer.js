const initialState = {
    formType: 'new',
    loading: true,
    user: null,
    users: [],
    paymentForm: {
        idBookingTransient : ""
    }

};

function UserReducer(state = initialState, action) {
    const { type, users, user, loading, paymentForm, payment} = action;

    switch (type) {
        case 'STORE_FORM_DATA':
            return {...state, user };
        case 'SUBMIT_USER':
            return { ...state, loading: true };
        case 'FETCH_A_USER':
            return { ...state, loading: true };
        case 'FETCH_A_USER_DONE':
            return { ...state, loading, user };
        case 'FETCH_USERS':
            return { ...state, loading: true, users: [] };
        case 'FETCH_USERS_DONE':
            return { ...state, loading, users };
        case 'HANDLE_PAYMENT':
            return {...state, paymentForm: {...state.paymentForm, idBookingTransient : payment}}
        default:
            return state;
    }
}

export default UserReducer;
