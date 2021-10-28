import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/global/jonathan-robbins.jpg"
          alt="Photo of Jonathan Robbins Head Engineer"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Jonathan</h1>
      <p>Head Engineer posting about Jamstack</p>
    </section>
  );
}

export default Hero;
