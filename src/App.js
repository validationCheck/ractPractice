import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const btntxt = '적당한 버튼이름'
const arr = ['RK-1','XCD2','A3'];

function App() {

  let [kval,keySet] = useState(arr);

  const btnClick1 = function(param){
    let tmp  = [...arr];
    switch(param){
      case 0:
        tmp[0] ='변경된 0인덱스';
        keySet(tmp);
        break;
      case 2:
        break;
      default :
    }
  }

  const btnClick2 = function(){
    let tmpArr = [...arr].sort();
    keySet(tmpArr);
  }


  return (
    <div className="App">
      <div>
        <button onClick={ () =>btnClick1(0) }>{btntxt}</button>
        <button onClick={ () =>btnClick2() }>정렬!!!</button>
      </div>
      <div>인덱스[0] : {kval[0]}</div>
      <div>인덱스[1] : {kval[1]}</div>
      <div>인덱스[2] : {kval[2]}</div>
    </div>
  )
}

export default App;
