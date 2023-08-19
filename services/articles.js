import Axios from 'axios'

export default async function getArticlesFromApi() {
     const resp = await Axios.get('https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/')
     .catch((error) => {
        console.error(error.message);
     });
    return await resp.data;
    /* return Axios.get('https://api-test-ln.herokuapp.com/articles')
    .then((resp) => {
        return resp.data;
    }); */
}