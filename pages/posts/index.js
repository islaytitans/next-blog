import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework for production - it makes building fullstack React apps a breeze and includes SSR.",
    date: "2021-12-01",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework for production - it makes building fullstack React apps a breeze and includes SSR.",
    date: "2022-01-01",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework for production - it makes building fullstack React apps a breeze and includes SSR.",
    date: "2022-02-01",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework for production - it makes building fullstack React apps a breeze and includes SSR.",
    date: "2022-03-01",
  },
];

function AllPostsPage() {
  return (<AllPosts posts={DUMMY_POSTS} />);
}

export default AllPostsPage;