import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const Cat = props => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry!' : 'full.'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk please!' : 'Thank you!'}
      />
    </View>
  );
};

const Kitties = () => {
  return (
    <>
      <Cat name="Mishu" />
      <Cat name="Aka" />
    </>
  );
};

export default Kitties;
