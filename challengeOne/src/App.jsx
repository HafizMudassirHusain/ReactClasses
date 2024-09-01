import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [bgColor, setbgColor] = useState("#ffffff");  // Default to white
  const [Color, setColor] = useState("#000000"); 
  const [text, setText] = useState("");
  const [newDiv, setnewDiv] = useState([]);
  const handleAdd = () => {
    const newCard = { id: Date.now(), bgColor, Color, text, timeLeft: 10 };
    setnewDiv([...newDiv, newCard]);
    setText("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setnewDiv((prevDivs) =>
        prevDivs
          .map((div) =>
            div.timeLeft > 0 ? { ...div, timeLeft: div.timeLeft - 1 } : div
          )
          .filter((div) => div.timeLeft > 0)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [newDiv]);
  return (
    <>
      <h1 className='m-4 text-3xl text-blue-700 font-bold text-center'>Hello World</h1>
      <input
        placeholder='Enter Text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='m-10 p-3 border border-blue-700 rounded'
      />
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setbgColor(e.target.value)}
        className={`mx-4 p-4 border border-blue-600 rounded-md text-2xl w-[20%] h-10 `}
      />
      <input
        type="color"
        value={Color}
        onChange={(e) => setColor(e.target.value)}
        className={`mx-4 p-4 border border-blue-600 rounded-md text-2xl w-[20%] h-10 `}
      />
      <button
        onClick={handleAdd}
        className='mx-4 p-2 border border-blue-600 rounded-sm text-xl'
      >
        Add
      </button>
      <div className='flex flex-col items-center'>
        
        {newDiv.map((data, ind) => (
          <div
            key={data.id}
            style={{
              backgroundColor: data.bgColor,
              color: data.Color,
              padding: '10px',
              margin: '10px',
              borderRadius: '5px',
            }}
            className='w-1/2 text-center'
          >
            <h1 className='text-2xl'>{data.text}</h1>
            <p>Time left: {data.timeLeft} seconds</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
