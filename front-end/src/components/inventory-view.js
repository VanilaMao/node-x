import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem, Button,InputGroup,FormControl} from 'react-bootstrap';

const InventoryCard = ({ inventories,saveInventory, createInventory }) => {
    const [newInventoryName, setNewInventoryName] = useState(' ');
    const [editItem, setEditItem] = useState(' ');
    return ( <div>
        <Card>
            <Card.Header as="h5">Shoes</Card.Header>
            <Card.Body>
                <Card.Title>Shoes in StockX Markets</Card.Title>
                <Card.Text>
                    You can buy a limited shoes here
                </Card.Text>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">*</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Please Input a shoes name to create an inventory "
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={e=>setNewInventoryName(e.target.value)}
                    />
                    <Button className="ml-1" onClick={()=>createInventory(newInventoryName)}>Create</Button>
                </InputGroup>
            </Card.Body>
                <ListGroup variant="flush" className="list-group-flush" >
                   {inventories.map(item => <div key={item.id}>
                        {renderItemSummary(item,setEditItem)}
                        {editItem === item.id? <RenderItemDetails item ={item} saveInventory ={saveInventory}/>:null}

                   </div>)}
                </ListGroup> 
        </Card>
    </div>)
}

function renderItemSummary(item,setEditItem) {
    return (
        <div key={item.id}>
            <ListGroupItem >
                <div className="d-flex">
                    {item.name+"("+item.id+")"}
                    <Button onClick={() => setEditItem(item.id)} variant="primary" className="ml-auto">Edit</Button>
                </div>
            </ListGroupItem>
        </div>);
}

function changeItemSizes(item,value){
    if(!!value){
        var ar = value.split(",");
        item.trueToSize.sizes = ar.map(size=>+size);
    }else{
        item.trueToSize.sizes =[];
    }
}

const RenderItemDetails = ({item,saveInventory}) =>{
    const [sizes,setSizes] = useState(item.trueToSize.sizes.join(","));
    return (
        <div key={item.id+"tureSize"}>
            <ListGroupItem >
                <Card >
                    <Card.Header bg="blue" as="h5">True To Size</Card.Header>
                    <Card.Body>
                        <Card.Title>A fantastic shoes</Card.Title>
                        <Card.Text>
                            very good shoes
                            </Card.Text>
                        <Button onClick={() => saveInventory(item)} variant="secondary" className="ml-auto">Save</Button>
                    </Card.Body>
                    <ListGroup variant="flush" className="list-group-flush active" >
                        <ListGroupItem disabled="true">trueToSizeCaculation: {item.trueToSize.trueToSizeCalculation}</ListGroupItem>
                        <FormControl
                            placeholder = "please input sizes, range from 1-5, like:1,2,3,4,5"
                            value = {sizes}
                            aria-describedby="basic-addon1"
                            onChange={e=>{
                                setSizes(e.target.value)
                                changeItemSizes(item, e.target.value)}
                            }
                        />
                    </ListGroup>
                </Card>
            </ListGroupItem>
        </div>);
}
export default InventoryCard;