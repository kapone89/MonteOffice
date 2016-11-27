import lodash from "lodash"
import { fetch } from "fetch";
import { observable } from "mobx"
import { stringify } from 'query-string';
import Light from "../models/light"


class LightsStore {
  @observable lights = [];
  @observable isWorking = false;

  async reload() {
    try {
      this.isWorking = true
      var response = await fetch('http://172.20.0.29:8080/lights')
      var responseJson = await response.json()
      this.lights = responseJson.map((light) => {
        return new Light({id: light.id, description: light.description, state: light.state})
      })
      this.isWorking = false
    } catch (e) {
      this.isWorking = false
    }
  }
}

const lightsStore = new LightsStore();
export default lightsStore
