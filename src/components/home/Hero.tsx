import heroImgBackArt from "../../assets/Abstract Design.png";
import heroImg from "../../assets/Container.png";
const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 text-center lg:text-left">
      <div className="mb-9">
        <div className="text-4xl my-6 leading-relaxed xl:leading-normal xl:text-5xl font-semibold">
          Welcome to LedgerLink Empowering Your{" "}
          <span className="text-highlight">Financial Decisions</span>
        </div>
        <div className="leading-normal text-secondary">
          Take control of your finances with LedgerLink, the ultimate
          transaction manager app designed to streamline your financial journey.
          Effortlessly track, manage, and analyze your transactions with our
          intuitive interface. From detailed reports to insightful analytics,
          LedgerLink provides the tools you need to make informed financial
          decisions and achieve your goals. Start managing your money with
          confidence today!
        </div>
        <button className="bg-highlight text-cardBg mt-14 font-semibold py-4 px-6 rounded-full">
          View Transactions
        </button>
      </div>
      <div className="relative py-9 px-2">
        <div className="m-auto">
          <img className="scale-110 sm:scale-100 m-auto" src={heroImg} alt="" />
        </div>
        <img
          className="absolute -top-11 xl:top-11 xl:-right-20 -right-7 -z-10"
          src={heroImgBackArt}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
