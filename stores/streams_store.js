import lodash from "lodash"
import { fetch } from "fetch";
import { DOMParser } from 'xmldom';
import { select } from 'xpath';
import { stringify } from 'query-string';
import Stream from "../models/stream"
import { observable } from "mobx"


class StreamsStore {
  @observable searchResults = [];
  @observable isWorking = false

  constructor() {
    this.predefined = [
      new Stream({id: 1, name: "Yodeling", genre: "Funny", url: "https://dl.dropboxusercontent.com/s/mpht1mvcw8pxotl/National%20Switzerland%20%20Anthem-%20Yodeling.mp3"}),
      new Stream({id: 2, name: "Jazz24", genre: "Jazz", url: "http://icy1.abacast.com:80/kplu-jazz24aac-64"}),
    ];
    this.streamSearchPromise = null
  }

  search(query) {
    this.isWorking = true
    clearTimeout(this.streamSearchPromise);
    this.streamSearchPromise = setTimeout(() => {
      let params = {
        status: "active",
        search: query,
        pos: 0,
        reset_pos: 0,
      }

      fetch('http://www.radiosure.com/rsdbms/search.php?' + stringify(params))
        .then((response) => response.text())
        .then((responseText) => {
          var doc = new DOMParser({errorHandler: {}}).parseFromString(responseText)
          var nodes = select("//a[contains(@href, 'details.php')]", doc)
          this.searchResults = nodes.map((n) => {
            return new Stream({
              id: n.attributes[0].nodeValue,
              name: n.textContent,
              genre: n.parentNode.parentNode.childNodes[3].textContent,
              radiosure_page: ("http://www.radiosure.com/rsdbms/" + n.attributes[0].nodeValue),
            })
          })
          this.isWorking = false
        })


    }, 1000);
  }
}

const streamsStore = new StreamsStore();
export default streamsStore
