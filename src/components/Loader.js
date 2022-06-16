import React from 'react';
import {Modal, View, StyleSheet, ActivityIndicator,Text} from 'react-native';
import {APP_COLORS} from '../styles/Colors';

const Loader = (props) => {
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={props.loading}>

            <View style={styles.modalBackground}>

                <ActivityIndicator
                    color={APP_COLORS.primaryColor}
                    size={'large'}
                    animating={props.loading} />

                {
                    props.message ?
                        <Text>{props.message}</Text> : null

                }

            </View>
        </Modal>
    )
}

export default Loader;

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000080'
    }
});
