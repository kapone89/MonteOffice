import lodash from "lodash"
import { fetch } from "fetch";
import { stringify } from 'query-string';


export default class Screen {
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.website = params.website;
    this.image_url = params.image_url;
    this.image_thumb_url = params.image_thumb_url;
  }
}
