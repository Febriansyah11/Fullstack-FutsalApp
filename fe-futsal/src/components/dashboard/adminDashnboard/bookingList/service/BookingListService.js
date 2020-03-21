import API from "../../../../api/api";
import Swal from "sweetalert2";

export async function bookingList() {
    return await API.get('bookings')
        .then((res) => res.data)
}

export async function bookingId(id) {
    return await API.get(`booking/${id}`)
        .then((res) => res.data)
}

export async function payment(payment) {
    const data = await fetch("http://localhost:9010/payment", {
            method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payment)
        }
    ).then(async (res) => {
        if (res.status === 200) {
            await Swal.fire(
                'Success!',
                'Aprove Booking Success!',
                'success',
            )
        }
    })
    return data;
}
