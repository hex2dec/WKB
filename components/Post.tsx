import * as React from 'react';
import ReactMarkdown from 'react-markdown';

type PostProps = {
  content: string;
};

export default function Post(props: PostProps): React.ReactElement {
  return <ReactMarkdown source={props.content} />;
}
