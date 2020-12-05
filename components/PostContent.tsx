import * as React from 'react';
import ReactMarkdown from 'react-markdown';

type PostContentProps = {
  title: string;
  date?: string;
  content: string;
};

const PostContent: React.FC<PostContentProps> = (props) => {
  const content = props.content.replace(/\n# ([\w ])*\n/, '');
  return (
    <div className="post-content">
      <h1>{props.title}</h1>
      {props.date && (
        <p className="published-date">Published on {props.date}</p>
      )}
      <ReactMarkdown source={content} />
    </div>
  );
};

export default PostContent;
