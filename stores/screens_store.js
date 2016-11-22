import lodash from "lodash"
import { fetch } from "fetch";
import Screen from "../models/screen"
import { observable } from "mobx"
import { stringify } from 'query-string';


class ScreensStore {
  @observable chosenScreen = null;
  @observable searchResults = []
  @observable isWorking = false

  constructor() {
    this.predefined = [
      new Screen({id: 1, name: "wifi credentials", website: "http://freakone.pl/monte/wifi.html" }),
      new Screen({id: 2, name: "instafeed", website: "http://freakone.pl/monte/4.html" }),
      new Screen({id: 3, name: "Classic Programmers Paintings", website: "http://cpp.kapone89.ml" }),
      new Screen({id: 4, name: "monte logo", website: "http://jsbin.com/wokovo" }),
    ]
    this.imagesSearchPromise = null
  }

  searchFake(query) {
    this.searchResults = results.data.map((img) => {
      return new Screen({
        id: img.id,
        name: img.slug,
        thumb: img.images.downsized_medium.url,
        website: `http://max.kapone89.ml/#${img.images.original.url}`,
      });
    })
  }

  search(query) {
    this.isWorking = true
    clearTimeout(this.imagesSearchPromise);
    this.imagesSearchPromise = setTimeout(() => {
      params = {q: query, api_key: "dc6zaTOxFJmzC"}
      fetch('http://api.giphy.com/v1/gifs/search?' + stringify(params))
        .then((response) => response.json())
        .then((responseJson) => {
          this.searchResults = this.parseGiphyResponse(responseJson)
          this.isWorking = false
        })
        .catch(() => {})

    }, 1000);
  }

  parseGiphyResponse(data) {
    return data.data.map((img) => {
      return new Screen({
        id: img.id,
        name: img.slug,
        thumb: img.images.downsized_still.url,
        website: `http://max.kapone89.ml/#${img.images.original.url}`,
      });
    })
  }

  selectScreen(screen) {
    this.chosenScreen = screen;
  }
}

const screensStore = new ScreensStore();
export default screensStore
