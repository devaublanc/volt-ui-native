import React, { Component } from 'react'

import Title from '../../../example/components/Title'
import ComponentWrapper from '../../../example/components/ComponentWrapper'

import { Button } from './index'
import { ButtonProps } from './types'

export class ButtonExample extends Component<any, any> {
    static navigationOptions = {
        drawerLabel: 'Button',
    }

    handleOnPress = () => {
        console.log('on Press Button')
    }

    render() {
        return (
            <ComponentWrapper>
                <Title type="h1">Button Component</Title>
                <Button disabled={true} onPress={this.handleOnPress}>
                    Hello world !
                </Button>
            </ComponentWrapper>
        )
    }
}
