import { useState, useReducer } from "react";

const Actions = {
  addition: "addition",
  subtraction: 'subtraction',
  multiplication: 'multiplication',
  division: 'division',
};

function reducer(state, action) {
  switch (action.type) {
    case Actions.addition:
      return { count: state.count + Number(action.payload) };
    case Actions.subtraction:
      return { count: state.count - Number(action.payload) };
    case Actions.multiplication:
      return { count: state.count * Number(action.payload)};
    case Actions.division:
      return { count: state.count / Number(action.payload)}
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [num, setNum] = useState(0);

  const plus = (num) => {
    dispatch({
      type: Actions.addition,
      payload: num,
    });
  };

  const minus = (num) => {
    dispatch({
      type: Actions.subtraction,
      payload: num,
    })
  }

  const times = (num) => {
    dispatch({
      type: Actions.multiplication,
      payload: num,
    })
  }
  const divided = (num) => {
    dispatch({
      type: Actions.division,
      payload: num,
    })
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h3>Arithmetic Calculator</h3>
      <h1>{state.count}</h1>
      <input type="number" onChange={(e) => setNum(e.target.value)} />
      <div>
      <button onClick={() => plus(num)}>+</button>
      <button onClick={() => minus(num)}>-</button>
      <button onClick={() => times(num)}>*</button>
      <button onClick={() => divided(num)}>/</button>
      </div>
    </div>
  );
}

export default App;
