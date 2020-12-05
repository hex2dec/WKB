import * as React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from '../../components/Layout';
import PostContent from '../../components/PostContent';
import { Post, getPosts, getPostBySlug } from '../../utils/api';

type PostPageProps = {
  post: Post;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      props: {
        post: {
          title: '',
          date: '',
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

const PostPage: React.FC<PostPageProps> = (props: PostPageProps) => {
  return (
    <Layout title={props.post.title}>
      <PostContent {...props.post} />
    </Layout>
  );
};

export default PostPage;
