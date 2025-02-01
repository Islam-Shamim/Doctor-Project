
import Blogs from "./blogs/page";
import AboutPage from "./about/page";
import CarouselPage from "./carosel/page";
export default function Home() {
  return (
    <div>
      <main>
        <CarouselPage></CarouselPage>
        <AboutPage></AboutPage>
        <Blogs></Blogs>
      </main>
    </div>
  );
}
