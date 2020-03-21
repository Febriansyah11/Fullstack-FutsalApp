const url = 'http://localhost:9010/roles';

export async function findAllRole() {
    const data = await fetch(url, {method: 'GET'})
        .then((response) => {
            return response.json();
        })
    return data;
}
