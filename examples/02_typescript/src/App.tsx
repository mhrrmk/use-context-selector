import React, { StrictMode } from 'react';

import { Provider } from './state';
import Counter from './Counter';
import Person from './Person';

const Body = () => (
  <div>
    <h1>Counter</h1>
    <Counter />
    <Counter />
    <h1>Person</h1>
    <Person />
    <Person />
  </div>
);

const App = () => (
  <StrictMode>
    <Provider>
      <Body />
    </Provider>
  </StrictMode>
);

export default App;
