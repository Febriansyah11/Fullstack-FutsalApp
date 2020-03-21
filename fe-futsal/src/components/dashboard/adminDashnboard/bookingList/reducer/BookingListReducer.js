const initialState = {
    booking : "",
    bookings: [],
    users:[],
    loading : true,
    paymentForm: {
        idBookingTransient : ""
    }

}
export default function bookingListCounter(state = initialState, action) {
    const {type, loading, bookings, booking, payment, paymentForm} = action;
        switch (type) {
                case 'FETCH_USER_BOOKING_LIST' :
                    return {...state, loading, bookings}
            case 'HANDLE_BOOKONG_ID':
                return { ...state, booking};
            case 'FETCH_BOOKING_DONE':
                return { ...state, bookings};
            case 'HANDLE_PAYMENT_ID':
                return {...state, paymentForm: {...state.paymentForm, idBookingTransient : payment}}
            default: return state;
    }
}

