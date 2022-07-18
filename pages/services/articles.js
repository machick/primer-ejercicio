import Axios from 'axios'

export default async function getArticlesFromApi() {
     const resp = await Axios.get('https://api-test-ln.herokuapp.com/articles')
     .catch((error) => {
        console.error(error.message);
     });
    return await resp.data;
    /* return Axios.get('https://api-test-ln.herokuapp.com/articles')
    .then((resp) => {
        return resp.data;
    }); */
}