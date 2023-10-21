import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';

const PizzaApp = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{
          height: 40,
        }}
        defaultValue={text}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
      />
      <Text style={{padding: 10, fontSize: 28}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

export default PizzaApp;
