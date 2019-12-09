import React from 'react'
import { connect } from 'react-redux';
import { loadInventories, createInventory,saveInventory } from '../redux/actions';
import { useEffect } from 'react';
import InventoryCard from './inventory-view';
const InventoryComponent = ({ inventories,loadInventories,saveInventory,createInventory}) => {
    useEffect(() => {
        loadInventories();
    }, [loadInventories]);
   
    return (
        <div className="d-flex flex-column">
            {renderInventories(inventories,saveInventory,createInventory)}       
        </div>
    )
};

function renderInventories(inventories,saveInventory, createInventory) {
    console.log("render");
    console.log(inventories)
    return (<div style={{ padding: 20 }}>
        <InventoryCard inventories={inventories} 
        saveInventory={saveInventory}
        createInventory ={createInventory}
         />
    </div>)
}

const mapstateToProps = state => {
    return {
        inventories: state.inventory.inventories,
    }
};

const mapDispatchToProps = {
    loadInventories,
    saveInventory,
    createInventory
};
export default connect(mapstateToProps, mapDispatchToProps)(InventoryComponent);