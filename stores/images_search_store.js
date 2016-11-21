import results from "./giphy_fake_search_results"
import lodash from "lodash"
import { fetch } from "fetch";


class ImagesSearchStore {
  constructor() {
    this.images = this.search("")
  }

  search(query) {
    return results.data
  }
}

const imagesSearchStore = new ImagesSearchStore();
export default imagesSearchStore
