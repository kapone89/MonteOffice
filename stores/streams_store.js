import lodash from "lodash"
import { fetch } from "fetch";
import Stream from "../models/stream"


class StreamsStore {
  constructor() {
    this.predefined = [
      new Stream({id: 1, name: "Yodeling", genre: "Funny", url: "https://dl.dropboxusercontent.com/s/mpht1mvcw8pxotl/National%20Switzerland%20%20Anthem-%20Yodeling.mp3"}),
      new Stream({id: 2, name: "Jazz24", genre: "Jazz", url: "http://icy1.abacast.com:80/kplu-jazz24aac-64"}),
    ]
  }

  search(query) {
  }
}

const streamsStore = new StreamsStore();
export default streamsStore
