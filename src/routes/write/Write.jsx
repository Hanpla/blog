import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <img className="writeImg" src="img/1828ae7e2a155c1f8.png" alt="img" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="제목"
            className="writeInput"
            autoFocus
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="이야기를 작성하세요..."
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">게시</button>
      </form>
    </div>
  );
};

export default Write;
