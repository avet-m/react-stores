import React, { FC } from 'react';
import { useIsolatedStore } from '../../src';

interface IMyStoreState {
  counter: number;
}

const initialState = {
  counter: 0,
};

function getRandomName(count: number): string {
  const array: Array<string> = [];
  for (let i = 0; i < count; i++) {
    array.push(String.fromCharCode(Math.floor(Math.random() * (90 - 55)) + 54));
  }
  return array.join('');
}

export const IsolatedComponent: FC<{ name: string; onRemove: (name: string) => void }> = ({ name, onRemove }) => {
  const myStore = useIsolatedStore<IMyStoreState>(initialState, {
    uniqKey: name,
    persistence: true,
    immutable: true,
  });

  const handleIncrement = React.useCallback(() => {
    myStore.setState({
      counter: myStore.state.counter + 1,
    });
  }, [myStore.state.counter]);

  const handleDecrement = React.useCallback(() => {
    myStore.setState({
      counter: myStore.state.counter - 1,
    });
  }, [myStore.state.counter]);

  const handleRemove = React.useCallback(() => {
    myStore.clearPersistence();
    onRemove(name);
  }, []);

  return (
    <div
      className='component'
      style={{ margin: 10, padding: 20, flexBasis: 'calc(33.3% - 20px)', position: 'relative' }}>
      <button
        onClick={handleRemove}
        style={{ position: 'absolute', right: 0, margin: 0, top: 0, minWidth: 0, borderRadius: '0 3px 0 0' }}>
        x
      </button>
      <p style={{ marginTop: 0 }}>
        <strong>Isolated state hash - {name}</strong>
      </p>
      <p>
        Isolated state: <strong>{myStore.state.counter}</strong>
      </p>
      <div className='row'>
        <button onClick={handleIncrement}>Increment</button>
        <button style={{ marginRight: 0 }} onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export const IsolatedStores = () => {
  const myStore = useIsolatedStore<{ list: string[] }>(
    { list: [] },
    {
      persistence: true,
      immutable: true,
      uniqKey: 'isolatedContainer',
    },
  );

  const handleIncrement = React.useCallback(() => {
    myStore.setState({ list: [...myStore.state.list, getRandomName(5)] });
  }, [myStore.state.list.length]);

  const handleRemove = React.useCallback(
    (deleted: string) => {
      myStore.setState({ list: [...myStore.state.list].filter(name => name !== deleted) });
    },
    [myStore.state.list.length],
  );

  return (
    <React.Fragment>
      <span className='row left-aligned'>
        <button onClick={handleIncrement}>Create isolated component</button>
      </span>
      <div
        className='row'
        style={{
          margin: '10px -10px -10px',
        }}>
        {myStore.state.list.map(name => (
          <IsolatedComponent key={name} name={name} onRemove={handleRemove} />
        ))}
      </div>
    </React.Fragment>
  );
};
