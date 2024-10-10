import { Button } from 'antd';
import emirates from '../../assets/emirates.png';
import { ClockCircleFilled, UserSwitchOutlined, WifiOutlined } from '@ant-design/icons';
import { MdAirlineSeatReclineNormal, MdFlight } from 'react-icons/md';
import { PiUserSwitchLight } from 'react-icons/pi';
import { IoTrendingUpOutline } from 'react-icons/io5';

export default function FlightDetCard(){
    return(
        <div className="card shadow-lg rounded-lg w-[95%] md:w-[85%] m-auto p-4 my-8 bg-white">
            <div className="flex justify-between text-lg md:text-xl">
                <h1 className="font-bold px-2 md:px-4">Return Wed, Dec 8</h1>
                <h1 className="font-semibold pr-2 md:pr-4">2h 29m</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center my-4">
                <div className="border h-[12vh] md:h-[10vh] rounded-md flex items-center w-full md:w-auto" style={{border:"1px solid #67d2a9"}}>
                    <img src={emirates} alt="Emirates" className="h-full w-2/4 p-2 md:p-4" />
                    <div className="ml-2 md:mx-4">
                        <h1 className="text-2xl md:text-3xl font-bold">Emirates</h1>
                        <h5 className="tracking-wider text-sm md:text-base">Airline A340</h5>
                    </div>
                </div>

                <div className="flex space-x-2 md:space-x-4 mt-4 md:mt-0">
                    <Button className="rounded-none text-gray-700 text-xl py-6 px-6" style={{border:"none",borderRight:"1px solid #e3dfde"}}><MdFlight className="rotate-90" /></Button>
                    <Button className="rounded-none text-gray-700 text-xl py-6 px-6" style={{border:"none",borderRight:"1px solid #e3dfde"}}><WifiOutlined /></Button>
                    <Button className="rounded-none text-gray-700 text-xl py-6 px-6" style={{border:"none",borderRight:"1px solid #e3dfde"}}><ClockCircleFilled /></Button>
                    <Button className="rounded-none text-gray-700 text-xl py-6 px-6" style={{border:"none",borderRight:"1px solid #e3dfde"}}><MdAirlineSeatReclineNormal /></Button>
                    <Button className="rounded-none text-gray-700 text-xl py-6 px-6" style={{border:"none"}}><PiUserSwitchLight /></Button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-around p-4">
                <div className="text-black text-xl md:text-2xl font-semibold w-full md:w-[20vw] flex items-center justify-center">
                    12 pm <span className="text-gray-600 mx-4 text-xs md:text-sm">New York (ENR)</span>
                </div>
                <div className="text-black w-full md:w-[20vw] flex items-center justify-center">
                    <IoTrendingUpOutline className="text-xl md:text-2xl" />
                    <MdFlight className="text-4xl md:text-5xl rotate-90 mx-2" />
                    <IoTrendingUpOutline className="text-xl md:text-2xl" />
                </div>
                <div className="text-black text-xl md:text-2xl font-semibold w-full md:w-[20vw] flex items-center justify-center">
                    12 pm <span className="text-gray-600 mx-4 text-xs md:text-sm">New York (ENR)</span>
                </div>
            </div>
        </div>
    )
}
