
import './App.css'

// const name1 = 'hafiz';
const list = [{place: 'place1',detail : 'lorem ispsum salt behter hai nahi hai '},
  {place: 'place1',detail : 'lorem ispsum salt behter hai nahi hai '},
  {place: 'place1',detail : 'lorem ispsum salt behter hai nahi hai '}
];
var imges = 'https://blog.thomascook.in/wp-content/uploads/2017/01/Santorini-Greece.jpg'

function App() {
  return (
   <>
   <div className='main' style={{width:'100%',display:'flex',justifyContent: 'center',alignItems: 'center',
    padding:'20px',background:'red'
   }}>
    
      {
        list.map((data,index)=><div className='places-card' key={index}>
          <img src={imges} alt=" not found" />
          <h3>{data.place}</h3>
          <p>{data.detail}</p>
            </div> )
      }
     
   </div>
   </>
   )
}

export default App
