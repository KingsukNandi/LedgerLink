import { Grid, Stats } from "../index";
import icon1 from "../../assets/Icon_1.png";
import icon2 from "../../assets/Icon_2.png";
import icon3 from "../../assets/Icon_3.png";
import icon4 from "../../assets/Icon_4.png";
import icon5 from "../../assets/Icon_5.png";
import icon6 from "../../assets/Icon_6.png";
import icon7 from "../../assets/Icon_7.png";
import icon8 from "../../assets/Icon_8.png";

interface statProps {
  heading: string;
  description: string;
  info: Array<{ stat: number; text: string }>;
  moreLink: string;
}

interface gridProps {
  details: Array<{ src: string; text: string }>;
}

const Usecases: React.FC = () => {
  const stats: Array<statProps> = [
    {
      heading: "For Individuals",
      description:
        "Manage your personal finances effortlessly with LedgerLink. Track transactions, set budgets, and gain insights to make smarter financial choices with ease.",
      info: [
        { stat: 78, text: "Secure Retirement Planning" },
        { stat: 63, text: "Manageable Debt Consolidation" },
        { stat: 91, text: "Reducing financial burdens" },
      ],
      moreLink: "#",
    },
    {
      heading: "For Business",
      description:
        "Streamline your business finances with LedgerLink. Track, analyze, and manage transactions efficiently to make informed decisions and drive growth.",
      info: [
        { stat: 65, text: "Cash Flow Management" },
        { stat: 70, text: "Drive Business Expansion" },
        { stat: 45, text: "Streamline payroll processing" },
      ],
      moreLink: "#",
    },
  ];

  const grids: Array<gridProps> = [
    {
      details: [
        { src: icon1, text: "Managing Personal Finances" },
        { src: icon2, text: "Saving for the Future" },
        { src: icon3, text: "Homeownership" },
        { src: icon4, text: "Education Funding" },
      ],
    },
    {
      details: [
        { src: icon5, text: "Startups and Entrepreneurs" },
        { src: icon6, text: "Cash Flow Management" },
        { src: icon7, text: "Business Expansion" },
        { src: icon8, text: "Payment Solutions" },
      ],
    },
  ];
  return (
    <div>
      <div className="text-4xl text-center lg:text-left text-highlight my-6 leading-relaxed xl:leading-normal xl:text-5xl font-semibold">
        Use Cases
      </div>
      <div className="leading-normal text-center lg:text-left">
        Take control of your finances with LedgerLink, the ultimate transaction
        manager app designed to streamline your financial journey
      </div>
      <div className="flex items-center gap-24 lg:gap-24 lg:flex-row-reverse flex-col-reverse my-16">
        <div className="lg:w-1/2 w-full">
          <Stats {...stats[0]} />
        </div>
        <div className="lg:w-1/2 w-full">
          <Grid {...grids[0]} />
        </div>
      </div>
      <div className="flex items-center gap-24 lg:gap-24 lg:flex-row flex-col-reverse my-16">
        <div className="lg:w-1/2 w-full">
          <Stats {...stats[1]} />
        </div>
        <div className="lg:w-1/2 w-full">
          <Grid {...grids[1]} />
        </div>
      </div>
    </div>
  );
};

export default Usecases;
