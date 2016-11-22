import lodash from "lodash"
import { fetch } from "fetch";
import { stringify } from 'query-string';


export default class Screen {
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.website = params.website;
    this.thumb = params.thumb;
  }
}
