import API from "../../../../api/api";

export async function transactionList(){
    return await API.get('payments')
        .then((res) => res.data)
}
