import Alert from 'react-s-alert';

const options = {
  position: 'bottom-right',
  effect: 'slide',
  html: true,
  beep: true,
}

export const AlertDanger = (message, keyMessage = null) => {
  
  if (message !== null && typeof message === 'object') {
    for (var key in message) {
      Alert.error(message[key][keyMessage], options);
    }
  }else{
    Alert.error(message, options);
  }

}

export const AlertSuccess = message => {

  Alert.success(message, options);
}