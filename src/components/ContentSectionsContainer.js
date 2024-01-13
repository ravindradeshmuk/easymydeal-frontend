// src/components/ContentSectionsContainer.js
import React from 'react';
import Grid from '@mui/material/Grid';
import ContentSection from './ContentSection';

const contentData = [
  {
    title: 'Why to choose Easymydeal for Recharge',
    content: [
      'Easymydeal is one of the best and most secure platforms for Prepaid Mobile Recharge...',
      // Add more content as needed
    ],
  },
  {
    title: 'How to Prepay Recharge Online?',
    content: [
      'Easymydeal ensures the course of action to pay Mobile Recharge Online...',
      // Add more content as needed
    ],
  },
  // Add more sections if needed
];

const ContentSectionsContainer = () => {
  return (
    <Grid container spacing={2}>
      {contentData.map((section, index) => (
        <Grid item xs={12} key={index}>
          <ContentSection title={section.title} content={section.content} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ContentSectionsContainer;
