import React, { useState } from 'react';
import './BiddingPage.scss';

const BiddingPage = () => {
  const [bidAmount, setBidAmount] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');

  const handleBidAmountChange = (e) => {
    setBidAmount(e.target.value);
  };

  const handleDeliveryTimeChange = (e) => {
    setDeliveryTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform bidding submission logic here
    console.log('Submitted bid:', bidAmount, deliveryTime);
    // Reset form fields
    setBidAmount('');
    setDeliveryTime('');
  };

  return (
    <div className="bidding-page">
      <h2>Place a Bid</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bidAmount">Bid Amount</label>
          <input
            type="text"
            id="bidAmount"
            value={bidAmount}
            onChange={handleBidAmountChange}
            placeholder="Enter your bid amount"
          />
        </div>
        <div className="form-group">
          <label htmlFor="deliveryTime">Delivery Time</label>
          <input
            type="text"
            id="deliveryTime"
            value={deliveryTime}
            onChange={handleDeliveryTimeChange}
            placeholder="Enter the estimated delivery time"
          />
        </div>
        <button type="submit">Place Bid</button>
      </form>
    </div>
  );
};

export default BiddingPage;
