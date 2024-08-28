"use client"
import React from 'react';
import styled from 'styled-components';
import { Header } from './components/common/header/Header.component';
// import { HeroSection } from '../components/home/HeroSection';
// import { QuickAccess } from '../components/home/QuickAccess';
// import { Announcements } from '../components/home/Announcements';
// import { ActivityFeed } from '../components/home/ActivityFeed';
// import { Footer } from '../components/layout/Footer';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Header />
      {/* <HeroSection />
      <QuickAccess />
      <Announcements />
      <ActivityFeed />
      <Footer /> */}
    </HomePageContainer>
  );
};

export default HomePage;
