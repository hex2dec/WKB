import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span>Copyright ©️ {new Date().getFullYear()} The WKB Authors</span>
    </footer>
  );
};

export default Footer;
