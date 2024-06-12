const defaultSize = [
  { width: "318px", height: "518px" },
  { width: "518px", height: "318px" },
  { width: "18vw", height: "50vh" },
];
interface TextCardType {
  width?: string;
  height?: string;
}
const TextCard = ({ width = defaultSize[2].width, height = defaultSize[2].height }: TextCardType) => {
  const style = {
    width: width,
    height: height,
    color: "#7cffc8",
    padding: "10px",
    gap: "8px",
    transition: "all 0.2s",
    background: "rgba(0, 0, 0, 0.5)",
    border: "2px solid #7cffc8",
    borderRadius: "10px",
  };
  return (
    <div className="textCard" style={style}>
      <div className="iconBox">
        <span className="icon"></span>
      </div>
      <div>소제목</div>
      <div>내용</div>
    </div>
  );
};

export default TextCard;
