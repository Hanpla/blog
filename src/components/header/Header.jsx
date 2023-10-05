import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/5662848/pexels-photo-5662848.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="blog"
      />
    </div>
  );
};

export default Header;
