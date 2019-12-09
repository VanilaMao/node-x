import actionTypes from '../action-types';
import Inventory from '../../models/inventory.model';
const initialState = {
    inventories:[]
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        
        case actionTypes.INVENTORIES_LOADED:
            return {
                ...state,
                inventories: action.payload.items.map(item=>new Inventory(item))
            }
        case actionTypes.UPDATING_OR_NEW_INVENTORY:   
            var inventory = new Inventory(action.payload.item);
            var index = state.inventories.findIndex(item => item.id ===inventory.id);
            if(index < 0){
                return {
                    ...state,
                    inventories: [...state.inventories,inventory]
                }
            }else{
                var updated = [...state.inventories];
                updated[index] = inventory; 
                var s= {
                    ...state,
                    inventories: updated
                };
                return s;
            }
           
        default:
            return state;
    }
}
export default reducer;