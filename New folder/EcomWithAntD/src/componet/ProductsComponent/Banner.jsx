import { CheckCircleOutlined, GifOutlined, GiftOutlined, PhoneOutlined, TrophyOutlined } from "@ant-design/icons";



export default function Banner(){
    return(
        <div className="flex justify-between items-center mt-10 p-4 h-[30vh]" style={{background:"#f0ecdf"}}>
            <div className="flex justify-center items-center  mx-2">
                <div><TrophyOutlined className="text-6xl mr-3"/></div>
                <div><h1 className="text-2xl font-bold">High Quality</h1>
                <p>crafted from top materils</p></div>
            </div>
            <div className="flex justify-center items-center  mx-2">
                <div><CheckCircleOutlined className="text-6xl mr-3"/></div>
                <div><h1 className="text-2xl font-bold">Waranty Protection</h1>
                <p>Over 2 year</p></div>
            </div>
            <div className="flex justify-center items-center  mx-2">
                <div><GiftOutlined className="text-6xl mr-3"/></div>
                <div><h1 className="text-2xl font-bold">Free shipping</h1>
                <p>Order cover 150 $</p></div>
            </div>
            <div className="flex justify-center items-center  mx-2">
                <div><PhoneOutlined className="text-6xl mr-3"/></div>
                <div><h1 className="text-2xl font-bold">24/7 Support</h1>
                <p>Dedicated support</p></div>
            </div>
        </div>
    )
}


