import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { getPosts, Post } from '../utils/api';

type IndexPageProps = {
  posts: Post[];
};

const IndexPage = (props: IndexPageProps) => (
  <Layout title="Home | WKB">
    <h1>Hello WKB 👋</h1>

    <PostList posts={props.posts} />
  </Layout>
);

export default IndexPage;

export function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
}
