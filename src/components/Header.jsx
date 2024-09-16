import React from 'react';
import logo from '../assets/investment-calculator-logo.png';

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing a money bag" />
      <header>Investment Claculator</header>
    </header>
  );
};

export default Header;
