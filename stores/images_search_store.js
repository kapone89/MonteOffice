import { fetch } from "fetch";

class ImagesSearchStore {
  constructor() {
    this.images = [];
  }

  search(query) {
    if (query == "cat" && this.images.length == 0) {
      console.log(query);
      fetch("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC")
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}

const imagesSearchStore = new ImagesSearchStore();
export default imagesSearchStore
