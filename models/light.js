import { fetch } from "fetch";
import { observable } from "mobx"

export default class Light {
  @observable state = false;

  constructor(params) {
    this.id = params.id;
    this.description = params.description;
    this.state = params.state;
  }

  toggle() {
    this.state = !this.state;
    fetch('http://172.20.0.29:8080/toggle/' + this.id)
      .then((response) => {
        this.reloadState()
      })
      .catch(() => {})
  }

  reloadState() {
    fetch('http://172.20.0.29:8080/lights')
      .then((response) => response.json())
      .then((responseJson) => {
        this.state = lodash.find(responseJson, {id: this.id}).state;
      })
      .catch(() => {})
  }
}
