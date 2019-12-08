import {TrueToSize} from './trueToSize.model'
export default class Inventory {
    constructor(input){
        this.id = input.id;
        this.name = input.name;
        this.trueToSize = new TrueToSize(input);
    }
}