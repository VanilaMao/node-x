import reducer from './inventory.reducer';
import { inventoriesLoaded
} from '../actions';
describe('test inventory reducer', () => {
    let initializeState;
    beforeEach(() =>
        initializeState = {
            inventories: [],
            isLoadingInventory: true,
        });
    it('test INVENTORIES_LOADED', () => {
        var inventoriesLoadedAction = inventoriesLoaded([
            {
                id: "123",
                name:"adidas",
                trueToSize: {
                    sizes: [1,2,3],
                    averageSize : 2
                }
            },
            {
                id: "456",
                name:"nike",
                trueToSize: {
                    sizes: [4,5,6],
                    averageSize :5
                }
            },
        ])
        var result = reducer(initializeState, inventoriesLoadedAction);
        expect(result.isLoadingInventory).toBe(false);
        expect(result.inventories.length).toBe(2);
    });
})