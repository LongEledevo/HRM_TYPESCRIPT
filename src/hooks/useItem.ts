import { useDispatch, useSelector } from "react-redux"
import { ItemAction } from '../actions'
import {IDataDi} from '../apis/ItemApi/configType'

export const useItem = () => {
    const dispatch = useDispatch()
    
    const list = useSelector((state:any) => state.itemCollection.list) 
    const isFetching = useSelector((state:any) => state.itemCollection.isFetching)
    const isError = useSelector((state:any) => state.itemCollection.isError)
    const message = useSelector((state:any) => state.itemCollection.message)

    const handleFetchList = (data:IDataDi) => dispatch(ItemAction.fetchListRequest(data))

    return {
        list,
        isFetching,
        isError,
        message,
        handleFetchList
    }
}