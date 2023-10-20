import React from 'react';
import {Text, View, Image, ScrollView, TextInput} from 'react-native';

const a = function App() {
   return(
   <ScrollView>
    <Text>Some Text </Text>
    <View>
        <Text> Some more text</Text>
        <Image
            source = {{
                uri:'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{width:200, height:200}}
            />
    </View>
    <TextInput
        style={{
                height:100,width:200,
                borderColor: 'gray',
                borderWidth: 1,
            }}
            defaultValue="You can type in me"
    />
   </ScrollView>
   );
};

export default a;