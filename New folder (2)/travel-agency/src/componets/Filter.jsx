import emirates from '../assets/emirates.png';


import { BarsOutlined, HeartFilled, HeartOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";
import Paragraph from 'antd/es/skeleton/Paragraph';




 export default function Filter(){
return(
    <div className="parent flex w-[95%] mx-auto">
        <div className="child w-[25%] p-2 border-r-2">
            <h1 className="font-bold text-xl p-2">Filters</h1>

            <div className="price p-2" style={{borderBottom:"1px solid #8c9190"}}>
                <div className="flex justify-between my-2">
                <p>Price</p>
                <Button style={{border:"none"}} icon={<UpOutlined />} />
                </div>
                <input  type="range" className="w-full px-4"/>
                <div className="flex justify-between p-2">
                    <p>$1200</p>
                    <p>$1000</p>
                </div>
            </div>

            <div className="price p-2" style={{borderBottom:"1px solid #8c9190"}}>
                <div className="flex justify-between my-2">
                <p>Departure Time</p>
                <Button style={{border:"none"}} icon={<UpOutlined />} />
                </div>
                <input  type="range" className="w-full px-4"/>
                <div className="flex justify-between p-2">
                    <p>12:00pm</p>
                    <p>10:00pm</p>
                </div>
            </div>

            <div className="price p-2" style={{borderBottom:"1px solid #8c9190"}}>
                <div className="flex justify-between my-2">
                <p>Rating</p>
                <Button style={{border:"none"}} icon={<UpOutlined />} />
                </div>
                <div className="flex justify-between p-2">
                <Button style={{borderColor:"#32bf9e", outline:"none"}} >0+</Button>
                <Button style={{borderColor:"#32bf9e", outline:"none"}} >1+</Button>
                <Button style={{borderColor:"#32bf9e", outline:"none"}} >2+</Button>
                <Button style={{borderColor:"#32bf9e", outline:"none"}} >3+</Button>
                <Button style={{borderColor:"#32bf9e", outline:"none"}} >4+</Button>
                </div>
            </div>

            <div className="price p-2" style={{borderBottom:"1px solid #8c9190"}}>
                <div className="flex justify-between my-2">
                <p>Airline</p>
                <Button style={{border:"none"}} icon={<UpOutlined />} />
                </div>
                <div className="flex flex-col justify-between p-2">
                    <div>
                    <input type="checkbox" /><label className="mx-2" htmlFor="checkbox">Emairated</label>
                    </div>
                    <div>
                    <input type="checkbox" /><label className="mx-2" htmlFor="checkbox">Fly Dubai</label>
                    </div>
                    <div>
                    <input type="checkbox" /><label className="mx-2" htmlFor="checkbox">Qatar</label>
                    </div>
                    <div>
                    <input type="checkbox" /><label className="mx-2" htmlFor="checkbox">Etihad</label>
                    </div>
                </div>
            </div>

            <div className="price p-2" style={{borderBottom:"1px solid #8c9190"}}>
                <div className="flex justify-between my-2">
                <p>Trips</p>
                <Button style={{border:"none"}} icon={<UpOutlined />} />
                </div>
                <div className="flex flex-col justify-between p-2">
                    <div>
                    <input type="checkbox" />
                    <label className="mx-2" htmlFor="checkbox">Round trip</label>
                    </div>
                    <div>
                    <input type="checkbox" />
                    <label className="mx-2" htmlFor="checkbox">Own Way</label>
                    </div>
                    <div>
                    <input type="checkbox" />
                    <label className="mx-2" htmlFor="checkbox">Multi-City</label>
                    </div>
                    <div>
                    <input type="checkbox" />
                    <label className="mx-2" htmlFor="checkbox">My Dates Are Flexible</label>
                    </div>

                </div>
            </div>


        </div>


        <div className="child w-[100%]">

<div className='flex p-4 shadow-lg rounded-lg mx-4 justify-between items-center'>
    <div className=' border-r-2 w-[20%]'>
        <h2 className='font-bold'>Cheapest</h2>
        <p style={{fontSize:12, letterSpacing:1.5}}>$59.2h 18m</p>
    </div>
    <div className='border-r-2 w-[20%]'>
        <h2 className='font-bold'>Best</h2>
        <p style={{fontSize:12, letterSpacing:1.5}}>$59.2h 18m</p>
    </div>
    <div className=' border-r-2 w-[20%]'>
        <h2 className='font-bold'>Quickest</h2>
        <p style={{fontSize:12, letterSpacing:1.5}}>$59.2h 18m</p>
    </div>
    <div className=' border-r-2 w-[20%]'>
    <Button className='border-none' icon={<BarsOutlined />}>Other sort</Button>
    </div>
</div>

<div className='flex justify-between p-4 m-1'>
    <p className='font-light text-sm'>Showing 4 of 
        <span className='text-red-400'> 257 places</span></p>
    <p className='font-light text-sm ' > Sort by <Select
      defaultValue="lucy"
      style={{
        width:120
      }}
     
      options={[
        {
          value: 'Recomended',
          label: 'Recomended',
        }, {
            value: 'lucky',
            label: 'Lucky',
          }, ]} />
      </p>
</div>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-2 mx-auto flex flex-col rounded-2xl">
    <div className="lg:w-6/6 rounded-lg">
      <div className="flex shadow-lg border flex-col sm:flex-row mt-1">
        <div className="lg:px-0 h-60 lg:w-[30%]  border sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-[60%] h-20 rounded inline-flex items-center justify-center">
            <img src={emirates} alt="" />
          </div>
        
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <div className='flex justify-between' style={{marginTop:-20}}>
            <div>
              <span className='p-1 text-sm border border-green-300'>4.2</span>
              <strong className='mx-2 text-sm'> Very Good</strong>54 reviews 
            </div>
            <div>
              <p className='font-extralight pr-6' style={{fontSize:12,
                marginTop:-5}}>starting from</p>
              <h2 className='font-bold text-lg text-red-500'>$104</h2>
            </div>
          </div>
          <div className='border-b-2 mr-5'>
            <div className='flex'>
               <div>
              <input type="checkbox" name="" />
              <label htmlFor="check" className='font-bold'> 12:00 pm - 01:20 pm </label><br />
              <p className='font-extralight mx-6' style={{fontSize:14}}>Emirates</p>
               </div>
              <div className='mx-10 font-semibold'> npn stop</div> 
              <div><p className='font-bold'>2h 29m </p>
              <p className='font-extralight' style={{fontSize:14}}>EWR-BNA</p></div>
            </div>

            <div className='flex my-2'>
               <div>
              <input type="checkbox" name="" />
              <label htmlFor="check" className='font-bold'> 12:00 pm - 01:20 pm </label><br />
              <p className='font-extralight mx-6' style={{fontSize:14}}>Emirates</p>
               </div>
              <div className='mx-10 font-semibold'> npn stop</div> 
              <div><p className='font-bold'>2h 29m </p>
              <p className='font-extralight' style={{fontSize:14}}>EWR-BNA</p></div>
            </div>
          </div>
          <div className='flex justify-between my-4'>
          <Button style={{borderColor:"#32bf9e",color:"black",
          padding:20,fontWeight:"bolder",marginRight:5}}
          icon={<HeartOutlined />} 
          size={10} />
          <Button className='w-full mx-4 p-5' style={{backgroundColor:"#32bf9e"}}>View Deals</Button>
          </div>
        </div>
      </div>
    </div>




    <div className="lg:w-6/6 rounded-lg">
      <div className="flex shadow-lg flex-col sm:flex-row mt-10">
        <div className="lg:p-0 sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-[60%] h-20 rounded inline-flex items-center justify-center">
            <img src={emirates} alt="" />
          </div>
        
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <div className='flex justify-between' style={{marginTop:-20}}>
            <div>
              <span className='p-1 text-sm border border-green-300'>4.2</span>
              <strong className='mx-2 text-sm'> Very Good</strong>54 reviews 
            </div>
            <div>
              <p className='font-extralight pr-6' style={{fontSize:12,
                marginTop:-5}}>starting from</p>
              <h2 className='font-bold text-lg text-red-500'>$104</h2>
            </div>
          </div>
          <div className='border-b-2 mr-5'>
            <div className='flex'>
               <div>
              <input type="checkbox" name="" />
              <label htmlFor="check" className='font-bold'> 12:00 pm - 01:20 pm </label><br />
              <p className='font-extralight mx-6' style={{fontSize:14}}>Emirates</p>
               </div>
              <div className='mx-10 font-semibold'> npn stop</div> 
              <div><p className='font-bold'>2h 29m </p>
              <p className='font-extralight' style={{fontSize:14}}>EWR-BNA</p></div>
            </div>

            <div className='flex my-2'>
               <div>
              <input type="checkbox" name="" />
              <label htmlFor="check" className='font-bold'> 12:00 pm - 01:20 pm </label><br />
              <p className='font-extralight mx-6' style={{fontSize:14}}>Emirates</p>
               </div>
              <div className='mx-10 font-semibold'> npn stop</div> 
              <div><p className='font-bold'>2h 29m </p>
              <p className='font-extralight' style={{fontSize:14}}>EWR-BNA</p></div>
            </div>
          </div>
          <div className='flex justify-between my-4'>
          <Button style={{borderColor:"#32bf9e",color:"black",
          padding:20,fontWeight:"bolder",marginRight:5}}
          icon={<HeartOutlined />} 
          size={10} />
          <Button className='w-full mx-4 p-5' style={{backgroundColor:"#32bf9e"}}>View Deals</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </div>
    </div>
)
}

