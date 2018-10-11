import { createConfirmation } from 'react-confirm';
import Confirmable from './Confirmable';

// create confirm function
const confirm = createConfirmation(Confirmable);

// This is optional. But I recommend to define your confirm function easy to call.
export default (confirmation, options = {}) =>
  // You can pass whatever you want to the component. These arguments will be your Component's props
  confirm({ confirmation, options });
