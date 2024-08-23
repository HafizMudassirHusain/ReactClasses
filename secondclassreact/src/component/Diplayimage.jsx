

function Displayimage({img}){
return(
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',}}>
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src= {img}
                />
    </div>
)
}
export default Displayimage;