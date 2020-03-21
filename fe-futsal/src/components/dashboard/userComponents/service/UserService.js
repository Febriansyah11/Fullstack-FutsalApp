import Swal from "sweetalert2";
import API from "../../../api/api";

const post = 'http://localhost:9010/user';

export async function registerUser(user, file) {
    let formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('file', file);
    const data = await fetch(post, {method: 'POST', body: formData})
        .then(async (res) => {
            await Swal.fire(
                'Success!',
                'Register Success!',
                'success',
            )
            return res.json()
        })
        .catch((e) => {
            Swal.fire(
                'Failed',
                'Dont Duplicate your email,username,nik, has already exist',
                'error',
            );
        });
    return data;
}

export async function getUserId(id) {
    return await API.get(`user/${id}`)
        .then((res) => res.data)
}