
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/UserContext';
import { Avatar } from '@nextui-org/react';
import { signOut } from 'firebase/auth';
import auth from '../pages/firebase'

const Navbar = () => {
 const {user} = useContext(userContext);
 console.log("navbar-user",user)
 const handleSignOut = ()=>{
  signOut(auth).then(() => {
    console.log("signout hogaya banda")
  }).catch((error) => {
    console.log("signout nahi ho a")
   
  });
 }
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Our Store</Link>
        <div className='flex'>
        <Link to="/auth" className='mx-4 hover:underline 
           text-white-400' >Auth</Link>
          <Link to="/signup" className='mx-4 hover:underline 
           text-white-400' >SignUp</Link>
          <Link to="/products" className="mx-4 hover:underline">Products</Link>
          <Link to="/checkout" className="mx-4 hover:underline">Checkout</Link>
          
          {
            user.isLogin ?
            <div className='flex'>
              <Avatar className='mx-4' src={user.userInfo.photoURL}></Avatar>
            <button className='mx-4'
            onClick={handleSignOut}>SignOut</button>
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
