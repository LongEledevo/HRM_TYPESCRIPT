import { takeLatest, put } from "redux-saga/effects";
import { ItemAction } from "../actions";
import { actionTypes } from "../constants";
import { itemApi } from "../apis/ItemApi";
import { IDataDi } from "../apis/ItemApi/configType";



function* handleFetchListItems() {
    
  try {
    const res:IDataDi = yield itemApi.fetchList();

    yield put(
      ItemAction.fetchListSuccess({
        list: res,
      })
    );
  } catch (error:any) {
    yield put(
      ItemAction.fetchListFailure({
        message: error.message,
      })
    );
  }
}

const itemSaga = [
  takeLatest(actionTypes.ItemTypes.FETCH_ITEMS_REQUEST, handleFetchListItems),
];

export default itemSaga;
