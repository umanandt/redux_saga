// first install saga
// it gets used to tackel the side effect of redux
// API calling promises etc
//
import {put, takeEvery} from 'redux-saga/effects';
import {SET_USER_DATA, USER_LIST} from './contants';

function* userList() {
  const url = 'https://dummyjson.com/users';
  try {
    const response = yield fetch(url);
    const data = yield response.json();
    console.warn("data in sage", data)
    yield put({ type: SET_USER_DATA, data });
  } catch (error) {
    console.error("Error fetching user data:", error);
    // Optionally dispatch an action for failure here
  }
}

function* sagatest() {
  yield takeEvery(USER_LIST, userList);
}

export default sagatest;
