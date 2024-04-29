
import React, { useState } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

function FAQSection() {
  // State to manage accordion expansion
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to handle accordion toggle
  const handleAccordionToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const faqs = [
    {
      question: 'What is a web component?',
      answer: 'A web component is a reusable and encapsulated set of HTML, CSS, and JavaScript that can be used to create custom elements and widgets for web applications. Web components enable developers to encapsulate and package UI elements, making them easier to reuse and maintain across different projects.',
      link:'/portfolio#server'
    },
    {
      question: 'What are web forms?',
      answer: 'Web forms are a crucial part of web development that allows users to input data into a web application. They consist of various form elements such as input fields, checkboxes, radio buttons, dropdown menus, and buttons. Web forms are used for collecting user information, submitting data to servers, and performing various actions based on user input.',
      link:'/forms'
    },
    {
      question: 'What are web tables?',
      answer: 'Web tables, often referred to as HTML tables, are used to display tabular data in a structured format on web pages. They consist of rows and columns, with data organized in cells. Web tables are commonly used for presenting data such as financial reports, product listings, and comparison charts on websites.',
      link:'/portfolio#tables'
    },
    {
      question: 'Why are graphics elements valuable?',
      answer: 'Graphics elements are valuable in web design and development for enhancing visual appeal, conveying information effectively, and improving user engagement. They include images, icons, illustrations, charts, graphs, and other visual elements that help in illustrating concepts, guiding users, and making the user interface more engaging and intuitive.',
      link:'/portfolio#graphics'
    },
    {
      question: 'What are the alert colors for and what do they mean?',
      answer: 'Alert colors are used in web design to convey different levels of importance, urgency, or status to users. Commonly used alert colors include green (success), yellow (warning), orange (alert), and red (error). These colors help users quickly identify the nature of the message or notification being displayed and take appropriate actions.',
      link:'/portfolio#alerts'
    },
  ];
  
  return (
    <div>
      <div className='container w3-padding-64'>
      <div className='row d-flex justify-content-center align-items-center w3-margin-top'>
  <div className='col-sm-12 col-md-6 col-lg-6 flex-column'>
  <h1>Web Components</h1>
  <p>Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets built on the Web Component standards provide benefits such as code reuse, encapsulation, and interoperability.</p>
  </div>
  <div className='col-sm-12 col-md-6 col-lg-6 flex-column'>
  <style>
    {`
      .accordion-item {
        border: none; /* Remove outside border */
        border-bottom: 1px solid #dee2e6; /* Add bottom border */
      }
      .question.py-2 {
        font-size: 2rem !important; /* Adjust font size */
        font-weight: bold;
      }
  
    `}
  </style>
  <Accordion defaultActiveKey="0" className='components-accordian'>
              {faqs.map((faq, index) => (
                <Accordion.Item key={index} eventKey={index.toString()} className="accordion-item">
                  <Accordion.Header
                    className="question py-2 w3-xlarge"
                    onClick={() => handleAccordionToggle(index)}
                    style={{ fontSize: '2rem' }}
                  >
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="answer">
                    {faq.answer}
                    <div>
                    <Link to={faq.link}>
                        <button className="link w3-button w3-black w3-padding w3-round-xxlarge mt-2">
                          Go to Section
                        </button>
                      </Link>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
</div>

</div>
</div>

<div className='container w3-padding-64'>
      <div className='row d-flex justify-content-center align-items-center w3-margin-top'>
  <div className='col-sm-12 col-md-6 col-lg-6 flex-column'>
  <h1>Alert Components</h1>
  <p>Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets built on the Web Component standards provide benefits such as code reuse, encapsulation, and interoperability.</p>
  </div>
  <div className='col-sm-12 col-md-6 col-lg-6 flex-column'>
   
    </div>
  </div>
      </div>
    </div>
  );
}

export default FAQSection;
