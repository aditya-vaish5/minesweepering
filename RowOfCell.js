import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cell from './Cell.js';
import PropTypes from 'prop-types';

export default class Row extends React.Component {
    render() {
        var ans = [];
        for (var i = 0; i < 10; i++) {
            ans.push(<Cell mat={this.props.mat}
                r={this.props.r}
                c={i} vis={this.props.vis}
                _onPressButton={this.props._onPressButton} />
            );
        }
        return (
            <View style={styles.container}>
                {ans}
            </View >
        )
    }
}
Row.propTypes = {
    _onPressButton: PropTypes.func,
    r: PropTypes.number,
    mat: PropTypes.array,
    vis: PropTypes.array,
}
const styles = StyleSheet.create({
    container: {
        padding: 0,
        backgroundColor: 'dark blue',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
});
