import logo from './logo.svg';
import './App.css';
import New from './New';
import {useEffect, useState} from 'react';

function App() {

  let [data,setData] = useState(0);

  let up = ()=>{
  //  data++;  리액트가 추천하지 않는 방식    
    setData(data++);   // 데이터를 증가시키고 setData에 다시 넣는다.
  }

  useEffect(()=>{    // [] => app 함수 내에서 변화가 일어났을 경우 실행, [data] 안에 데이터 값이 변경 되었을 경우 실행
    console.log(data);
  },[data]);

//  let [txt,setTxt] = useState("");   // txt로 값을 가져오고, setTxt로 값을 넣음
 

  let [txt,setTxt] = useState({
    input1:"",
    input2:""
  });

  let changeTxt=(event)=>{      // 변하는 것을 감지해서 넣어줌 => 이제 입력이 가능해짐
  //  setTxt(event.target.value);
    setTxt({
      ...txt,    // input1:"",
                // input2:""
      [event.target.name] : event.target.value
    });
  }

  useEffect(()=>{   
    console.log(txt);
  },[txt]);

  return (
    <div className="App">
      {/* <button onClick={up}>+</button>
      <New number={data} /> */}

      채팅 1 : <input type='text' value={txt.input1} onChange={changeTxt} name='input1' />
      <br></br>
      채팅 2 : <input type='text' value={txt.input2} onChange={changeTxt} name='input2'/>
    </div>
  );
}

export default App;
