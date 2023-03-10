import { useDispatch, useSelector } from "react-redux"
import { ItemAction } from '../actions'

export const useItem = () => {
    const dispatch = useDispatch()
    
    const list = useSelector((state:any) => state.itemCollection.list)
    const isFetching = useSelector((state:any) => state.itemCollection.isFetching)
    const isError = useSelector((state:any) => state.itemCollection.isError)
    const message = useSelector((state:any) => state.itemCollection.message)

    const handleFetchList = () => dispatch(ItemAction.fetchListRequest('data'))

    return {
        list,
        isFetching,
        isError,
        message,
        handleFetchList
    }
}