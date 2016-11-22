import results from "./giphy_fake_search_results"
import lodash from "lodash"
import { fetch } from "fetch";
import Screen from "../models/screen"
import { observable } from "mobx"


class ScreensStore {
  @observable chosenScreen = null;
  @observable searchResults = []

  constructor() {
    this.search("")
    this.predefined = [
      new Screen({id: 1, name: "wifi credentials", website: "http://freakone.pl/monte/wifi.html" }),
      new Screen({id: 2, name: "instafeed", website: "http://freakone.pl/monte/4.html" }),
      new Screen({id: 3, name: "monte logo", website: "http://jsbin.com/wokovo" }),
      new Screen({id: 4, name: "Classic Programmers Paintings", website: "http://cpp.kapone89.ml" }),
      new Screen({id: 5, name: "Sample GIF 1", website: "http://max.kapone89.ml#https://thumbs.gfycat.com/EnchantingHiddenAmethystsunbird-size_restricted.gif" }),
      new Screen({id: 6, name: "Sample GIF 2", website: "http://max.kapone89.ml/#http://i.imgur.com/132B17l.gif" }),
    ]
  }

  search(query) {
    this.searchResults = results.data.map((img) => {
      return new Screen({
        id: img.id,
        name: img.slug,
        thumb: img.images.downsized_medium.url,
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
