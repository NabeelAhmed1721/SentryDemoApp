import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <View style={styles.userData}>
            <Image
              style={styles.userImage}
              source={{uri: 'https://i.ibb.co/GP2Pkpg/Profile.jpg'}}
            />
            <Text style={styles.userName}>Nabeel Ahmed</Text>
            <Text style={styles.userType}>Demo User</Text>
          </View>
          <View style={styles.menuButton}>
            <TouchableOpacity onPress={this.props.menuClicked}>
              <Image
                style={styles.menuIcon}
                source={{
                  uri: 'https://img.icons8.com/windows/96/000000/menu.png',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const _deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    position: 'absolute',
    width: _deviceWidth,
    height: 100,
    justifyContent: 'center',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    width: _deviceWidth - 20, // minus margin left and right
    marginLeft: 10,
    marginRight: 10,
    height: 80,
  },
  userData: {
    flex: 2,
  },
  menuButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  menuIcon: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
  userImage: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 80 / 2 - 50 / 2, // center profile pic half container minus half image size
    left: 10,
    borderRadius: 80 / 2, // half of square length
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 50 + 10 + 10, // Image width plus image margin plus extra padding
    marginTop: 22,
  },
  userType: {
    fontSize: 14,
    color: '#2a2a2a',
    fontWeight: 'bold',
    marginLeft: 50 + 10 + 10, // Image width plus image margin plus extra padding
    marginTop: -5,
  },
});
