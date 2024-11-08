import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MembCard from "./MembCard";

const Membership = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <section
      className="p-6 pt-[5vh] bg-gradient-to-b from-white to-sky-100"
      id="membership"
      aria-labelledby="membership-heading"
      role="region"
    >
      <h2
        id="membership-heading"
        className="select-none font-oswald text-center text-slate-800 font-extrabold text-4xl md:text-6xl border-b-4 border-t-4 border-slate-800 py-4 md:py-6"
        aria-label="Our Memberships"
      >
        Our Memberships
      </h2>

      {/* Slider for small screens */}
      <div className="block lg:hidden">
        <Slider {...settings} className="w-full" aria-label="Membership Slider">
          <div className="flex justify-center items-center" aria-label="Teen Membership Card">
            <MembCard
              header="Teen"
              ages="Ages 12-17"
              text="We build boxing skills and confidence. Teens learn discipline, respect, and fitness in a supportive setting, guided by experienced coaches."
              price="50 $"
            />
          </div>
          <div className="flex justify-center items-center" aria-label="Adult Membership Card">
            <MembCard
              header="Adult"
              ages="Ages 18+"
              text="We offer tailored boxing training for all levels. Whether for fitness or competition, we provide the coaching you need to reach your goals."
              price="75 $"
            />
          </div>
          <div className="flex justify-center items-center" aria-label="Professional Aspirant Membership Card">
            <MembCard
              header="Professional Aspirant"
              ages=""
              text="For those aiming to compete professionally. With intense training and personalized coaching from former pros, our program is designed to take your boxing skills to the next level. Contact us directly for a personalized plan."
            />
          </div>
        </Slider>
      </div>

      {/* Gallery for medium and larger screens */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6 pt-[10vh]" aria-label="Membership Cards Grid">
        <div className="flex justify-center" aria-label="Teen Membership Card">
          <MembCard
            header="Teen"
            ages="Ages 12-17"
            text="We build boxing skills and confidence. Teens learn discipline, respect, and fitness in a supportive setting, guided by experienced coaches."
            price="50 $"
          />
        </div>
        <div className="flex justify-center" aria-label="Adult Membership Card">
          <MembCard
            header="Adult"
            ages="Ages 18+"
            text="We offer tailored boxing training for all levels. Whether for fitness or competition, we provide the coaching you need to reach your goals."
            price="75 $"
          />
        </div>
        <div className="flex justify-center" aria-label="Professional Aspirant Membership Card">
          <MembCard
            header="Professional Aspirant"
            ages=""
            text="For those aiming to compete professionally. With intense training and personalized coaching from former pros, our program is designed to take your boxing skills to the next level. Contact us directly for a personalized plan."
          />
        </div>
      </div>
    </section>
  );
};

export default Membership;
