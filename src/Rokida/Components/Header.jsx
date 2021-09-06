import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../css/Layout.less';
import '../css/Responesive.css';
import HeaderLogo from './HeaderLogo';
import HeaderNew from './HeaderNew';

const Header = () => {
  return (
    <>
      <HeaderLogo />
      <HeaderNew />
    </>
  );
};
export default React.memo(Header);
