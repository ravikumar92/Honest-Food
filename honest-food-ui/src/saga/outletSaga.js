import { call, put, takeLatest } from "redux-saga/effects";
import { LOCATE_OUTLET, STORE_OUTLET } from "../action/constant";
import * as Api from "../Api";

function* fetchOutletIdentifier({payload}) {
    try {
        let response = yield call(Api.locateResturant, payload);
        yield put({ type: STORE_OUTLET, payload: response.outlet});
    } catch (err) {
        console.error(err)
    }
}

export default [
    takeLatest(LOCATE_OUTLET, fetchOutletIdentifier)
]