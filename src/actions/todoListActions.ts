import * as actiontypes from "./types/todolistTypes";
import { ISingleElementList } from "../entities/todoSingleEl";

export const setNewElemTodoList = (newElem: ISingleElementList) => ({
  type: actiontypes.SET_NEW_ELEM,
  newElem,
});
