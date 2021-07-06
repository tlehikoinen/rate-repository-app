import React from 'react';
import { View, Button } from 'react-native';
import * as Linking from 'expo-linking';

const SingleViewAdditions = ( {item} ) => {

    const OpenGithub = () => {
        Linking.openURL(item.url);
    };

    return (
        <View>
          <Button title="Open in GitHub" onPress={OpenGithub}  />
        </View>
    );
};

export default SingleViewAdditions;
