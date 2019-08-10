import React, { PureComponent } from 'react'
import { 
    Text, StyleSheet, View, TouchableWithoutFeedback, Animated,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export const tabHeight = 64;

const { width } = Dimensions.get('window')

export default class StaticTabbar extends PureComponent {

    values = [];

    constructor(props) {
        super(props);

        const { tabs } = this.props;
        this.values = tabs.map((tab, index) => new Animated.Value(index === 0 ? 1 : 0))
    }

    onPress = (index) => {
        const { value, tabs } = this.props;
        const tabWidth = width / tabs.length;

        Animated.sequence([
            Animated.parallel(
              this.values.map(v => Animated.timing(v, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true,
              })),
            ),
            Animated.parallel([
              Animated.spring(value, {
                toValue: tabWidth * index,
                useNativeDriver: true,
              }),
              Animated.spring(this.values[index], {
                toValue: 1,
                useNativeDriver: true,
              }),
            ]),
          ]).start();

    }

    render() {
        const { tabs, value } = this.props;
        const tabWidth = width / tabs.length;

        return (
            <View style={styles.container}>
                {
                    tabs.map(({name}, key) => {
                        const activeValue = this.values[key]
                        const opacity = value.interpolate({
                            inputRange: [
                                -width + tabWidth * (key - 1),
                                -width + tabWidth * key,
                                -width + tabWidth * (key + 1)
                            ],
                            outputRange: [1, 0, 1],
                            extrapolate: "clamp"
                        })

                        const translateY = activeValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [tabHeight, 0],
                            extrapolate: "clamp",
                        })

                        return (
                            <React.Fragment  {...{ key }}>
                                <TouchableWithoutFeedback onPress={() => this.onPress(key)}>
                                    <Animated.View style={[
                                        styles.tab,
                                        { opacity }
                                    ]}>
                                        <Icon {...{ name }} size={22} />
                                    </Animated.View>
                                </TouchableWithoutFeedback>
                                <Animated.View style={{ 
                                    position:'absolute',
                                    width: tabWidth, 
                                    left: tabWidth * key,
                                    height: tabHeight,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    top: -20,
                                    transform: [{ translateY }]
                                }}>
                                    <View style={ styles.circle}>
                                        <Icon {...{ name }} size={22} />
                                    </View>
                                </Animated.View>
                            </React.Fragment>
                        )
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    }, 
    tab: {
        flex: 1,
        height: tabHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
