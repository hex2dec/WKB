import * as React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>William's Knowledge Base</h1>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="https://github.com/hex2dec">
          <a>Project</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
