import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class ReactMobxTest extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Button transparent>
                        <Icon name='ios-arrow-back' />
                    </Button>

                    <Title>Header</Title>

                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>
            </Container>
        );
    }
}
