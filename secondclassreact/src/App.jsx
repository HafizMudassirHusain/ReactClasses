
import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'
import Steps from './component/Steps'
import Footer from './component/Footer'
import Card from './component/Card'
import React, { useState } from 'react';
import Displayimage from './component/Diplayimage'

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const items = [
    {
      title: "Macbook",
      img: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
      price: "$2000",
      id: 1,
    },
    {
      title: "Macbook White",
      img: "https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 2,
    },
    {
      title: "Macbook Black",
      img: "https://images.unsplash.com/photo-1660833638050-41f95d8b94e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 3,
    },
    {
      title: "Macbook Silver",
      img: "https://images.unsplash.com/photo-1606248896999-387b3a9f621c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hY2Jvb2slMjBhaXJ8ZW58MHx8MHx8fDA%3D",
      price: "$2000",
      id: 4,
    },
    {
      title: "Samsung",
      img: "https://plus.unsplash.com/premium_photo-1706548331122-8ac9455da8e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 5,
    },
    {
      title: "Samsung Mobile",
      img: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 6,
    },
  ];

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map((data) => (
            <Card 
              key={data.id} 
              img={data.img} 
              title={data.title} 
              price={data.price}
              onpress={() => handleImageClick(data.img)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <img src={selectedImage} alt="Full Screen" className="object-cover h-screen w-screen" />
            <button 
              className="absolute top-4 right-4 text-white text-xl"
              onClick={closeModal}
            >
              &times; {/* This is a close (×) icon */}
            </button>
          </div>
        </div>
      )}
    </>
  );
}


export default App
