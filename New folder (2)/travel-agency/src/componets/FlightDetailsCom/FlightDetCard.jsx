import { Button } from 'antd';
import emirates from '../../assets/emirates.png';


export default function FlightDetCard(){
    return(
        <div className="card shadow rounded-lg w-[85%] m-auto p-4">
        <div className="flex justify-between text-xl">
        <h1 className="font-bold px-4">Return Wed, Dec 8</h1>
        <h1 className="font-semibold pr-4">2h 29m</h1>
        </div>

        <div className="flex justify-between items-center m-2 ">
        <div className=" border h-[10vh] w-[30vw] flex items-center" style={{border:"1px solid #67d2a9"}}>
        <img src={emirates} alt="" className='h-full w-1/3 p-4' />
        <div className='mx-4'>
            <h1 className='text-2xl font-bold'>Emirates</h1>
            <h5>Airline A340</h5>
        </div>
        </div>

        <div className="font-semibold pr-4"><Button></Button></div>
        </div>

        </div>
    )
}

