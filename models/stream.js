import lodash from "lodash"
import { fetch } from "fetch";


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
    });
  }

  playRadiosure(radiosurePage) {

  }
}
