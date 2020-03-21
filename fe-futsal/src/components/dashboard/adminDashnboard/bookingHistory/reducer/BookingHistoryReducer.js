const {createStore} = require('redux');
const initialState = {
    payments : []
};

export default function rolesReducers(state= initialState, action) {
    switch (action.type) {
        case 'FETCH_PAYMENTS_SUCCESS' :
            return {...state, payments: action.payload};
        default: return state;
    }
}
