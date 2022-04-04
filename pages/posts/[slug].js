import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFilenames } from "../../lib/posts-util";

function PostDetailPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const post = getPostData(slug);

  return {
    props: {
      post: post,
    },
    revalidate: 1800,
  };
}

export function getStaticPaths() {
  const allPostsFilenames = getPostsFilenames();

  const slugs = allPostsFilenames.map((filename) =>
    filename.replace(/\.md$/, "")
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
