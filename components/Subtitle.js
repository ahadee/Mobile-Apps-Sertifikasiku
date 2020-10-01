//import liraries
import React from 'react';
import { Text  } from 'react-native';

// create a component
const Subtitle = ({children, numberOfLines = 2, size = 15}) => {
    return (
        <Text numberOfLines={numberOfLines} style={{fontSize: size}}>
            {children}
        </Text>
    );
};


//make this component available to the app
export default Subtitle;
