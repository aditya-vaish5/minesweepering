import React from 'react';
import { Text, TouchableHighlight, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

export default class Cell extends React.Component {

    state = {
        col: this.props.c,
        row: this.props.r,
    }
    _onPressButton() {
        // console.log(this.state);
        var s = this.state.row + "  " + this.state.col;
        alert(s);
    }

    render() {
        // this.state.c = this.props.c;
        // this.state.r = this.props.r;
        return (
            <TouchableHighlight onPress={this._onPressButton.bind(this)}>
                <View style={styles.block}>
                    <Text style={styles.buttonText}>{this.props.r}..{this.props.c}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

Cell.propTypes = {
    c: PropTypes.number,
    r: PropTypes.number,
    mat: PropTypes.array,
    vis: PropTypes.array,
}

const styles = StyleSheet.create({
    block: {
        marginBottom: 40,
        width: 40,
        height: 40,
        backgroundColor: 'grey',
        borderWidth: 1,
        borderColor: 'cyan',
    },
    buttonText: {
        borderColor: 'white',
        textAlign: 'center',
        padding: 5,
        color: 'white',
    }
})

