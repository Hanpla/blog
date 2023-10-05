import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/159686/desk-pencil-draw-table-159686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fuga
        libero vero ab repudiandae sint temporibus culpa commodi vel, suscipit
        nostrum nemo repellat! Reiciendis, labore odio quas quo ipsum alias.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fuga
        libero vero ab repudiandae sint temporibus culpa commodi vel, suscipit
        nostrum nemo repellat! Reiciendis, labore odio quas quo ipsum alias.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fuga
        libero vero ab repudiandae sint temporibus culpa commodi vel, suscipit
        nostrum nemo repellat! Reiciendis, labore odio quas quo ipsum alias.
      </p>
    </div>
  );
};

export default Post;
