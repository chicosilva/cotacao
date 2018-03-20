import { toast } from 'react-toastify';

export const AlertDanger = (message, keyMessage = null) => {

  if (message !== null && typeof message === 'object') {
    
    for (var key in message) {
      toast.error(message[key][keyMessage], {position: toast.POSITION.TOP_RIGHT});
    }

  } else {

    toast.error(message, {position: toast.POSITION.TOP_RIGHT});
  }

}

export const AlertSuccess = message => {

  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT
  });

}