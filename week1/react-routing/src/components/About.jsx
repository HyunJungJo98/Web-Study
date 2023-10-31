import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const toListButtonClick = () => {
    navigate('/list');
  };
  return <button onClick={toListButtonClick}>to List</button>;
};

export default About;
