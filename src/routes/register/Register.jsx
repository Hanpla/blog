import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">로그인</span>
      <form className="registerForm">
        <label>이름</label>
        <input
          className="registerInput"
          type="text"
          placeholder="이름을 입력하세요..."
        />
        <label>이메일</label>
        <input
          className="registerInput"
          type="text"
          placeholder="이메일을 입력하세요..."
        />
        <label>비밀번호</label>
        <input
          className="registerInput"
          type="text"
          placeholder="비밀번호를 입력하세요..."
        />
        <button className="registerBtn">회원가입</button>
      </form>
      <button className="registerLoginBtn">
        <Link className="link" to="/login">로그인</Link>
      </button>
    </div>
  );
};

export default Register;
