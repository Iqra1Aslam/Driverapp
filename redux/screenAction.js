export const SET_LOCATION = 'SET_LOCATION';
export const SET_USER_TYPE = 'SET_USER_TYPE';
export const SET_CONTACT_INFO = 'SET_CONTACT_INFO';

export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location,
});

export const setUserType = (userType) => ({
  type: SET_USER_TYPE,
  payload: userType,
});

export const setContactInfo = (name, phoneNumber) => ({
  type: SET_CONTACT_INFO,
  payload: { name, phoneNumber },
});



