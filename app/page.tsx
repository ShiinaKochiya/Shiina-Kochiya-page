
import Stripe from "./components/stripe";
import Hero from "./components/hero";
import About from "./components/about";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Stripe/>
      <About/>
    </div>
  );
}
