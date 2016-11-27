import lodash from "lodash"
import { fetch } from "fetch";
import { observable } from "mobx"
import Room from "../models/room"

class RoomsStore {
  @observable rooms = [];
  @observable isWorking = false;

  async reload() {
    try {
      this.isWorking = true
      var response = await fetch('http://172.20.0.29:8080/move')
      var responseJson = await response.json()
      this.rooms = responseJson.map((room) => {
        return new Room({id: room.id, description: room.description, last_detection : room.last_detection  })
      })
      this.isWorking = false
    } catch (e) {
      this.isWorking = false
    }
  }
}

const roomsStore = new RoomsStore();
export default roomsStore
