import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Drawer, Navbar, ScrollArea, Space, Title } from '@mantine/core';

import { isNavbarOpen } from "../../../router/provider/Dispatcher";
import ObjectNav from './ObjectNav';
import EquipmentNav from './EquipmentNav';

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

  let objectNav = url.pathname.includes("item");
  let equipmentNav = url.pathname.includes("equipment");

  return (
    <Drawer
      classNames={{
        root: 'drawer',
        drawer: 'drawer',
        overlay: 'drawer_overlay',
        header: 'drawer_header',
        title: 'drawer_title',
      }}
      withCloseButton={false}
      title="Menu"
      opened={open}
      onClose={() => dispatch(isNavbarOpen())} >

      <Navbar height='85vh'>
        <Navbar.Section grow component={ScrollArea}>
          <ul className="middle-items">
            <li className="list-item">
              <Link to="/" className="link">
                <Title order={3}>
                  Accueil
                </Title>
              </Link>
            </li>

            <Space h="md" />

            <li className="list-item">
              <Link to="/characters" className="link">
                <Title order={3}>
                  Personnages
                </Title>
              </Link>
            </li>

            <Space h="md" />

            <li className="list-item">
              <Link to="/bestiary" className="link">
                <Title order={3}>
                  Bestiaires
                </Title>
              </Link>
            </li>

            <Space h="md" />

            <li className="list-item">
              <Link to="/categories_items" className="link">
                <Title order={3}>
                  Matériaux
                </Title>
              </Link>
              {
                objectNav &&
                <ObjectNav />
              }
            </li>

            <Space h="md" />

            <li className="list-item">
              <Link to="/equipment" className="link">
                <Title order={3}>
                  Equipement
                </Title>
              </Link>
              {
                equipmentNav &&
                <EquipmentNav />
              }
            </li>

            <Space h="md" />

            <li className="list-item">
              <Link to="/recipes" className="link">
                <Title order={3}>
                  Recettes
                </Title>
              </Link>
            </li>

            <Space h="md" />

            <li className="list-item">
              <Link to="/about" className="link">
                <Title order={3}>
                  A propos
                </Title>
              </Link>
            </li>
          </ul>
        </Navbar.Section>
      </Navbar>
    </Drawer>
  );
};

export default Navigation;