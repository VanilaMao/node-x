import actionTypes from '../action-types';
import Inventory from '../../models/inventory.model';
const initialState = {
    inventories:[]
}

const reducer = (state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        
        case actionTypes.INVENTORIES_LOADED:
            console.log(action.payload)
            return {
                ...state,
                inventories: action.payload.items.map(item=>new Inventory(item))
            }
        case actionTypes.UPDATING_OR_NEW_INVENTORY:
            console.log(action.payload)
            var inventory = new Inventory(action.payload.item);
            var index = state.inventories.findIndex(item => item.id ===inventory.id);
            if(index < 0){
                return {
                    ...state,
                    inventories: [...state.inventories,inventory]
                }
            }else{
                state.inventories[index] = inventory;
                return state;
            }
           
        default:
            return state;
    }
}
export default reducer;