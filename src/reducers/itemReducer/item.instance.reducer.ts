import { actionTypes } from '../../constants'
import {IItemReducer} from './configType'

const { ItemTypes } = actionTypes

  
    const INITIAL_STATE : IItemReducer  = {
        item: {
            id: '',
            age:0,
            name:''
        },
        isFetching: false,
        isError: false,
        message: ''
    }

export default function itemInstanceReducer(state = INITIAL_STATE, { type, payload }: {type: string, payload: IItemReducer}):IItemReducer {
    switch (type) {
        case ItemTypes.DETAIL_ITEM_REQUEST:
        case ItemTypes.CREATE_ITEM_REQUEST:
        case ItemTypes.DELETE_ITEM_REQUEST:
        case ItemTypes.UPDATE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                isError: false,
                message: ''
            }
        case ItemTypes.DELETE_ITEM_FAILURE:
        case ItemTypes.CREATE_ITEM_FAILURE:
        case ItemTypes.UPDATE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: true,
                message: payload.message
            }
        case ItemTypes.CREATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                item: payload.item
            }
        case ItemTypes.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                item: payload.item
            }
        case ItemTypes.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case ItemTypes.CLEAR_ITEM: 
            return INITIAL_STATE
        default:
            return state
    }
}