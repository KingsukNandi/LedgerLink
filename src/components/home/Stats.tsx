interface props {
  heading: string;
  description: string;
  info: Array<{ stat: number; text: string }>;
  moreLink: string;
}

const Stats = (props: props) => {
  return (
    <div>
      <div className="text-3xl font-semibold mb-6">{props.heading}</div>
      <div className="text-darkText leading-6">{props.description}</div>
      <div className="flex justify-between flex-col items-center gap-10 md:flex-row mt-12 mb-14">
        {props.info.map((data) => (
          <div key={data.text} className="md:w-1/5 text-center md:text-left">
            <div className="text-5xl font-bold text-highlight mb-6">
              {data.stat}%
            </div>
            <div className="text-darkText">{data.text}</div>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-fit flex  justify-center items-center">
        <a
          href={props.moreLink}
          className="font-semibold bg-cardBg border-border border p-5 px-8 rounded-full"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Stats;
