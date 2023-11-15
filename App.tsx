import React, {useState} from 'react';
import {JitsiMeeting} from '@jitsi/react-native-sdk/index';
import {Button, StyleSheet, TextInput, View} from 'react-native';
function App() {
  const [isTextInputClosed, setIsTextInputClosed] = useState(false);
  const [value, setValue] = useState('');
  const toggleRoom = () => {
    setIsTextInputClosed(!isTextInputClosed);
  };
  return (
    <>
      {isTextInputClosed ? ( // @ts-ignore
        <JitsiMeeting
          eventListeners={
            {
              onReadyToClose: () => {
                toggleRoom();
              },
            } as any
          }
          style={{flex: 1}}
          room={value}
          serverURL={'https://meet.jit.si/'}
        />
      ) : (
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter room name"
            value={value}
            onChangeText={(text: string) => setValue(text)}
          />
          <Button title="join" onPress={() => toggleRoom()} />
        </View>
      )}
    </>
  );
}

export default App;
const styles = StyleSheet.create({
  textInput: {
    color: '#000',
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
