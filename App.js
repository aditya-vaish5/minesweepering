import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Row from './RowOfCell.js';
import matrix,{visible} from './func.js';
class out extends React.Component {

  state = {
    mat: matrix(),
    vis: visible(),
  };
  render() {
    // matrix();
    // this.state.mat = matrix();
    console.table(this.state.mat);
    var res = [];
    for (var i = 0; i < 10; i++) {
      res.push(<Row r={i} mat={this.state.mat} vis={this.state.vis}/>)
    }
    return (
      <View style={styles.cols}>
        {res}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cols: {
    backgroundColor: 'light blue',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 10,
    flex: 0.5,
  },
});

export default out;
