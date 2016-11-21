import { observable, computed } from "mobx"
import lodash from "lodash"

import NowPlaying from "../components/now_playing";
import StreamsSearch from "../components/streams_search";
import ImagesSearch from "../components/images_search";
import PredefinedScreens from "../components/predefined_screens";
import PredefinedStreams from "../components/predefined_streams";
import ScreenPreview from "../components/screen_preview";

const routes = {
  "/": NowPlaying,
  "/streams_search": StreamsSearch,
  "/images_search": ImagesSearch,
  "/predefined_screens": PredefinedScreens,
  "/predefined_streams": PredefinedStreams,
  "/screen_preview": ScreenPreview,
}

class Router {
  @observable stack = []

  constructor() {
    this.stack.push("/")
  }

  @computed get currentRoute() {
    return this.stack[this.stack.length - 1]
  }

  @computed get currentComponent() {
    return routes[this.currentRoute]
  }

  go(route) {
    if (this.currentRoute != route) {
      this.stack.push(route);
    }
  }
}

const router = new Router()
export default router
