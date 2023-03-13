import { IDanhSach } from "../typeCommon/itemType";
export interface IItem {
  name: string;
}

export interface IDataVe extends Pick<IItem, "name">, Pick<IDanhSach, "id"> {
  age: number;
}

export type IDataDi = Partial<Pick<IItem, "name">> & Pick<IDanhSach, "page">;
