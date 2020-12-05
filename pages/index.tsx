import * as React from 'react';

import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { getPosts, Post } from '../utils/api';

type IndexPageProps = {
  posts: Post[];
};

export function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
}

const IndexPage: React.FC<IndexPageProps> = (props) => (
  <Layout title="Home | WKB">
    <h1>👋 WKB 👏</h1>
    <PostList posts={props.posts} />
  </Layout>
);

export default IndexPage;
