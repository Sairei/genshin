import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Drawer, Navbar, Space } from '@mantine/core';

import { isNavbarOpen } from "../../../router/provider/Dispatcher";

const Navigation = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.isNavbarOpen);
  const url = useLocation();

  useEffect(() => {
    if (open) {
      dispatch(isNavbarOpen());
    }
  },
    // eslint-disable-next-line
    [url, dispatch])
  return (
    <Drawer
      classNames={{
        root: 'drawer',
        drawer: 'drawer',
        overlay: 'drawer_overlay',
        header: 'drawer_header',
        title: 'drawer_title',
      }}
      hideCloseButton
      title="Menu"
      opened={open}
      onClose={() => dispatch(isNavbarOpen())} >

      <Navbar >

        <Navbar.Section>
          <ul className="middle-items">
            <li className="list-item">
              <Link to="/" className="link">
                Accueil
              </Link>
            </li>

            <Space h="md" />

            <li className="list-item">
              <Link to="/characters" className="link">
                Personnages
              </Link>
            </li>
            
            <Space h="md" />

            <li className="list-item">
              <Link to="/about" className="link">
                A propos
              </Link>
            </li>
          </ul>
        </Navbar.Section>

      </Navbar>

    </Drawer>
  );
};

export default Navigation;