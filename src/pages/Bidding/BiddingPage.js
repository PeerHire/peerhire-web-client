import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./BiddingPage.scss";
import { RiDeleteBin6Line, RiEdit2Line } from "react-icons/ri";
import { HiRefresh } from "react-icons/hi";

function BiddingPage() {
  const [projectDuration, setProjectDuration] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [attachments, setAttachments] = useState(null);
  const [errors, setErrors] = useState({});

  const [bids, setBids] = useState([
    { bidId: 1, userId: 126, bid: 300, timeAgo: "2 minutes ago" },
    { bidId: 2, userId: 201, bid: 440, timeAgo: "13 hours ago" },
    { bidId: 3, userId: 151, bid: 450, timeAgo: "6 hours ago" },
    { bidId: 4, userId: 125, bid: 480, timeAgo: "5 hours ago" },
    { bidId: 5, userId: 147, bid: 500, timeAgo: "9 minutes ago" },
  ]);

  const [bidAmount, setBidAmount] = useState("");
  const [editBidId, setEditBidId] = useState(null);

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

  const handleProjectDurationChange = (e) => {
    setProjectDuration(e.target.value);
    setErrors((prevState) => ({ ...prevState, projectDuration: "" }));
  };

  const handleCoverLetterChange = (e) => {
    setCoverLetter(e.target.value);
    setErrors((prevState) => ({ ...prevState, coverLetter: "" }));
  };

  const handleAttachmentsChange = (e) => {
    const file = e.target.files[0];
    setAttachments(file);
  };

  const handlePlaceBid = (e) => {
    e.preventDefault();

    // Validate form fields

    const validationErrors = {};
    if (!projectDuration) {
      validationErrors.projectDuration = "Please select the project duration.";
    }
    if (!coverLetter) {
      validationErrors.coverLetter = "Please enter a cover letter.";
    }
    if (!bidAmount){
      validationErrors.bidAmount = "Please enter a bid amount.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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

    // Clear form fields after submission
    setBidAmount("");
    setEditBidId(null);
    // setProjectDuration("");
    // setCoverLetter("");
    // setAttachments(null);
  };

  return (
    <>
      <Header />
      <div className="bidding-page">
        <h2>Place a Bid</h2>
        <div className="bidding-form-container">
          <div className="form-div">
            <div className="form-group">
              <label>Project Name</label>
              <div className="input-group">
                <span className="project-name">
                  Project Management with Finance
                </span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="projectDuration">Project Duration</label>
              <select
                id="projectDuration"
                value={projectDuration}
                onChange={handleProjectDurationChange}
                required
              >
                <option value="">Select Duration</option>
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="2 months">2 months</option>
              </select>
              {errors.projectDuration && (
                <span className="error">{errors.projectDuration}</span>
              )}
              <p>
                Select the estimated time it will take you to complete the
                project.
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="coverLetter">Cover Letter</label>
              <textarea
                id="coverLetter"
                value={coverLetter}
                onChange={handleCoverLetterChange}
                required
              />
              {errors.coverLetter && (
                <span className="error">{errors.coverLetter}</span>
              )}
              <p>
                Write a compelling cover letter to introduce yourself and
                explain why you are the right candidate for this project.
              </p>
            </div>
            <div className="form-group">
              <label htmlFor="attachments">Attachments</label>
              <div className="file-upload">
                <input
                  type="file"
                  id="attachments"
                  accept=".doc,.docx,.pdf"
                  onChange={handleAttachmentsChange}
                />
                <label htmlFor="attachments">
                  <span>Drag or upload project files</span>
                  <span className="file-name">
                    {attachments ? attachments.name : "No file selected"}
                  </span>
                </label>
              </div>
              <p>
                Drag or upload any relevant files or supporting documents that
                can help the client understand your bid better.
              </p>
            </div>
          </div>
          {/*------------------------------------------------------------------
            ---------------------live bidding section-------------------------
            ------------------------------------------------------------------ */}
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
                        <button
                          className="refresh-bid"
                          onClick={handleRefreshBids}
                        >
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
                  type="number"
                  placeholder="Enter bid amount"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                />
                {errors.bidAmount && (
                  <span className="error">{errors.bidAmount}</span>
                )}
                <p>Enter the amount you'd like to bid for this job.</p>
                <button onClick={handlePlaceBid}>
                  {editBidId ? "Update Bid" : "Place Bid"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BiddingPage;
