// // reducers do function
// import { Add_to_cart,Remove_to_cart, SET_DRIVER_DATA } from "./constant";
// const initialState = [];
//   export const reducer = (state = initialState, Action) => {
//     // Action perform
//     switch (Action.type) {
//       case Add_to_cart:
//         //...state comp data
//         return [
//           ...state, 
//           Action.data] 
//       case Remove_to_cart:
//         let result=state.filter(item=>{
//           return item.id!=Action.data
//         })
//      return [...result] 
//      case SET_DRIVER_DATA:
//         //...state comp data
//         return [
//           ...state, 
//           Action.data] 

//       default:
//         return state

//     }
//   }

// import { ADD_DRIVER,REMOVE_DRIVER, UPDATE_DRIVER } from "./constant";
// const initialState = {
//   drivers: [], // Array to store driver data
// };

// export const reducer= (state = initialState, Action) => {
//   switch (Action.type) {
//     case ADD_DRIVER:
//       return {
//         ...state,
//         drivers: [...state.drivers, Action.payload],
//       };
//     case REMOVE_DRIVER:
//       return {
//         ...state,
//         drivers: state.drivers.filter(driver => driver.id !== Action.payload),
//       };
//     case UPDATE_DRIVER:
//       return {
//         ...state,
//         drivers: state.drivers.map(driver =>
//           driver.id === Action.payload.id ? Action.payload : driver
//         ),
//       };
//     default:
//       return state;
//   }
// };

