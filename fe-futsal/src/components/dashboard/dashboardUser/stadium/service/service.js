import API from '../../../../api/api';
import Swal from "sweetalert2";

export async function list(){
    return await API.get('stadiums')
    .then((res) => res.data)
}
export async function getId(id){
    return await API.get(`stadium/${id}`)
        .then((res) => res.data)
}

export async function post(bookingForm){
   const data = await fetch("http://localhost:9010/booking", {method : 'POST', headers: {'Content-Type': 'application/json'},
   body : JSON.stringify(bookingForm)}
   ).then(async (res) => {
       if(res.status === 200){
               await Swal.fire(
                   'Success!',
                   'Add Booking Success!',
                   'success',
               )
           }
   })
    return data;
}