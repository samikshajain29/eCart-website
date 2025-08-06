import Order from "../model/orderModel.js";
import User from "../model/userModel.js";

export const placeOrder = async (req, res) => {
  try {
    const { items, amount, address } = req.body;
    const userId = req.userId;
    const orderData = {
      items,
      amount,
      userId,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new Order(orderData);
    await newOrder.save();

    await User.findByIdAndUpdate(userId, { cartData: {} });
    return res.status(201).json({ message: "Order Place" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Order Place Error" });
  }
};
