import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utility/api";

function OrderSummary() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    api.get(`/api/v1/orders/${id}`).then(res => setOrder(res.data));
  }, [id]);

  const handleRating = async (star) => {
    setRating(star);
    await api.put(`/api/v1/orders/${id}/rating`, { rating: star });
    setSubmitted(true);
  };

  if (!order) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <div>
        <div className="mb-4">
          <strong>Order ID:</strong> {order._id}
        </div>
        <div>
          <strong>Items:</strong>
          <ul className="list-disc pl-6">
            {order.orderItems.map(item => (
              <li key={item.product}>
                {item.name} x {item.qty} &mdash; ₹{item.price * item.qty}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <strong>Total:</strong> <span className="text-pink-600 font-bold">₹{order.totalPrice}</span>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Rate Your Experience:</h3>
        <div className="flex gap-1">
          {[1,2,3,4,5].map(star => (
            <button
              key={star}
              className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
              onClick={() => handleRating(star)}
              disabled={submitted}
            >★</button>
          ))}
        </div>
        {submitted && <div className="mt-2 text-green-600">Thank you for rating!</div>}
      </div>
    </div>
  );
}

export default OrderSummary;
