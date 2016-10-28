import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import { Spinner, Grid, Col, Card, CardItem, Text, Icon } from 'native-base';
import { Range, H1, H4 } from 'carbon-native';

@observer
export default class NowPlaying extends Component {
    render() {
        return (
          <Card>
              <CardItem header>
                  <Text>Reloading...</Text>
              </CardItem>

              <CardItem>
                  <Spinner color="blue"/>
              </CardItem>

              <CardItem header>
                  <Text>Stream info</Text>
              </CardItem>

              <CardItem>
                  <Text>Radio ESKA</Text>
              </CardItem>

              <CardItem header>
                  <Text>Volume</Text>
              </CardItem>

              <CardItem>
                  <Range/>
              </CardItem>
         </Card>
        );
    }
}
