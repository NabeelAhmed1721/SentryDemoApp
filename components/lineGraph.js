import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

export default class LineGraph extends React.Component {
  render() {
    return (
      <LineChart
        data={{
          labels: ['0:00', '4:00', '8:00', '12:00', '16:00', '20:00'],
          datasets: [
            {
              data: this.props.data,
            },
          ],
        }}
        width={Dimensions.get('window').width - 20} // from react-native
        height={220}
        yAxisSuffix="V"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: 'grey',
          backgroundGradientFrom: 'grey',
          backgroundGradientTo: 'darkgrey',
          color: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: () => 'rgba(255, 255, 255, 1)',
          style: {
            borderRadius: 16,
          },
        }}
        style={styles.lineGraph}
      />
    );
  }
  s;
}

const styles = StyleSheet.create({
  lineGraph: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
