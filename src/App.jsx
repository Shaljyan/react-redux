import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';

function App() {

     const dispatch = useDispatch()
     const cash = useSelector(state => state.cash.cash)
     const customers = useSelector(state => state.customers.customers)
     
  
const addCash = (cash) => {
  dispatch({type:"Add_Cash", payload: cash})
}

const getCash = (cash) => {
  dispatch({type:"Get_Cash", payload: cash})
}




     return (
    <div className="App">
      <div>Баланс {cash}</div>
      <div>
      <button onClick={() => addCash(Number(prompt()))}>Plus</button>
      <button onClick={() => getCash(Number(prompt()))}>Minus</button>
      </div>
    
    </div>
  );
}

export default App;
