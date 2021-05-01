import {all} from 'redux-saga/effects';
import outlet from './outletSaga';

export default function* rootSaga() {
  yield all([
      ...outlet
  ]);
}