declare module 'glamorous-native' {
    import * as React from 'react'
    import {
        FlatListProperties,
        ImageStyle,
        ImageProperties,
        ListViewProperties,
        ScrollViewProperties,
        ScrollViewStyle,
        SectionListProperties,
        TextProperties,
        TextStyle,
        TextInputProperties,
        TouchableHighlightProperties,
        TouchableNativeFeedbackProperties,
        TouchableOpacityProperties,
        TouchableWithoutFeedbackProperties,
        ViewStyle,
        ViewProperties,
    } from 'react-native'

    interface ExtraGlamorousProps {
        innerRef?: (instance: any) => void
        theme?: object
    }

    interface AllStyles
        extends ImageStyle,
            ScrollViewStyle,
            TextStyle,
            ViewStyle {}

    interface GlamorousOptions<Props> {
        displayName: string
        rootEl:
            | React.StatelessComponent<Props>
            | React.Component<Props, any>
            | React.PureComponent<Props, any>
        forwardProps: string[]
    }

    interface DynamicStyles<Props, Style, Theme> {
        (props: Props, theme: Theme, context?: any): Style
    }

    interface ThemeProviderProps<Theme> {
        theme: Theme
    }

    interface WithTheme {
        <Props, Theme>(
            component: React.StatelessComponent<Props>
        ): React.StatelessComponent<Props & ThemeProviderProps<Theme>>
    }

    export const ThemeProvider: React.StatelessComponent<
        ThemeProviderProps<any>
    >

    export const FlatList: React.StatelessComponent<
        ScrollViewStyle & ExtraGlamorousProps & FlatListProperties<any>
    >
    export const Image: React.StatelessComponent<
        ImageStyle & ExtraGlamorousProps & ImageProperties
    >
    export const ListView: React.StatelessComponent<
        ScrollViewStyle & ExtraGlamorousProps & ListViewProperties
    >
    export const ScrollView: React.StatelessComponent<
        ScrollViewStyle & ExtraGlamorousProps & ScrollViewProperties
    >
    export const SectionList: React.StatelessComponent<
        ScrollViewStyle & ExtraGlamorousProps & SectionListProperties<any>
    >
    export const Text: React.StatelessComponent<
        TextStyle & ExtraGlamorousProps & TextProperties
    >
    export const TextInput: React.StatelessComponent<
        ViewStyle & ExtraGlamorousProps & TextInputProperties
    >
    export const TouchableHighlight: React.StatelessComponent<
        ViewStyle & ExtraGlamorousProps & TouchableHighlightProperties
    >
    export const TouchableNativeFeedback: React.StatelessComponent<
        ViewStyle & ExtraGlamorousProps & TouchableNativeFeedbackProperties
    >
    export const TouchableOpacity: React.StatelessComponent<
        ViewStyle & ExtraGlamorousProps & TouchableOpacityProperties
    >
    export const TouchableWithoutFeedback: React.StatelessComponent<
        ViewStyle & ExtraGlamorousProps & TouchableWithoutFeedbackProperties
    >
    export const View: React.StatelessComponent<
        ViewStyle & ExtraGlamorousProps & ViewProperties
    >

    interface Glamorous {
        <Props, Theme>(
            component: React.StatelessComponent<Props>,
            options: GlamorousOptions<Props>
        ): (
            style: AllStyles | DynamicStyles<Props, AllStyles, Theme>
        ) => React.StatelessComponent<Props & ExtraGlamorousProps & AllStyles>
        flatList: <Props, Theme>(
            style: ScrollViewStyle,
            dynamicStyles?: DynamicStyles<Props, ScrollViewStyle, Theme>
        ) => React.StatelessComponent<
            ScrollViewStyle &
                ExtraGlamorousProps &
                FlatListProperties<any> &
                Props
        >
        image: <Props, Theme>(
            style: ImageStyle,
            dynamicStyles?: DynamicStyles<Props, ImageStyle, Theme>
        ) => React.StatelessComponent<
            ImageStyle & ExtraGlamorousProps & ImageProperties & Props
        >
        listView: <Props, Theme>(
            style: ScrollViewStyle,
            dynamicStyles?: DynamicStyles<Props, ScrollViewStyle, Theme>
        ) => React.StatelessComponent<
            ScrollViewStyle & ExtraGlamorousProps & ListViewProperties & Props
        >
        scrollView: <Props, Theme>(
            style: ScrollViewStyle,
            dynamicStyles?: DynamicStyles<Props, ScrollViewStyle, Theme>
        ) => React.StatelessComponent<
            ScrollViewStyle & ExtraGlamorousProps & ScrollViewProperties & Props
        >
        sectionList: <Props, Theme>(
            style: ScrollViewStyle,
            dynamicStyles?: DynamicStyles<Props, ScrollViewStyle, Theme>
        ) => React.StatelessComponent<
            ScrollViewStyle &
                ExtraGlamorousProps &
                SectionListProperties<any> &
                Props
        >
        text: <Props, Theme>(
            style: TextStyle,
            dynamicStyles?: DynamicStyles<Props, TextStyle, Theme>
        ) => React.StatelessComponent<
            TextStyle & ExtraGlamorousProps & TextProperties & Props
        >
        textInput: <Props, Theme>(
            style: ViewStyle,
            dynamicStyles?: DynamicStyles<Props, ViewStyle, Theme>
        ) => React.StatelessComponent<
            ViewStyle & ExtraGlamorousProps & TextInputProperties & Props
        >
        touchableHighlight: <Props, Theme>(
            style: ViewStyle,
            dynamicStyles?: DynamicStyles<Props, ViewStyle, Theme>
        ) => React.StatelessComponent<
            ViewStyle &
                ExtraGlamorousProps &
                TouchableHighlightProperties &
                Props
        >
        touchableNativeFeedback: <Props, Theme>(
            style: ViewStyle,
            dynamicStyles?: DynamicStyles<Props, ViewStyle, Theme>
        ) => React.StatelessComponent<
            ViewStyle &
                ExtraGlamorousProps &
                TouchableNativeFeedbackProperties &
                Props
        >
        touchableOpacity: <Props, Theme>(
            style: ViewStyle,
            dynamicStyles?: DynamicStyles<Props, ViewStyle, Theme>
        ) => React.StatelessComponent<
            ViewStyle & ExtraGlamorousProps & TouchableOpacityProperties & Props
        >
        touchableWithoutFeedback: <Props, Theme>(
            style: ViewStyle,
            dynamicStyles?: DynamicStyles<Props, ViewStyle, Theme>
        ) => React.StatelessComponent<
            ViewStyle &
                ExtraGlamorousProps &
                TouchableWithoutFeedbackProperties &
                Props
        >
        view: <Props, Theme>(
            style: ViewStyle,
            dynamicStyles?: DynamicStyles<Props, ViewStyle, Theme>
        ) => React.StatelessComponent<
            ViewStyle & ExtraGlamorousProps & ViewProperties & Props
        >
    }

    const glamorous: Glamorous

    export default glamorous
}
