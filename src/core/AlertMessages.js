import Alert from 'react-s-alert';

const options = {
  position: 'bottom-right',
  effect: 'slide',
  html: true,
  beep: true,
}

export const AlertDanger = message => {
   Alert.error(message, options);
}

export const AlertSuccess = message => {

  Alert.success(message, options);
}