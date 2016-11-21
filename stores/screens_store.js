import results from "./giphy_fake_search_results"
import lodash from "lodash"
import { fetch } from "fetch";
import Screen from "../models/screen"
import { observable } from "mobx"


class ScreensStore {
  @observable chosenScreen = null;

  constructor() {
    this.images = this.search("")
    this.predefined = [
      new Screen({ name: "wifi credentials", website: "http://freakone.pl/monte/wifi.html" }),
      new Screen({ name: "instafeed", website: "http://freakone.pl/monte/4.html" }),
      new Screen({ name: "monte logo", website: "http://jsbin.com/wokovo" }),
      new Screen({ name: "Classic Programmers Paintings", website: "http://cpp.kapone89.ml" }),
      new Screen({ name: "Sample GIF 1", website: "http://max.kapone89.ml#https://thumbs.gfycat.com/EnchantingHiddenAmethystsunbird-size_restricted.gif" }),
      new Screen({ name: "Sample GIF 2", website: "http://max.kapone89.ml/#http://i.imgur.com/132B17l.gif" }),
    ]
  }

  search(query) {
    return results.data
  }

  selectScreen(screen) {
    this.chosenScreen = screen;
  }
}

const screensStore = new ScreensStore();
export default screensStore
