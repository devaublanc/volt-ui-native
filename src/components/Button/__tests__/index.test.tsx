import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import { Button } from '../index'

it('renders correctly', () => {
    const tree = renderer.create(<Button />)
    expect(tree).toBeDefined()
})
