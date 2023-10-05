import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">프로필 업데이트</span>
          <span className="settingsDeleteTitle">프로필 삭제</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/5662848/pexels-photo-5662848.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="asd"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>사용자 이름</label>
          <input type="text" placeholder="Safak" />
          <label>이메일</label>
          <input type="email" placeholder="safak@gmail.com" />
          <label>비밀번호</label>
          <input type="password" />
          <button className="settingsSubmit">업데이트</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
