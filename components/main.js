import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Animated,
} from 'react-native';
import LineGraph from './lineGraph';
import {RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Header from './header';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      device: false, // demo device. you are supposed to store in database with key
    };
  }
  render() {
    return (
      <View>
        <Header />
        <View style={styles.mainContainer}>
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.scrollContent}>
              <Text style={styles.summaryTitle}>Summary Usage</Text>
              {
                // MongoDB Server is down so Random Numbers for Demo
                // 🤷‍♂️🤷‍♂️
              }
              <LineGraph
                data={[
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                ]}
              />
              <Swipeable renderRightActions={this.renderRightActions}>
                <View>
                  <Text style={styles.summaryTitle}>Nabeel's Macbook</Text>
                  {
                    // MongoDB Server is down so Random Numbers for Demo
                    // 🤷‍♂️🤷‍♂️
                  }
                  <LineGraph
                    data={[
                      Math.random() * 10,
                      Math.random() * 10,
                      Math.random() * 10,
                      Math.random() * 10,
                      Math.random() * 10,
                      Math.random() * 10,
                    ]}
                  />
                </View>
              </Swipeable>
              <Text style={styles.summaryTitle}>Living Room TV</Text>
              {
                // MongoDB Server is down so Random Numbers for Demo
                // 🤷‍♂️🤷‍♂️
              }
              <LineGraph
                data={[
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                ]}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
  renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [0, 0, 0, 1],
    });
    return (
      <RectButton
        style={styles.leftAction}
        onPress={() => {
          this.setState({device: !this.state.device});
        }}>
        <Animated.View
          style={[
            styles.slideControls,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              backgroundColor: this.state.device ? 'green' : 'red',
            },
            {
              transform: [{translateX: trans}],
            },
          ]}
        />
      </RectButton>
    );
  };
}

const _deviceWidth = Dimensions.get('window').width;
const _deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    width: _deviceWidth,
  },
  scrollContainer: {
    marginTop: 100,
    position: 'absolute',
    width: _deviceWidth,
    height: _deviceHeight - 124,
  },
  summaryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  scrollContent: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },
  actionText: {backgroundColor: 'red'},
  slideControls: {
    width: 100,
    height: 200,
    marginTop: 50,
    marginLeft: 10,
    borderRadius: 16,
  },
});
