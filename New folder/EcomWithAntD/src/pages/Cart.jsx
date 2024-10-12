import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Image, message, Modal } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from './firebase';

function Carts({ isModal }) { // Accept isModal prop
  const { cartItems, updateToCart, removeCart, clearCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const toggleCheckoutModal = () => setIsModalOpen(prev => !prev);

  const checkOutOrder = async (values) => {
    setIsLoading(true);
    const checkOutObj = {
      ...values,
      totalPrice,
      totalQuantity,
      Status: "pending",
      user: auth.currentUser ? auth.currentUser.uid : "guest",
      items: cartItems.map(
        (data) => `Item: ${data.title}, Price: ${data.price} (${data.quantity})`
      ),
    };
    const docRef = collection(db, "orders");
    try {
      await addDoc(docRef, checkOutObj);
      message.success("Your order is placed");
      clearCart();
      setIsModalOpen(false);
      window.open(`https://wa.me/923442241275?text=${encodeURIComponent(JSON.stringify(checkOutObj))}`);
    } catch (error) {
      message.error("Order placement failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`container ${isModal ? 'p-4' : 'mx-auto p-10'}`}> {/* Conditionally adjust styles */}
      <Modal
        title="Checkout"
        open={isModalOpen}
        onOk={toggleCheckoutModal}
        onCancel={toggleCheckoutModal}
        footer={null}
        width={600}
      >
        {/* Checkout Modal content */}
        <div className="flex justify-center items-center p-4">
          <Button onClick={checkOutOrder} loading={isLoading}>
            Confirm Checkout
          </Button>
        </div>
      </Modal>

      {/* Cart Summary */}
      <div className="flex gap-4 mb-5">
        <div className="flex-grow border flex justify-center items-center p-5">
          <h1 className="text-2xl font-semibold">{totalQuantity} items</h1>
        </div>
        <div className="flex-grow border flex justify-center items-center p-5">
          <h1 className="text-2xl font-semibold">${Math.floor(totalPrice)}</h1>
        </div>
        <div className="flex-grow border flex justify-center items-center p-5">
          <Button onClick={toggleCheckoutModal} icon={<CheckCircleOutlined />}>
            Proceed to Checkout
          </Button>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col">
        {cartItems.length > 0 ? (
          cartItems.map((data) => (
            <div key={data.id} className="flex items-center border shadow p-4 m-1">
              <Image src={data.thumbnail} height={100} width={100} />
              <div className="pl-3 w-1/2">
                <h1 className="text-blue-300">{data.title}</h1>
                <p>{data.description}</p>
                <h1>${data.price}</h1>
                <div className="flex gap-3 my-3">
                  <Button onClick={() => updateToCart(data.id, "plus")}>Plus</Button>
                  <h1>{data.quantity}</h1>
                  <Button onClick={() => data.quantity <= 1 ? removeCart(data.id) : updateToCart(data.id, "minus")}>
                    {data.quantity <= 1 ? <CloseCircleOutlined /> : "Minus"}
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl">Your cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default Carts;
