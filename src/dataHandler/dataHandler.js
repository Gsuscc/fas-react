import axios from "axios";

export default function flightFetch(url, callback, errorPopup) {
  axios
    .get(url)
    .then((response) => {
      let data = response.data;
      if (response.data.status === "error")
        errorPopup(response.data.errorMessage);
      callback(data);
    })
    .catch((err) => errorPopup(err.message));
}
