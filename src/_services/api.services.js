import axios from 'axios'
import curlirize from 'axios-curlirize';
curlirize(axios);

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export const locationFilter = inputValue => {
    new Promise(resolve => {
        resolve(
            axios({
                method: 'post',
                url: 'https://www.adaptqe.com/autocomplete/location.htm',
                data: { "q": inputValue, "group": "" },
                headers: {
                    'Content-Type': 'application/json',
                }
            }).catch(error => {
                console.log(error)
            })
        );
    });
}

export const industryFilter = inputValue => {
    new Promise(resolve => {
        resolve(
            axios.post(
                'https://www.adaptqe.com/autocomplete/industryOrKeyword.htm',
                JSON.stringify({ "q": inputValue, "group": "" }), {
                headers: { 'Content-Type': 'application/json' }
            }).catch(error => {
                console.log(error)
            })
        );
    });
}
