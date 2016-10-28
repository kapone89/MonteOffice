import RoutesStore from "./routes_store"

class ActionButtonStore {
  constructor() {
    this.actions = {
      reload_stream: {
        icon: "ios-refresh",
        callback: (() => { RoutesStore.go("now_playing") })
      },
      search_stream: {
        icon: "ios-search",
        callback: (() => { RoutesStore.go("streams_search") })
      },
      search_images: {
        icon: "ios-search",
        callback: (() => { RoutesStore.go("images_search") })
      }
    }
  }
}

singleton = new ActionButtonStore();
export default singleton;
