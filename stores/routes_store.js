import NowPlaying from '../components/now_playing';
import FindStream from '../components/find_stream';
import Screens from '../components/screens';

class RoutesStore {
  constructor() {
    this.routes = [
      {title: "Now playing", component: NowPlaying}
    ]
  }
  setNavigator(navigator) {
    this.nav = navigator;
  }
  go(state) {
    switch (state) {
      case "now_playing":
        this.nav.push({title: "Now playing", component: NowPlaying})
        break;
      case "find_stream":
        this.nav.push({title: "Find stream", component: FindStream})
        break;
      case "screens":
        this.nav.push({title: "Screens", component: Screens})
        break;
      default:
        this.nav.push({title: "Now playing", component: NowPlaying})
    }
  }
  back() {
    this.nav.pop();
  }
}

singleton = new RoutesStore();
export default singleton;
