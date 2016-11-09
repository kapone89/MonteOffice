import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import NativeBase, { Button, Title, Spinner, Grid, Col, Card, CardItem, Text, Icon } from 'native-base';
import { Range, H1, H4 } from 'carbon-native';
import IosTabs from "./ios_tabs";
import { withRouter } from 'react-router-native';

@withRouter
export default class NowPlaying extends Component {
    render() {
        return (
          <NativeBase.Container>
              <NativeBase.Header>
                  <Button transparent>
                      <Icon name='ios-arrow-back' />
                  </Button>

                  <Title>NowPlaying</Title>

                  <Button transparent onPress={() => { this.props.router.push("/streams_search") }}>
                      <Icon name="ios-search" />
                  </Button>
              </NativeBase.Header>

              <NativeBase.Content>
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
              </NativeBase.Content>

              <NativeBase.Footer >
                 <IosTabs/>
             </NativeBase.Footer>
          </NativeBase.Container>
        );
    }
}
