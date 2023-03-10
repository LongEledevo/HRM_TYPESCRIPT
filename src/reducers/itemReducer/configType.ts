//api:

interface IItem {
    id?: string|unknown,
}

//reducer

interface IBase {
    isFetching: boolean,
    isError?: boolean,
    message: string,
}


export interface IItemReducer extends IBase  {
    item: IItem,
}

export interface IItemReducers extends IBase {
    list: IItem[]| []
}



