import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import router from "../stores/router"
import monte_theme from "../themes/monte_theme"

@observer
export default class ReactMobxTest extends Component {
    render() {
        const CurrentRoute = router.currentComponent
        return (
          <CurrentRoute theme={monte_theme}/>
        );
    }
}
