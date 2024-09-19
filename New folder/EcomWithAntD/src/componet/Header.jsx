import { Link } from "react-router-dom";
import { Avatar, Badge, Image } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

function Header(){
 const isLogin = false;
    return(
        <header className="text-gray-600 body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           <Image width={40} height={40} className="rounded-full" preview={false}
           src="https://hafizmudassirhusain.netlify.app/Assests/HMH.png" />
            <span className="ml-3 text-xl">ECOM</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to={'/products'} className="mr-5 hover:text-gray-900">Products</Link>
          
            <Link to={'/orders'} className="mr-5 hover:text-gray-900">Orders</Link>
          </nav>
          <div className="flex justify-center items-center p-1">
          
          {
            isLogin ? (
            <button className="m-1 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Login
          </button>
            ) : (
              <div className=" flex items-center">

                <Avatar icon={<UserOutlined />} /> 
                <Link to={'/cart'}>
                <Badge count={5}>
                  <ShoppingCartOutlined  
                  style={{
                  fontSize: 30,
                  color: "orange",
                }}/>
                </Badge>
                </Link>
              </div>
            )
          }
          
          
          
          
          
          </div>
        </div>
      </header>
      
    )
   }
   export default Header;