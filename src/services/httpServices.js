import axios from 'axios';


axios.interceptors.response.use(null, error => {
    const expectedErrors = error.response && error.response.status >= 400 && error.response.status <= 500;
    if (!expectedErrors) {
        alert('Unexpected Errors');
    }

    return Promise.reject(error);
})


const obj = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}

export default obj