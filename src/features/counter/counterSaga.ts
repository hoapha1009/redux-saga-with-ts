import { delay, put, takeEvery } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function* log(action: PayloadAction) {
//   console.log('Log', action);
// }

export function* handleIncrementBySaga(action: PayloadAction<number>) {
  yield delay(2000);

  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('Counter Saga');
  yield takeEvery(incrementSaga.toString(), handleIncrementBySaga);
}
