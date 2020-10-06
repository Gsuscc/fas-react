import axios from "axios";

export default function flightFetch(url, callback, error) {
  axios
    .get(url)
    .then((response) => {
      let data = response.data;
      callback(data);
    })
    .catch((err) => error(err));
}
