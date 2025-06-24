import React from 'react';
import LoginCard from '../components/Login/LoginCard';
import MainAppLayout from '../components/layout/MainAppLayout';

/**
 * The main index page of the application, serving as the login page.
 * This page utilizes the MainAppLayout to create a full-screen, centered
 * container for the LoginCard component, providing a focused user experience.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
