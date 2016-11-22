import { observable } from "mobx"
import { fetch } from "fetch";

class NowPlayingStore {
  @observable nowPlayingUrl = null;
  @observable nowPlayingName = null;
  @observable isWorking = false;
  @observable volume = 80;

  constructor() {
    this.streamDataTmp = null;
    this.volumeChangePromise = null
  }

  reload() {
    this.isWorking = true
    fetch('http://172.20.0.35:8080/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.nowPlayingUrl = responseJson.address;
        this.volume = responseJson.volume;
        this.fetchStreamMeta();
      })
      .catch(() => {})
  }

  fetchStreamMeta() {
    this.streamDataTmp = new XMLHttpRequest();
    this.streamDataTmp.open('GET', this.nowPlayingUrl);
    this.streamDataTmp.send()
    setTimeout(() => {
      var name = this.streamDataTmp.getResponseHeader("icy-name");
      this.nowPlayingName = name ? name : "File"
      this.streamDataTmp.abort()
      this.isWorking = false
    }, 500);
  }

  changeVolume(newVolume) {
    clearTimeout(this.volumeChangePromise);
    this.volumeChangePromise = setTimeout(() => {
      fetch('http://172.20.0.35:8080/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          volume: newVolume,
          address: this.nowPlayingUrl,
        })
      })
        .catch(() => {})
    }, 1000);
  }


}

const nowPlayingStore = new NowPlayingStore();
export default nowPlayingStore
