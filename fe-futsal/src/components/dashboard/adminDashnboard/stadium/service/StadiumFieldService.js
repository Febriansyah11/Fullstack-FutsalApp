import API from "../../../../api/api";
import Swal from "sweetalert2";

export async function list() {
    return await API.get('stadiums')
        .then((res) => res.data)
}

export async function getId(id) {
    return await API.get(`stadium/${id}`)
        .then((res) => res.data)
}

export async function getIdUsers(id) {
    return await API.get(`user/${id}`)
        .then((res) => res.data)
}

export async function create(stadiumFormData, stadiumImage) {
    let formData = new FormData();
    formData.append('file', stadiumImage)
    formData.append('stadium', JSON.stringify(stadiumFormData))
    const resData = await fetch("http://localhost:9010/stadium", {method: 'POST', body: formData})
        .then(async (res) => {
            if (res.status === 200) {
                await Swal.fire(
                    'Success',
                    'You Success Add Stadium',
                    'success'
                )
            }
            if (res.status === 400) {
                await Swal.fire(
                    'Failed',
                    'Please Input Correct',
                    'error',
                );
            }
            if (res.status === 500) {
                await Swal.fire(
                    'Success',
                    'You Success Add Stadium',
                    'success'
                
                );
            }
            return res.json()
        })
        .catch((e) => {
        });
    return resData;
}


export async function post(bookingForm) {
    const data = await fetch("http://localhost:9010/booking", {
            method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bookingForm)
        }
    ).then(async (res) => {
        if (res.status === 200) {
            await Swal.fire(
                'Success!',
                'Add Booking Success!',
                'success',
            )
        }
    })
    return data;
}

export async function createfield(fieldFormData, fieldImage) {
    const data = new FormData();
    data.append('file', fieldImage)
    data.append('field', JSON.stringify(fieldFormData))
    const dataField = fetch("http://localhost:9010/field", {method: 'POST', body: data,})
        .then(async (res) => {
            if (res.status === 200) {
                await Swal.fire(
                    'Success',
                    'You Success Add Field',
                    'success'
                )
            }
            if (res.status === 400) {
                await Swal.fire(
                    'Failed',
                    'Please Input Correct',
                    'error',
                );
            }
            return res.json()
        }).catch((e) => {
            Swal.fire(
                'Success',
                'You Success Add Field',
                'success'
            );
        });
    return dataField;
}

export async function updateField(fieldFormData) {
    const data = new FormData();
    let field = JSON.stringify(fieldFormData)
    data.append('field', field)
    const dataField = await fetch("http://localhost:9010/field", {
        method: 'POST',
        body: data,
        mode: "no-cors",
    })
        .then(async (response) => {
            if (response.status === 200) {
                await Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success')
            }
        }).then(async (response) => {
            if (response.status === 400) {
                await Swal.fire(
                    'Data incorrect',
                    'Please Input Your data with correct',
                    'error'
                )
            }
        })
    return dataField;
}

export async function deleteStadium(id) {
    return await API.delete(`stadiums/${id}`)
        .then((res) => res.data)
}

export async function deleteField(id) {
    return await API.delete(`field/${id}`)
        .then((res) => res.data)
}
