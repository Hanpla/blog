import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/5662848/pexels-photo-5662848.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAutor">
            Autor: <b>승현</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi
          esse quia temporibus adipisci, saepe non a, architecto sed, maxime
          aperiam sapiente perspiciatis! Soluta at deleniti voluptas atque et
          nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          sequi esse quia temporibus adipisci, saepe non a, architecto sed,
          maxime aperiam sapiente perspiciatis! Soluta at deleniti voluptas
          atque et nisi? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsa sequi esse quia temporibus adipisci, saepe non a,
          architecto sed, maxime aperiam sapiente perspiciatis! Soluta at
          deleniti voluptas atque et nisi? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsa sequi esse quia temporibus
          adipisci, saepe non a, architecto sed, maxime aperiam sapiente
          perspiciatis! Soluta at deleniti voluptas atque et nisi?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
