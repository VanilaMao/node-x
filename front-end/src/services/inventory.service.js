import axios from 'axios';
import config from '../config';

export const loadInventories = (callback)=>{
    return axios({
        method:'get',
        url: `${config.api}/shoes`,
    }).then(response=>{
        callback(response.data)
    })
}

export const createInventory = (name, callback)=>{
    return axios({
        method:'post',
        url: `${config.api}/shoes/new`,
        data: {name}
    }).then(response=>{
        callback(response.data)
    })
}

export const saveInventory = (item, callback)=>{
    return axios({
        method:'post',
        url: `${config.api}/shoes/update/${item.id}`,
        data: {
            trueToSizes: item.trueToSize.sizes
        }
    }).then(response=>{
        callback(response.data)
    })
}

