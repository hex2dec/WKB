import * as React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '../../components/Layout';
import PostBody from '../../components/Post';
import { Post, getPosts, getPostBySlug } from '../../utils/api';

type PostPageProps = {
  post: Post;
};

export default function PostPage(props: PostPageProps): React.ReactElement {
  return (
    <Layout title={props.post.title}>
      <PostBody {...props.post} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      props: {
        post: {
          title: '',
          content: '',
        },
      },
    };
  }
  // get post by slug name
  const post = getPostBySlug(params.slug as string);
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts();
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.key,
        },
      };
    }),
    fallback: false,
  };
};
