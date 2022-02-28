import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
      <span className="headerTitleLg">ShowOff</span>
        <span className="headerTitleSm">A community that accepts who you are!</span>
      </div>
      <img
        className="headerImg"
        src="../images/ukraine.jpg"
        alt=""
      />
    </div>
  );
}