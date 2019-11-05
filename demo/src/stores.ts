import { Store, StorePersistentLocalStorageDriver } from '../../src';

export interface StoreState {
  counter: number;
  foo: string;
}

const initialState: StoreState = {
  counter: 0,
  foo: 'foo',
};

export const stores: Store<StoreState> = new Store<StoreState>(initialState, {
  live: true,
});

export const storePersistent: Store<StoreState> = new Store<StoreState>(
  initialState,
  {
    live: true,
    persistence: true,
  },
  new StorePersistentLocalStorageDriver('demo'),
);

export const storeHistory: Store<StoreState> = new Store<StoreState>(
  initialState,
  {
    live: true,
    persistence: true,
  },
  new StorePersistentLocalStorageDriver('demoHistory'),
);
