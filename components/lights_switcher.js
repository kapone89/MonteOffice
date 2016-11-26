import React, { Component } from 'react';
import { observer } from "mobx-react/native"
import NativeBase, { Title, Icon, Button, Spinner, Col, Row, Grid } from 'native-base';
import RNE from 'react-native-elements'
import IosTabs from "./ios_tabs";
import lightsStore from "../stores/lights_store"
import { List, Item, ItemContent, ItemText, Toggle } from "carbon-native"
import router from "../stores/router"

@observer
export default class LightsSwitcher extends Component {
  componentDidMount(){
    lightsStore.reload()
  }

  render(){
    return (
      <NativeBase.Container theme={this.props.theme}>
          <NativeBase.Header>
              <Button transparent onPress={() => { router.back() }}>
                  <Icon name='ios-arrow-back' />
              </Button>

              <Title>Lights</Title>

              { lightsStore.isWorking &&
                <Button transparent>
                    <Spinner color="white"/>
                </Button>
              }
          </NativeBase.Header>

          <NativeBase.Content>
            <Grid style={{marginTop: 10, marginBottom: 15}}>
              <Row>
                <Col>
                  <RNE.Button small borderRadius={5} backgroundColor="green" title="Turn ON all" onPress={() => {}} />
                </Col>
                <Col>
                  <RNE.Button small borderRadius={5} backgroundColor="red" title="Turn OFF all" onPress={() => {}} />
                </Col>
              </Row>
            </Grid>

            <List>
              {
                lightsStore.lights.map((light) => {
                  return (
                    <Item key={light.id}>
                      <ItemContent>
                        <ItemText>{light.description}</ItemText>
                        <Toggle
                          color="danger"
                          onValueChange={() => light.toggle()}
                          value={light.state}
                        />
                      </ItemContent>
                    </Item>
                  )
                })
              }
            </List>
          </NativeBase.Content>

          <NativeBase.Footer >
             <IosTabs/>
         </NativeBase.Footer>
      </NativeBase.Container>
    )
  }
}
