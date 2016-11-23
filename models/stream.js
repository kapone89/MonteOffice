import lodash from "lodash"
import { fetch } from "fetch";
import { DOMParser } from 'xmldom';
import { select } from 'xpath';
import { stringify } from 'query-string';
import playlistParser from "playlist-parser"


export default class Stream {
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.genre = params.genre;
    this.url = params.url;
    this.radiosure_page = params.radiosure_page;
  }

  play() {
    if (this.url) {
      this.playUrl(this.url)
    } else {
      this.playRadiosure(this.radiosure_page)
    }
  }

  playUrl(streamUrl) {
    fetch('http://172.20.0.35:8080/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        volume: 80,
        address: streamUrl,
      })

    })
      .catch(() => {})
  }

  playRadiosure(radiosurePage) {
    fetch(radiosurePage)
    .then((response) => response.text())
    .then((responseText) => {
      var doc = new DOMParser({errorHandler: {}}).parseFromString(responseText);
      var nodes = select("//tr[contains(.//td, 'Source ')]//a", doc);
      var streamUrls = lodash.map(nodes, "textContent").filter((x) => {return x.length > 4})
      this.autoChooseStream(streamUrls)
    })
    .catch(() => {})
  }

  autoChooseStream(streamsArray) {
    this.playStream(lodash.sample(streamsArray));
  }

  playStream(streamUrl) {
    var isPlaylist = /\.(pls|m3u|asx)$/gi.exec(streamUrl)
    if (isPlaylist) {
      this.playPlaylist(streamUrl, isPlaylist[1].toUpperCase())
    } else {
      this.playUrl(streamUrl)
    }
  }

  playPlaylist(streamUrl, type) {
    fetch(streamUrl)
    .then((response) => response.text())
    .then((responseText) => {
      var results = playlistParser[type].parse(responseText)
      this.playUrl(lodash.sample(results).file);
    })
    .catch(() => {})
  }
}
