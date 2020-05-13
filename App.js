import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Row from './RowOfCell.js';
import matrix, { visible, newVis, bombClicked, isWon } from './func.js';
class out extends React.Component {

  state = {
    mat: matrix(),
    vis: visible(),
    isGameOver: false,
    isGameWon: false,
    count: 0,
  };
  _onPressButton = (i, j) => {
    // console.log(this.state);
    if (this.state.isGameOver || this.state.isGameWon) return;
    if (this.state.mat[i][j] == -1) {
      // isGameOver =true;
      this.setState(prevState => ({ vis: bombClicked(prevState.vis, prevState.mat), isGameOver: true }));
    } else {
      this.setState(prevState => ({ vis: newVis(prevState.vis, prevState.mat, i, j) }));
    }
    this.setState(prevState => ({ isGameWon: isWon(prevState.vis, prevState.mat) }));
    // var s = toString(this.state.mat[i],this.state.mat[j])
    // alert(s);
    // console.log(this.state.vis);
  }
  render() {
    // matrix();
    // this.state.mat = matrix();
    // console.table(this.state.mat);
    var res = [];
    for (var i = 0; i < 10; i++) {
      res.push(<Row r={i} mat={this.state.mat} vis={this.state.vis} _onPressButton={this._onPressButton} isGameOver={this.state.isGameOver} />)
    }
    return (
      <View style={styles.WholePage}>
        <View style={styles.cols}>
          {res}
        </View>
        <View >
          {(this.state.isGameWon) ? <Text style={styles.result}>Game Won</Text> : <Text />}
        </View>
        <View >
          {(this.state.isGameOver) ? <Text style={styles.result}>Game Over</Text> : <Text />}
        </View>
      </View>)
  }
}

const styles = StyleSheet.create({
  WholePage: {
    backgroundColor: '#dff3f7',
    flex: 1,
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
  },
  cols: {
    backgroundColor: 'light blue',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 10,
    flex: 0.5,
  },
  result: {
    fontSize: 60,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default out;
