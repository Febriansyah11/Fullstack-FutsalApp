const initialState = {
    loading : true,
    stadiums: [],
    stadium : [],
    bookings: [],
    detail : null,
    bookingForm: {
        userIdTransient: "",
        fieldIdTransient: "",
        bookingDate: "",
        timePlaceStart: "",
        timePlaceEnd: "",
    }

}
export default function StadiumReducer(state = initialState, action){
    const {type, loading, stadiums, stadium, booking, detail, bookingForm} = action;
    console.log("ini reducer booking form ", bookingForm)
        switch(type){
            case 'FETCH_STADIUM':
                return {...state, loading : true, stadiums: []}
            case 'FETCH_STADIUM_DONE':
                return {...state, loading, stadiums}
            case 'FETCH_STADIUM_DETAIL':
                return {...state, loading, stadium};
            case 'FIELD_ID':
                return {...state, detail};
            case 'HANDLE_BOOKING_ID_USER':
                return {
                    ...state, bookingForm: {
                        ...state.bookingForm, userIdTransient: booking
                    }}
            case 'HANDLE_BOOKING_ID_FIELD':
                return {
                    ...state, bookingForm: {
                        ...state.bookingForm, fieldIdTransient: booking
                    }}
            case 'HANDLE_BOOKING_DATE':
                return {
                    ...state, bookingForm: {
                        ...state.bookingForm, bookingDate: booking
                    }}
            case 'HANDLE_BOOKING_START':
                return {
                    ...state, bookingForm: {
                        ...state.bookingForm, timePlaceStart: booking
                    }}
            case 'HANDLE_BOOKING_END':
                return {
                    ...state, bookingForm: {
                        ...state.bookingForm, timePlaceEnd: booking
                    }}
            case 'RESET_BOOKING':
                return {
                    ...state, bookingForm: {userIdTransient :'', fieldIdTransient:'', bookingDate:'', timePlaceStart:'', timePlaceEnd:''}
                }
            default:
                return state;
        }
}
