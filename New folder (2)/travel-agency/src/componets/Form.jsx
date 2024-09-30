import { SearchOutlined } from "@ant-design/icons";
import { Button} from "antd";



  export default function Form(){
    return(
        <div className="mx-auto flex justify-center items-center m-4 shadow-lg rounded-lg p-5 w-[95%]">
   <input type="text" placeholder="Search" className="border rounded-md border-black m-4 p-2" />
   <input type="text" placeholder="Search" className="border rounded-md border-black m-4 p-2" />
   <input type="text" placeholder="Search" className="border rounded-md border-black m-4 p-2" />
   <input type="text" placeholder="Search" className="border rounded-md border-black m-4 p-2" />
   <Button style={{background:"#32bf9e",color:"black",padding:20,fontWeight:"bolder",marginRight:5}}
    icon={<SearchOutlined />} 
    size={10} />
        </div>
   )
   }