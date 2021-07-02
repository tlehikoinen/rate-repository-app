import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    textContainer: {
        paddingLeft: 15,
        flexDirection: 'column',
        flexShrink: 1
    },
    languageTag: {
      color: 'white',
      backgroundColor: theme.colors.primary, 
      borderRadius: 3,
      alignSelf: 'flex-start'
    },
    tinyAvatar: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
});
const Info = ({ fullName, description, language, avatar }) => {


    return (
        <View style={styles.container}>
            <Image
              style={styles.tinyAvatar}
              source={{uri:avatar}}
            />
            <View style={styles.textContainer}>
              <Text fontWeight="bold" fontSize="subheading">{fullName}</Text>
              <Text color="textDescription">{description}</Text>
              <Text style={styles.languageTag}>{language}</Text>
            </View>
        </View>
    );
};

export default Info;