import React, { Component } from 'react';
import { WebView, TouchableOpacity } from "react-native"
import { observer } from "mobx-react/native"
import NativeBase, { Button, Icon, Title, Text, Grid, Col, Row } from 'native-base';
import IosTabs from "./ios_tabs";
import ScreenThumbnail from "./screen_thumbnail"
import screensStore from "../stores/screens_store"
import RNE from 'react-native-elements'

@observer
export default class ScreenPreview extends Component {
    render() {
        return (
          <NativeBase.Container>
              <NativeBase.Header>
                  <Button transparent>
                      <Icon name='ios-arrow-back' />
                  </Button>

                  <Title>Screen preview</Title>
              </NativeBase.Header>

              <NativeBase.Content>
                <ScreenThumbnail size={1} screen={screensStore.chosenScreen} />

                <Grid style={{marginTop: 10, height: 170}}>
                  <Row>
                    <Col>
                      <RNE.Button small borderRadius={5} backgroundColor="#1ec08b" title="Screen #1" onPress={() => {screensStore.chosenScreen.setOnTv(1)}} />
                    </Col>
                    <Col>
                      <RNE.Button small borderRadius={5} backgroundColor="#1ec08b" title="Screen #2" onPress={() => {screensStore.chosenScreen.setOnTv(2)}} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <RNE.Button small borderRadius={5} backgroundColor="#1ec08b" title="Screen #3" onPress={() => {screensStore.chosenScreen.setOnTv(3)}} />
                    </Col>
                    <Col>
                      <RNE.Button small borderRadius={5} backgroundColor="#1ec08b" title="Screen #4" onPress={() => {screensStore.chosenScreen.setOnTv(4)}} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <RNE.Button small borderRadius={5} backgroundColor="#1ec08b" title="The BIG one" onPress={() => {screensStore.chosenScreen.setOnTv(5)}} />
                    </Col>
                  </Row>
                </Grid>
              </NativeBase.Content>

              <NativeBase.Footer >
                 <IosTabs/>
             </NativeBase.Footer>
          </NativeBase.Container>
        );
    }
}
