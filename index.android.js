import App from "./components/app"
import { AppRegistry, BackAndroid } from 'react-native';
import router from "./stores/router"

AppRegistry.registerComponent('MonteOffice', () => App);

BackAndroid.addEventListener('hardwareBackPress', function() {
  return router.back();
});
