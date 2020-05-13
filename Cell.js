import React from 'react';
import { Text, TouchableHighlight, StyleSheet, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { newMat } from './func.js';
export default class Cell extends React.Component {

    state = {
        col: this.props.c,
        row: this.props.r,
    }


    render() {
        // this.state.c = this.props.c;
        // this.state.r = this.props.r;
        return (
            <TouchableHighlight onPress={() => this.props._onPressButton(this.props.r, this.props.c)}>
                {
                    (this.props.vis[this.props.r][this.props.c] != 0) ?
                        ((this.props.mat[this.props.r][this.props.c] == -1) ?
                            <View style={styles.mineblock}>
                                <Image source={require('./assets/bomb.jpg')} style={styles.image} />
                            </View>
                            :
                            <View style={styles.block}>
                                <Text style={styles.buttonText}>{this.props.mat[this.props.r][this.props.c]}</Text>
                            </View>)
                        :
                        <View style={styles.hiddenBlock}>
                            <Text style={styles.buttonText}> </Text>
                        </View>
                }
            </TouchableHighlight>
        )
    }
}

Cell.propTypes = {
    isGameOver : PropTypes.bool,
    c: PropTypes.number,
    r: PropTypes.number,
    mat: PropTypes.array,
    vis: PropTypes.array,
    _onPressButton: PropTypes.func,
}

const styles = StyleSheet.create({
    image: {
        borderWidth: 6,
        borderColor: "red",
        width: 40,
        height: 40,
    },
    hiddenBlock: {
        marginBottom: 40,
        width: 40,
        height: 40,
        backgroundColor: '#002680',
        borderWidth: 3,
        borderColor: '#0037ba',
    },
    mineblock: {
        height: 40,
        width: 40,
        marginBottom: 40,
    },
    block: {
        marginBottom: 40,
        width: 40,
        height: 40,
        backgroundColor: '#c4fffa',
        borderWidth: 1,
        borderColor: 'cyan',
    },
    buttonText: {
        fontSize: 28,
        borderColor: 'white',
        textAlign: 'center',
        // padding: 5,
        color: 'black',
    }
})

