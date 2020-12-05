import * as React from 'react';
import Head from 'next/head';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

type LayoutProps = React.PropsWithChildren<{
  title?: string;
}>;

const defaultTitle = "William's Knowledge Base";

const Layout: React.FC<LayoutProps> = ({ children, title = defaultTitle }) => (
  <div className="layout">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </div>
);

export default Layout;
