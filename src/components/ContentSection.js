// src/components/ContentSection.js
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const ContentSection = ({ title, content, children }) => {
  const theme = useTheme();

  return (
    <Box padding={theme.spacing(3)}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {typeof content === 'string' ? (
        <Typography variant="body1">
          {content}
        </Typography>
      ) : (
        content.map((paragraph, index) => (
          <Typography key={index} variant="body1" paragraph>
            {paragraph}
          </Typography>
        ))
      )}
      {children}
    </Box>
  );
};

export default ContentSection;
