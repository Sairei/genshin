import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Burger, NativeSelect } from "@mantine/core";
import Flags from 'country-flag-icons/react/3x2'

import { isNavbarOpen } from "../../../router/provider/Dispatcher";

const Header = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.isNavbarOpen);

  const [flag, setFlag] = useState(
    <Flags.US width="27px" title="United States" />
  )

  const handleChangeLang = (value) => {
    // TODO : Creer un tableau qui liste tous les drapeaux possibles et une fonction pour récuperer le bon
    setFlag(
      <Flags.FR width="27px" title={value.label} />
    )
  }

  return (
    <div className="nav-bar-container">

      <div className="left_header">
        <Burger
          className="burger"
          color="#FFFFFF"
          opened={open}
          onClick={() => dispatch(isNavbarOpen())} />
      </div>

      <div className="right_header">
        <NativeSelect 
          disabled
          className="lang"
          data={[
            { value: "US", label: "English" },
            { value: "FR", label: "Français" }
          ]}
          onChange={(event) => handleChangeLang(event.currentTarget)}
          icon={flag} />
      </div>
    </div>
  )
}

export default Header;