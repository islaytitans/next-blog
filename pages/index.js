import { Fragment } from "react";
import Hero from "../components/global/hero";
import FeaturedPosts from "../components/posts/featured-posts";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}

export default HomePage;
