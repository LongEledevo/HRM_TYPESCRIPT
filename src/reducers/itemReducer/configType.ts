//api:
import {IDataVe} from '../../apis/ItemApi/configType'

interface IItem { //tại sao k import từ api
    id?: string|unknown,
}

//reducer

interface IBase {
    isFetching: boolean,
    isError?: boolean,
    message: string,
}


export interface IItemReducer extends IBase  {
    item: IDataVe,
}

export interface IItemReducers extends IBase {
    list: IDataVe[]| []
}



