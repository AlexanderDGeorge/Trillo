import React from 'react';
import { Link } from 'react-router-dom';

function LogoButton() {
  return (
    <Link className="logo-button" to="/">
      Trillo
      {/* put logo here */}
    </Link>
  );
}

export default LogoButton;