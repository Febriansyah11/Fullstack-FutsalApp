const {createStore} = require('redux');
const initialState = {
    roles : []
};

export default function rolesReducers(state= initialState, action) {
    switch (action.type) {
        case 'FETCH_ROLES_SUCCESS' :
            return {...state, roles: action.payload};
        default: return state;
    }
}
