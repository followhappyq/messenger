import axios from "axios"

axios.defaults.baseURL = "https://react-messenger-applicaton.herokuapp.com/"
axios.defaults.headers.common["token"] = window.localStorage.token

window.axios = axios

export default axios
