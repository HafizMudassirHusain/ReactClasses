import { useQuery } from 'react-query'
import './App.css'
import { Link } from 'react-router-dom';


// const fetchtodo = () =>
//   new Promise((res, rej) => {
//     const dai = [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React",
//       "Python",
//       "JAVA",
//       "SQL"
//     ];
//     setTimeout(()=>{
//       res(dai);
//     },1000);
//   });

  function App() {
    
    // const {
    //   data : todos,
    //   isLoading,
    //   isError } =  useQuery({
    //     queryKey: ["todos"],
    //     queryFn: fetchtodo
    //   });
      
      const fatchProducts = async() => {
        const res =await fetch(`https://fakestoreapi.com/products`)
         return await res.json();
      }
     const {data: products,
       isLoading: isLoadingProducts,
     } = useQuery({
        queryKey: ["products"],
        queryFn: fatchProducts,
      })
      console.log(products)

  return (
    <>
  <div className='mx-auto '>
    {
      isLoadingProducts ? <h1>loooading...</h1>
     : null
    }
    {
      products?.map((data,ind)=>(
        <div key={ind} className='flex flex-col m-1 text-left p-3'>
          <Link to={`/product/${data.id}`}>{data.title}</Link>
        </div>
      ))
    }

  </div>
    </>
  )
}

export default App
