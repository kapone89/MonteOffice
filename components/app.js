import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import router from "../stores/router"

@observer
export default class ReactMobxTest extends Component {
    render() {
        const CurrentRoute = router.currentComponent
        return (
          <CurrentRoute />
        );
    }
}
