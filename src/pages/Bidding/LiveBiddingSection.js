import React, { useEffect, useState } from "react";
import "./BiddingPage.scss";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { HiRefresh } from "react-icons/hi";

function LiveBiddingSection() {
  const [bids, setBids] = useState([
    { bidId: 1, userId: 126, bid: 300, timeAgo: "2 minutes ago" },
    { bidId: 2, userId: 201, bid: 440, timeAgo: "13 hours ago" },
    { bidId: 3, userId: 151, bid: 450, timeAgo: "6 hours ago" },
    { bidId: 4, userId: 125, bid: 480, timeAgo: "5 hours ago" },
    { bidId: 5, userId: 147, bid: 500, timeAgo: "9 minutes ago" },
  ]);

  const [bidAmount, setBidAmount] = useState("");
  const [editBidId, setEditBidId] = useState(null);

  const handlePlaceBid = () => {
    if (bidAmount.trim() === "") {
      alert("Please enter a bid amount.");
      return;
    }
    if (isNaN(bidAmount)) {
      alert("Bid amount must be a number.");
      return;
    }

    const existingBid = bids.find((bid) => bid.userId === 123);

    if (existingBid) {
      const updatedBids = bids.map((bid) =>
        bid.userId === 123 ? { ...bid, bid: parseFloat(bidAmount) } : bid
      );
      setBids(updatedBids);
      setLastRefreshTime(Date.now());
    } else {
      const newBid = {
        bidId: Date.now(),
        userId: 123,
        bid: parseFloat(bidAmount),
        timeAgo: "Just now",
      };
      setBids([...bids, newBid]);
      setLastRefreshTime(Date.now());
    }

    setBidAmount("");
    setEditBidId(null);
  };

  const [lastRefreshTime, setLastRefreshTime] = useState(Date.now());
  const [timeAgo, setTimeAgo] = useState("");

  
  const handleRefreshBids = () => {
    // Simulate getting new bids data
    // You can replace this with an API call to get new bids data from the server

    // Sort the bids array by bid amount in ascending order
    const sortedBids = bids.sort((a, b) => a.bid - b.bid);

    // Add placement property to each bid based on the sorted order
    const bidsWithPlace = sortedBids.map((bid, index) => ({
      ...bid,
      place: `${index + 1}${
        index === 0 ? "st" : index === 1 ? "nd" : index === 2 ? "rd" : "th"
      } place`,
    }));

    setBids(bidsWithPlace);
    setLastRefreshTime(Date.now());
  };

  const formatTimeAgo = (timestamp) => {
    const now = Date.now();
    const diff = now - timestamp;

    const minutes = Math.floor(diff / (1000 * 60));
    if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    }

    const seconds = Math.floor(diff / 1000);
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  };

  useEffect(() => {
    // Call the formatTimeAgo function initially when the component mounts
    setTimeAgo(formatTimeAgo(lastRefreshTime));

    // Set up an interval to update the time ago every second
    const interval = setInterval(() => {
      setTimeAgo(formatTimeAgo(lastRefreshTime));
    }, 5000);

    // Clean up the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, [lastRefreshTime]);


  const handleDeleteBid = (bidId) => {
    setBids((prevBids) => prevBids.filter((bid) => bid.bidId !== bidId));
    setEditBidId(null);
    setLastRefreshTime(Date.now());
  };

  const handleEditBid = (bidId) => {
    const bid = bids.find((bid) => bid.bidId === bidId);
    if (bid) {
      setBidAmount(bid.bid.toString());
      setEditBidId(bid.bidId);
    }
  };

  return (
    <div className="Live-bidding-section">
      <div className="live-bidding">
        <h3>Biddings</h3>
        <table>
          <thead>
            <tr>
              <th>Live Proposals</th>
              <th>Bid</th>
              <th>
                <div className="refresh-time">
                  <button className="refresh-bid" onClick={handleRefreshBids}>
                    <HiRefresh />
                  </button>
                  <span>{timeAgo}</span>
                </div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bids
              .sort((a, b) => a.bid - b.bid)
              .map((bid, index) => (
                <tr key={bid.bidId}>
                  <td>
                    {index + 1}
                    {index === 0
                      ? "st"
                      : index === 1
                      ? "nd"
                      : index === 2
                      ? "rd"
                      : "th"}{" "}
                    place
                    {bid.userId === 123 ? " (You)" : ""}
                  </td>
                  <td>₹{bid.bid}</td>
                  <td>
                    {bid.userId === 123 ? (
                      <>
                        <button
                          className="edit-bid"
                          onClick={() => handleEditBid(bid.bidId)}
                        >
                          <RiEdit2Line />
                        </button>
                        <button
                          className="delete-bid"
                          onClick={() => handleDeleteBid(bid.bidId)}
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </>
                    ) : (
                      bid.timeAgo
                    )}
                  </td>
                  <td></td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="bidding-form">
          <input
            type="text"
            placeholder="Enter bid amount"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
          />
          <p>Enter the amount you'd like to bid for this job.</p>
          <button onClick={handlePlaceBid}>
            {editBidId ? "Update Bid" : "Place Bid"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LiveBiddingSection;
