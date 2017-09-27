import * as React from 'react'
import { Theme } from '../src/themes/types'
import { ButtonProps, ButtonState } from '../src/components/Button/types'
// Import types here

interface MyLib {
    mainTheme: Theme
    Button: React.PureComponent<ButtonProps, ButtonState>
    // Insert exported stuff here
}

declare var lib: MyLib

export default lib
