import { put, takeEvery } from "redux-saga/effects";
import {  DRIVER_List,SET_DRIVER_DATA } from "./constant";

//* handlle async operations 
function* driverList()
{
    const url="https://dummyjson.com/users";
    
    // yield async handle like await
    let data=yield fetch(url);
    data=yield data.json();
    console.log(data);
    yield put({type:SET_DRIVER_DATA,data})
}
function* sagaData(){
yield takeEvery(DRIVER_List,driverList);
}
export default sagaData;