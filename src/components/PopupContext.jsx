import { createContext } from 'react';

const PopupContext = createContext({
  showPopup: false,
  togglePopup: () => {},
});

export default PopupContext;
