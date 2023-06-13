import React from "react";
import "./FAQs.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore } from "react-icons/md";

const FAQs = () => {
  const faqs = [
    {
      question: "What is PeerHire?",
      answer:
        " PeerHire is a peer-to-peer freelancing platform designed specifically for college students. It connects students who offer freelance services with those who require them.",
    },
    {
      question: "How can I sign up on PeerHire?",
      answer:
        'PeerHire offers a wide range of services that college students can offer, including web development, graphic design, content writing, social media management, tutoring, and more. You can list your specific skills and services on your profile.',
    },
    {
      question: "What services can I offer on PeerHire?",
      answer:
        'To sign up on PeerHire, go to our homepage and click on the "Sign Up" button. Fill out the registration form with your details, and you will be ready to create your profile.',
    },
    {
      question: "How do I find freelancers on PeerHire?",
      answer:
        'To find freelancers on PeerHire, you can browse through the list of available services or use the search bar to find specific skills or categories. You can view freelancers\' profiles, ratings, and feedback to make an informed decision before hiring them.',
    },
    {
      question: "How does the payment system work on PeerHire?",
      answer:
        'PeerHire provides a secure payment system. Once the job is completed, clients can make payments through the platform. The funds are held in escrow until both parties are satisfied with the work, ensuring a fair and transparent process.What if I encounter any issues during a project?',
    },
    {
      question: "Can I change my rates and availability on PeerHire?",
      answer:
        'Yes, you have the flexibility to update your rates and availability on your PeerHire profile. You can make changes as needed to reflect your current skills and schedule.',
    },
    {
      question: "How can I provide feedback on freelancers or clients?",
      answer:
        'PeerHire encourages both freelancers and clients to provide feedback and ratings after completing a project. You can rate and provide feedback on the quality of work, professionalism, and overall experience to help maintain a reliable and trustworthy platform.',
    },
    {
      question: "Is PeerHire available internationally?",
      answer:
        'Yes, PeerHire is available globally. Students from different countries can sign up and offer their services, and clients can hire freelancers from various locations.',
    },
    {
      question: "What are the commission fees on PeerHire?",
      answer:
        'PeerHire charges a commission fee of 5-10% of the total project cost, ensuring an affordable option for both freelancers and clients.',
    },
  ];

  return (
    <div className="faqs">
      <h1 className="faqs__title">Frequently Asked Questions</h1>
      <div className="faqs__list">
        {faqs.map((faq, index) => (
          <div className="faqs__item" key={index}>
            <Accordion>
              <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h2 className="faqs__question">{faq.question}</h2>
              </AccordionSummary>
              <AccordionDetails>
                <p className="faqs__answer">{faq.answer}</p>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
