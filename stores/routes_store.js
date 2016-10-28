import NowPlaying from '../components/now_playing';
import StreamsSearch from '../components/streams_search';
import ImagesSearch from '../components/images_search';
import PredefinedScreens from '../components/predefined_screens';
import PredefinedStreams from '../components/predefined_streams';

class RoutesStore {
  constructor() {
    this.routes = [
      {title: "Now playing", component: NowPlaying, action: "reload_stream"}
    ]
  }
  setNavigator(navigator) {
    this.nav = navigator;
  }
  go(state) {
    switch (state) {
      case "now_playing":
        this.nav.push({title: "Now playing", component: NowPlaying, action: "reload_stream"})
        break;
      case "predefined_streams":
        this.nav.push({title: "Predefined Streams", component: PredefinedStreams, action: "search_stream"})
        break;
      case "predefined_screens":
        this.nav.push({title: "Predefined Screens", component: PredefinedScreens, action: "search_images"})
        break;
      case "images_search":
        this.nav.push({title: "Images Search", component: ImagesSearch, search: "images"})
        break;
      case "streams_search":
        this.nav.push({title: "Streams Search", component: StreamsSearch, search: "streams"})
        break;
      default:
        this.nav.push({})
    }
  }
  back() {
    this.nav.pop();
  }
}

singleton = new RoutesStore();
export default singleton;
