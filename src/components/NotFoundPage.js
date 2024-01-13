// NotFoundPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const NotFoundPage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>404 - Not Found!</h1>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
};

export default NotFoundPage;
