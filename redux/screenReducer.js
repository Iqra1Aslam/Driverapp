import { SET_LOCATION, SET_USER_TYPE, SET_CONTACT_INFO } from './screenAction';

const initialState = {
  location: '',
  userType: '',
  name: '',
  phoneNumber: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:

      return { ...state, location: action.payload };
   
    
    case SET_USER_TYPE:
      return { ...state, userType: action.payload };
     
    case SET_CONTACT_INFO:
      return { ...state, name: action.payload.name, phoneNumber: action.payload.phoneNumber };
    default:
      return state;
  }
};

export default reducer;
