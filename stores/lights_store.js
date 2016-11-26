import lodash from "lodash"
import { fetch } from "fetch";
import { observable } from "mobx"
import { stringify } from 'query-string';
import Light from "../models/light"


class LightsStore {
  @observable lights = [];
  @observable isWorking = false;

  reload() {
    this.isWorking = true
    fetch('http://172.20.0.29:8080/lights')
      .then((response) => response.json())
      .then((responseJson) => {
        this.lights = responseJson.map((light) => {
          return new Light({id: light.id, description: light.description, state: light.state})
        })
        this.isWorking = false
      })
      .catch(() => {})
  }
}

const lightsStore = new LightsStore();
export default lightsStore
