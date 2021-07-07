import React from 'react';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import ReducerSample2 from './ReducerSample2';
import { SampleProvider } from './SampleContext';

function App() {
  const onSubmit = (form: {
    name: string;
    description: string;
  }) => {
    console.log(form);
  }
  return (
    <>
      <Counter />
      <hr />
      <MyForm onSubmit={onSubmit} />
      <hr />
      <ReducerSample />
      <hr />
      <SampleProvider>
        <ReducerSample2 />
      </SampleProvider>
    </>
  );
}

export default App;
