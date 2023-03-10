import {Helpers} from '../../utils'
import apiScheme from '../scheme'
import { IDataDi, IDataVe } from './configType'





export const itemApi = {
    fetchList: Helpers.createApi<IDataDi,IDataVe>(apiScheme.ITEMS.FETCH_LIST)
}