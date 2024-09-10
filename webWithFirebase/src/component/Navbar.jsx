import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/UserContext';
import auth from '../pages/firebase';
import { signOut } from 'firebase/auth';
import { Avatar } from '@nextui-org/react';

const Navbar = () => {
const {user} = useContext(userContext)

const handleSignOut = ()=>{
  signOut(auth).then(() => {
  console.log("signOut hogay user")
 
  }).catch((error) => {
        console.log("eroor =>",error)
  });

}

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Our Store</Link>
        <div>
        <Link to="/auth" className='mx-4 hover:underline 
           text-white-400' >Auth</Link>
          <Link to="/signup" className='mx-4 hover:underline 
           text-white-400' >SignUp</Link>
          <Link to="/products" className="mx-4 hover:underline">Products</Link>
          <Link to="/checkout" className="mx-4 hover:underline">Checkout</Link>

          {
          user.isLogin ? <div className='flex '>
          <Avatar src={user.userInfo.photiURL}></Avatar>
           <button onClick={handleSignOut}>signOut</button>
          </div> 
          : <Link to="/signin" className='mx-4 hover:underline
          text-white-400' >Login</Link>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
