import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Form() {
  return (
    <div className="mx-auto flex flex-wrap justify-center items-center shadow-lg rounded-lg p-5 w-full max-w-7xl">
      <input
        type="text"
        placeholder="Search"
        className="border rounded-md border-black m-2 p-2 w-full sm:w-[45%] lg:w-[22%] xl:w-[20%]"
      />
      <input
        type="text"
        placeholder="Search"
        className="border rounded-md border-black m-2 p-2 w-full sm:w-[45%] lg:w-[22%] xl:w-[20%]"
      />
      <input
        type="text"
        placeholder="Search"
        className="border rounded-md border-black m-2 p-2 w-full sm:w-[45%] lg:w-[22%] xl:w-[20%]"
      />
      <input
        type="text"
        placeholder="Search"
        className="border rounded-md border-black m-2 p-2 w-full sm:w-[45%] lg:w-[22%] xl:w-[20%]"
      />
      <Button
        style={{
          background: "#32bf9e",
          color: "black",
          padding: "10px 20px",
          fontWeight: "bolder",
          marginRight: 5,
        }}
        icon={<SearchOutlined />}
        size={10}
      />
    </div>
  );
}
