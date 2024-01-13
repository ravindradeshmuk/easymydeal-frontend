// src/components/FaqSection.js
import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Dummy data for FAQs
const faqs = [
  {
    question: 'How do I recharge online?',
    answer: 'To recharge online, select the recharge option, enter your details, and proceed with payment.',
  },
  {
    question: 'Can I cancel a prepaid recharge?',
    answer: 'Once a recharge is done, it typically cannot be canceled. Please check with customer care for possible solutions.',
  },
  // ...add more FAQs
];

const FAQSection = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQSection;
