import axios from "axios"

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = "&key=AIzaSyDn8t3S1VwAjze6Wdmv8geKJPnxH9Y5a5s" 

export default {
    search: function(query) {
      return axios.get(BASEURL + query + APIKEY);
    },
  };
  