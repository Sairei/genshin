import React from 'react';

import { Outlet } from 'react-router';
import { AppShell } from '@mantine/core';

import Header from './UI/navigation/Header';
import Navigation from './UI/navigation/Navigation';

const MainPage = () => {
  return (
    <div className='main_container'>
      <AppShell
        fixed
        classNames={{
          main: "main_body"
        }}
        navbar={<Navigation />}
        header={<Header />}>

        <Outlet />

      </AppShell>
    </div>
  );
};

export default MainPage;