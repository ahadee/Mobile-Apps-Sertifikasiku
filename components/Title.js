//import liraries
import React from 'react';
import { Text  } from 'react-native';

// create a component
const Title = ({children, numberOfLines = 2, size = 18}) => {
    return (
        <Text numberOfLines={numberOfLines} style={{fontWeight: 'bold', fontSize: size}}>
            {children}
        </Text>
    );
};


//make this component available to the app
export default Title;
