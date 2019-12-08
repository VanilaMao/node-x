import actionTypes from './action-types';
import {
    loadInventories as _loadInventories,
    createInventory as _createInventory,
    saveInventory as _saveInventory
} from '../services/inventory.service';

export const loadInventories = () => dispatch => {
    return _loadInventories((items) => dispatch(inventoriesLoaded(items)))
};

export const createInventory = (name) => dispatch => {
    return _createInventory(name,(item) => dispatch(updatedOrNewInventory(item)))
};

export const saveInventory = (item) => dispatch => {
    return _saveInventory(item,(item) => dispatch(updatedOrNewInventory(item)))
};

export const inventoriesLoaded = (items) => ({
    type: actionTypes.INVENTORIES_LOADED,
    payload: { items }
});

export const updatedOrNewInventory= (item) => ({
    type: actionTypes.UPDATING_OR_NEW_INVENTORY,
    payload: {item}
});






