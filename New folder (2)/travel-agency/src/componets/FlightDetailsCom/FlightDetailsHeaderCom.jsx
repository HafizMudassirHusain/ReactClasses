import { ClockCircleFilled, HeartOutlined, ShareAltOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import FlightDetailheaderimg from '../../assets/FlightDetailheader.png';
import frame1 from '../../assets/Frame142.jpg';
import frame2 from '../../assets/Frame182.jpg';
import frame3 from '../../assets/Frame183.jpg';
import frame4 from '../../assets/Frame184.jpg';
import frame5 from '../../assets/Frame185.jpg';
import frame6 from '../../assets/Frame186.jpg';
import frame7 from '../../assets/Frame186 (2).jpg';
import frame8 from '../../assets/Frame186 (3).jpg';

export default function FlightDetailsHeaderCom() {
  return (
    <>
      <h1 className="text-center text-3xl p-5 my-4 bg-green-300 text-white">Flight Details</h1>

      <div className="herderMain w-[90%] md:w-[85%] m-auto">
        {/* Breadcrumb */}
        <div className="first flex py-4 text-sm sm:text-base">
          <Link to={'/'} className="text-red-400 tracking-wider">Turkey <span className="text-black">{ " > " }</span></Link> 
          <Link to={'/'} className="px-2 text-red-400 tracking-wider"> Istanbul <span className="text-black">{ " > " }</span> </Link>
          <Link className="tracking-wide">CVK Park Bosphorus Hotel Istanbul</Link>
        </div>

        {/* Main Flight Information */}
        <div className="second flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold">Emirates A280 Airbus</h1>
            <p className="text-sm sm:text-base mt-2">
              <Button icon={<UserOutlined />} className="border-none" /> Gummossumya Mah, Indim Card, No. 8, Istanbul 344462
            </p>
            <div className="flex items-center mt-2">
              <Button className="text-sm border-green-300" style={{ border: "1px solid #67d2a9" }}>4.5</Button> 
              <span className="mx-2 text-sm">View Good 54 reviews</span>
            </div>
          </div>

          {/* Pricing and Actions */}
          <div className="text-right">
            <h1 className="text-red-400 text-2xl sm:text-3xl font-bold">$379</h1>
            <div className="flex justify-between md:justify-end mt-4">
              <Button className="p-3 sm:p-4 mx-2" style={{ border: "1px solid #67d2a9" }}>
                <HeartOutlined />
              </Button>
              <Button className="p-3 sm:p-4 mx-2" style={{ border: "1px solid #67d2a9" }}>
                <ShareAltOutlined />
              </Button>
              <Button className="p-3 sm:px-8" style={{ background: "#67d2a9", border: "none" }}>Book now</Button>
            </div>
          </div>
        </div>

        {/* Flight Image */}
        <div className="mt-6">
          <img src={FlightDetailheaderimg} alt="Flight" className="w-full rounded-lg" />
        </div>

        {/* Features */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Basic Economy Features</h1>
          <div className="mt-4 md:mt-0">
            <input type="checkbox" name="Economy" /> <label htmlFor="Economy" className="mr-2">Economy</label>
            <input type="checkbox" name="FirstClass" /> <label htmlFor="FirstClass" className="mr-2">First Class</label>
            <input type="checkbox" name="BusinessClass" /> <label htmlFor="BusinessClass" className="mr-2">Business Class</label>
          </div>
        </div>

        {/* Images Gallery */}
        <div className="flex flex-wrap justify-between mt-6">
          {[frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8].map((frame, index) => (
            <img key={index} src={frame} alt="Frame" className="w-[48%] sm:w-[24%] lg:w-[10%] mb-4 rounded-2xl border" />
          ))}
        </div>

        {/* Airline Policies */}
        <div className=" rounded-lg p-4 mt-6" style={{background:"#67d2a9"}}>
          <h1 className="text-xl sm:text-2xl font-bold mb-2">Emirates Airlines Policies</h1>
          <div className="flex flex-col md:flex-row justify-between">
            <span className="w-full md:w-[48%] flex items-center mb-2">
              <ClockCircleFilled className="mr-2" /> PreFlight cleaning, installation of cabin HEPA filters
            </span>
            <span className="w-full md:w-[48%] flex items-center mb-2">
              <ClockCircleFilled className="mr-2" /> PreFlight cleaning, installation of cabin HEPA filters
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
