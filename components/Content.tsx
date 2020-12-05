import * as React from 'react';

const Content: React.FC<React.PropsWithChildren<{}>> = (props) => (
  <main className="content">{props.children}</main>
);

export default Content;
