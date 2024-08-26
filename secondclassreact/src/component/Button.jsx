function Button({text,onClick}){
return(
    <button 
    className="mx-3 px-4 text-x
     bg-cyan-300 text-white 
      rounded border" onClick={onClick} >
        {text}</button>

)
}
export default Button;