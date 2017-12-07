import {Store} from '../../src/store';
 
export namespace CommonStore {
    // State interface
    export interface State {
        counter: number,
        foo: string,
        settings: {
            foo: {
                bar: number
            },
            baz: number
        }
    }
 
    // Store's state initial values
    const initialState: State = {
        counter: 0,
        foo: 'foo',
        settings: {
            foo: {
                bar: 1
            },
            baz: 2
        }
    };
 
    export let store: Store<State> = new Store<State>(initialState);
}