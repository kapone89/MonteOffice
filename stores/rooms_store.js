import lodash from "lodash"
import { fetch } from "fetch";
import { observable } from "mobx"
import Room from "../models/room"

class RoomsStore {
  @observable rooms = [];
  @observable isWorking = false;

  reload() {
    this.isWorking = true
    fetch('http://172.20.0.29:8080/move')
      .then((response) => response.json())
      .then((responseJson) => {
        this.rooms = responseJson.map((room) => {
          return new Room({id: room.id, description: room.description, last_detection : room.last_detection  })
        })
        this.isWorking = false
      })
      .catch(() => {})
  }
}

const roomsStore = new RoomsStore();
export default roomsStore
