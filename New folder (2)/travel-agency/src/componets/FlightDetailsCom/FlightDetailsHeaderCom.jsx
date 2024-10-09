import { ClockCircleFilled, HeartOutlined, HeatMapOutlined, ShareAltOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import FlightDetailheaderimg from '../../assets/FlightDetailheader.png'
import frame1 from '../../assets/Frame142.jpg'
import frame2 from '../../assets/Frame182.jpg'
import frame3 from '../../assets/Frame183.jpg'
import frame4 from '../../assets/Frame184.jpg'
import frame5 from '../../assets/Frame185.jpg'
import frame6 from '../../assets/Frame186.jpg'
import frame7 from '../../assets/Frame186 (2).jpg'
import frame8 from '../../assets/Frame186 (3).jpg'


export default function FlightDetailsHeaderCom(){
return(
    <>
    <h1 className="text-center text-3xl p-5 my-4
         bg-green-300 text-white">flight details</h1>

         <div className="herderMain w-[85%] m-auto ">
            <div className="first flex py-4">
                <Link to={'/'} className="text-red-400 tracking-wider" >Turkey <span className="text-black">{ " > " }</span></Link> 
                <Link to={'/'} className="px-2 text-red-400 tracking-wider"> Instanbul <span className="text-black">{ " > " }</span> </Link>
                <Link className="tracking-wide">CVK Park Bosphorus Hotel instanbul</Link>
            </div>

            <div className="second flex justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Emirates A280 Airbus</h1>
                    <p style={{fontSize:"15px"}}> <Button style={{fontSize:"14px"}} icon={<UserOutlined />}
                     className="border-none"/> gummossumya Mah . Indim Card. 
                     no. 8 instanbul 344462</p>
                    <Button style={{fontSize:"14px",border:"1px solid #67d2a9"}} className="px-2">4.5</Button> 
                    <span className="mx-2 font-light">View Good 54 reviews</span>
                </div>
                <div>
                    <h1 className="text-red-400 text-3xl font-bold text-right mb-4">$379</h1>
                    <div className="flex w-[100%] justify-around">
                        <Button className="p-4 py-6 mx-4" style={{border:"1px solid #67d2a9",fontSize:"17px"}}><HeartOutlined /></Button>
                        <Button className="p-4 py-6 mr-4" style={{border:"1px solid #67d2a9",fontSize:"17px"}}><ShareAltOutlined /></Button>
                        <Button className="px-8 py-6" style={{background:"#67d2a9", border:"none"}}>Book now</Button>
                    </div>                   
                </div>
                
            </div>
            <div className="mt-10 border-r-10">
                        <img src={FlightDetailheaderimg} alt="" />
             </div>


             <div className=" mt-10 flex justify-between items-center">
                <h1 className="text-3xl font-bold ">Basic Economy Features</h1>
                <div className="py-3">
                    <input type="checkbox" name="Economy" /> <label htmlFor="Economy" className="mr-2">Economy</label>
                    <input type="checkbox" name="FirstCLass" /> <label htmlFor="FirstCLass" className="mr-2">Economy</label>
                    <input type="checkbox" name="Bussinessclass" /> <label htmlFor="Bussinessclass" className="mr-2">Economy</label>
                </div>                
             </div>
             <div className="flex mt-2 h-[13vh] justify-between">
                    <img src={frame1} alt="" className="border rounded-2xl w-[10%] my-1" />
                    <img src={frame2} alt="" className="border rounded-2xl w-[10%] my-1" />
                    <img src={frame4} alt="" className="border rounded-2xl w-[10%] my-1" />
                    <img src={frame3} alt="" className="border rounded-2xl w-[10%] my-1" />
                    <img src={frame5} alt="" className="border rounded-2xl w-[10%] my-1" />
                    <img src={frame6} alt="" className="border rounded-2xl w-[10%] my-1" />
                    <img src={frame7} alt="" className="border rounded-2xl w-[10%] my-1" />
                    <img src={frame7} alt="" className="border rounded-2xl w-[10%] my-1" />
                    <img src={frame8} alt="" className="border rounded-2xl w-[10%] my-1" />
                </div>
                <div style={{background:"#67d2a9"}} className="rounded-lg my-6" >
                    <h1 className="text-2xl p-3 font-bold">Emirates airlines Polices</h1>
                    <div className="flex justify-between p-2">
                        <span className="w-[50%]"><ClockCircleFilled className="mx-2" /> 
                        PreFlight cleaning installation of cabin HEPA filters</span>
                        <span className="w-[50%]"><ClockCircleFilled className="mx-2"/> 
                        PreFlight cleaning installation of cabin HEPA filters</span>
                    </div>
                </div>
         </div>
    </>
)
}