import {createAction} from "@reduxjs/toolkit"
import {actionTypes} from '../constants'
import { FETCH_ITEMS } from "../constants/actionType/ItemType"
import {IDataVe} from '../apis/ItemApi/configType'


// TODO: bỏ any
export const ItemAction =  {
    fetchListRequest : createAction<unknown,FETCH_ITEMS>(actionTypes.ItemTypes.FETCH_ITEMS.FETCH_ITEMS_REQUEST),
    fetchListSuccess : createAction<{ list:IDataVe},FETCH_ITEMS>(actionTypes.ItemTypes.FETCH_ITEMS.FETCH_ITEMS_SUCCESS),
    fetchListFailure : createAction<any,FETCH_ITEMS>(actionTypes.ItemTypes.FETCH_ITEMS.FETCH_ITEMS_FAILURE)
}