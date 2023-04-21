import { useState, useReducer } from "react";

// const Actions = {
//   addition: "addition",
//   subtraction: "subtraction",
//   multiplication: "multiplication",
//   division: "division",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case Actions.addition:
//       return { count: state.count + Number(action.payload) };
//     case Actions.subtraction:
//       return { count: state.count - Number(action.payload) };
//     case Actions.multiplication:
//       return { count: state.count * Number(action.payload) };
//     case Actions.division:
//       return { count: state.count / Number(action.payload) };
//   }
// }

function App() {
  // const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [num, setNum] = useState(0);
  const [screen, setScreen] = useState([]);
  const [result, setResult] = useState(null);

  // const plus = (num) => {
  //   dispatch({
  //     type: Actions.addition,
  //     payload: num,
  //   });
  // };

  // const minus = (num) => {
  //   dispatch({
  //     type: Actions.subtraction,
  //     payload: num,
  //   });
  // };

  // const times = (num) => {
  //   dispatch({
  //     type: Actions.multiplication,
  //     payload: num,
  //   });
  // };
  // const divided = (num) => {
  //   dispatch({
  //     type: Actions.division,
  //     payload: num,
  //   });
  // };

   const getResult = () => {
    try {
      const result = eval(screen.join(''))
      setResult(result)
    } catch (error) {
      console.error(error)
      setResult(null)
    }
  }

  const handleClear = () => {
    setResult(null)
    setScreen('')
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>Arithmetic Calculator</h3>
      {/* <h1>{state.count}</h1> */}
      <p>{screen}</p>
      <h1>{result}</h1>
      <div>
      {/* <input type="number" onChange={(e) => setNum(e.target.value)} /> */}
      <button onClick={getResult}>=</button>
      <button onClick={handleClear}>AC</button>
      </div>
      <div>
        {/* <button onClick={() => plus(num)}>+</button> */}
        <button onClick={() => setScreen([...screen, ' + '])}>+</button>
        <button onClick={() => setScreen([...screen, ' - '])}>-</button>
        <button onClick={() => setScreen([...screen, ' * '])}>*</button>
        <button onClick={() => setScreen([...screen, ' / '])}>/</button>
        <div>
          {console.log(screen)}
        <button onClick={() => setScreen([...screen, '1'])}>1</button>
        <button onClick={() => setScreen([...screen, '2'])}>2</button>
        <button onClick={() => setScreen([...screen, '3'])}>3</button>
        <button onClick={() => setScreen([...screen, '4'])}>4</button>
        <button onClick={() => setScreen([...screen, '5'])}>5</button>
        <button onClick={() => setScreen([...screen, '6'])}>6</button>
        <button onClick={() => setScreen([...screen, '7'])}>7</button>
        <button onClick={() => setScreen([...screen, '8'])}>8</button>
        <button onClick={() => setScreen([...screen, '9'])}>9</button>
        <button onClick={() => setScreen([...screen, '0'])}>0</button>
        </div>
      </div>
    </div>
  );
}

export default App;
