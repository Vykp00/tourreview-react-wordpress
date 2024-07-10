import axios from 'axios'

// This code set withCredentials on $axios before creating instance
// this ensure the http request is secured to avoid block from browsers
axios.defaults.withCredentials = true

const HTTP = axios.create({
    withCredentials: true
})

export default HTTP