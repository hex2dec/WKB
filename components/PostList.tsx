import * as React from 'react';
import Link from 'next/link';

import { Post } from '../utils/api';

type PostListProps = {
  posts: Post[];
};

export default function PostList(props: PostListProps): React.ReactElement {
  return (
    <ul>
      {props.posts.map((post) => (
        <li key={post.key}>
          <Link href={`/posts/${post.key}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
