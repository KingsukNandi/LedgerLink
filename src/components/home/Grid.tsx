import cardArt from "../../assets/cardArt.png";
interface props {
  details: Array<{ src: string; text: string }>;
}
const Grid = (props: props) => {
  return (
    <div className="bg-cardBg rounded-[20px] p-5 sm:p-14 grid grid-cols-2 gap-6 relative">
      <img src={cardArt} alt="" className="absolute top-0 left-0 " />
      {props.details.map((detail) => (
        <div
          key={detail.src}
          className="z-10 bg-body border-border border rounded-[16px] flex flex-col justify-center items-center gap-6 p-7 text-center"
        >
          <div>
            <img src={detail.src} alt={detail.src} />
          </div>
          <div className="text-sm sm:text-lg font-semibold">{detail.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
