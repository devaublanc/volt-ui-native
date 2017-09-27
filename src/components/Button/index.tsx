import React, { PureComponent, PropTypes } from 'react'
import glamorous, { Text } from 'glamorous-native'
import { Theme } from 'themes/types'

import { ButtonProps, ButtonState } from './types'

const ButtonWrapper = glamorous.touchableOpacity<ButtonProps, Theme>(
    {
        alignSelf: 'center',
        borderBottomWidth: 3,
        borderColor: '#F00',
    },
    (props, theme) => ({
        borderWidth: props.disabled ? 4 : 0,
    })
)

export class Button extends PureComponent<ButtonProps, ButtonState> {
    static displayName = 'Button'

    state = {
        toto: '',
        active: false,
    }

    test = () => {
        this.setState({
            toto: 'lool',
        })
    }

    render() {
        const { disabled, children, onPress } = this.props

        const { toto } = this.state

        return (
            <ButtonWrapper onPress={this.test} disabled={disabled}>
                <Text>{children}</Text>
                <Text>{toto}</Text>
            </ButtonWrapper>
        )
    }
}
