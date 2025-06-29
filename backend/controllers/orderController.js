import Order from '../models/Order.js';

// Create new order
export const createOrder = async (req, res) => {
  const { orderItems, totalPrice } = req.body;
  if (!orderItems || orderItems.length === 0) {
    return res.status(400).json({ message: 'No order items' });
  }
  const order = new Order({
    user: req.user.id,
    orderItems,
    totalPrice,
  });
  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

// Get order summary by order id
export const getOrderSummary = async (req, res) => {
  const order = await Order.findById(req.params.id).populate('orderItems.product', 'name image price');
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  res.json(order);
};

// Update order rating
export const updateOrderRating = async (req, res) => {
  const { rating } = req.body;
  const order = await Order.findById(req.params.id);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  order.rating = rating;
  await order.save();
  res.json({ message: 'Rating updated' });
};
