import Title from "./Title";

const OurCulture = () => {
  return (

    <section className="bg-[url('/images/Culture.webp')] bg-cover bg-center bg-no-repeat pt-10 lg:pb-45 sm:pb-40 pb-20">
      <Title span="Our Culture" title="Values That Define Us" />

      <div className="container grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 [&_div]:bg-[#FFFFFF40] [&_div]:px-3 [&_div]:py-5 [&_div]:rounded-2xl [&_div_h3]:font-bold! [&_div_h3]:text-[96px] [&_div_h3]:text-white! [&_div_h3]:leading-[0.8] [&_div_h3]:mb-20 lg:[&_div_h3]:mb-30 [&_div_strong]:text-[24px] [&_div_strong]:font-bold! [&_div_strong]:mb-2 [&_div_strong]:block [&_div_strong]:text-white [&_div_p]:text-white [&_div_p]:text-[16px] [&_div]:h-full">
        <div className="border border-transparent lg:hover:border-[#B81C15] active:border-[#B81C15] transition hover:bg-[#aaa5a52e] sm:translate-y-22 cursor-pointer">
          <h3 style={{fontFamily: "Arial"}}>1.</h3>
          <strong style={{fontFamily: "Arial"}}>Innovation-Driven</strong>
           <p className="font-arial">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s,
          </p>
        </div>

        <div className="border border-transparent lg:hover:border-[#B81C15] active:border-[#B81C15] transition hover:bg-[#aaa5a52e] cursor-pointer">
          <h3 style={{fontFamily: "Arial"}}>2.</h3>
          <strong style={{fontFamily: "Arial"}}>Ethical Excellence</strong>
          <p style={{fontFamily: "Arial"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s,
          </p>
        </div>

        <div className="border border-transparent lg:hover:border-[#B81C15] active:border-[#B81C15] transition hover:bg-[#aaa5a52e] sm:translate-y-22 cursor-pointer">
          <h3 style={{fontFamily: "Arial"}}>3.</h3>
          <strong style={{fontFamily: "Arial"}}>Collaborative Spirit</strong>
          <p style={{fontFamily: "Arial"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s,
          </p>
        </div>

        <div className="border border-transparent lg:hover:border-[#B81C15] active:border-[#B81C15] transition hover:bg-[#aaa5a52e] cursor-pointer">
          <h3 style={{fontFamily: "Arial"}}>4.</h3>
          <strong style={{fontFamily: "Arial"}}>Continuous Growth</strong>
          <p style={{fontFamily: "Arial"}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s,
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurCulture;
