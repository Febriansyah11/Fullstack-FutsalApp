const initialState = {
    loading: true,
    stadiums: [],
    stadium: [],
    fields: [],
    addStadium: {
        stadiumName: "",
        address: "",
        openingHours: "",
        closingHours: "",
        idUserTransient: ""
    },
    addField: {
        idField: "",
        fieldCode: "",
        pricePerHour: "",
        idStadiumTransient: ""
    }
}

export default function StadiumFieldOwnerReducer(state = initialState, action) {
    const {type, loading, stadiums, stadium, fields, addStadium, addField} = action;
    switch (type) {
        case 'FETCH_STADIUM':
            return {...state, loading: true, stadiums: []}
        case 'FETCH_STADIUM_DONE':
            return {...state, loading, stadiums}
        case 'FETCH_STADIUM_DETAIL':
            return {...state, loading, stadium};
        case 'HANDLE_STADIUM_NAME':
            return {...state, addStadium: {...state.addStadium, stadiumName: stadiums}}
        case 'HANDLE_STADIUM_ADDRESS':
            return {
                ...state, addStadium: {
                    ...state.addStadium, address: stadiums
                }
            }
        case 'HANDLE_STADIUM_OPENING':
            return {
                ...state, addStadium: {
                    ...state.addStadium, openingHours: stadiums
                }
            }
        case 'HANDLE_STADIUM_CLOSING':
            return {
                ...state, addStadium: {
                    ...state.addStadium, closingHours: stadiums
                }
            }
        case 'HANDLE_STADIUM_USERID':
            return {
                ...state, addStadium: {
                    ...state.addStadium, idUserTransient: stadiums
                }
            }
        case 'RESET_STADIUM':
            return {
                ...state,
                addStadium: {
                    idStadium: '',
                    stadiumName: '',
                    address: '',
                    openingHours: '',
                    closingHours: '',
                    idUserTransient: ''
                }
            }
        case 'HANDLE_INPUT_FIELD_ID':
            return {...state, addField: {...state.addField, idField : fields}}
        case 'HANDLE_INPUT_FIELD_CODE':
            return {...state, addField: {...state.addField, fieldCode:fields}}
        case 'HANDLE_INPUT_PRICE_PER_HOUR':
            return {...state, addField: {...state.addField, pricePerHour: fields}}
        case 'HANDLE_INPUT_STATUS_FIELD':
            return {...state, addField: {...state.addField, statusField: fields}}
        case 'HANDLE_INPUT_ID_STADIUM_TRANSIENT' :
            return {...state, addField: {...state.addField, idStadiumTransient: fields}}
        default : return state;
    }
}
