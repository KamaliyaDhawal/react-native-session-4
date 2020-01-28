import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function SubmitBitton({ buttonTitle, fncLogin }) {
    return(
        <TouchableOpacity style={styles.commonContent} onPress={fncLogin}>
            <Text style={styles.submitButtonText}>
                {buttonTitle}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    submitButtonText: {
        padding: 10,
        // marginTop: -23,
        borderRadius: 30,
        borderColor: '#fff',
        borderWidth: 1,
        alignSelf: 'flex-end',
        backgroundColor: '#fff'
    }
})