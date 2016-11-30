export default class Room {
  constructor(params) {
    this.id = params.id;
    this.description = params.description;
    this.last_detection = params.last_detection;
    this.occupied = (params.last_detection > ((new Date()).getTime() - 5*60*1000));
  }
}
