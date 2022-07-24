import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import * as authAPI from "../../service/auth";
import { PageLayout } from "../components/PageLayout";
import RegisterForm from "../components/RegisterForm";
import Navigation from "../components/Navigation";

export default function RegisterPage() {
  const history = useHistory()
  const handleSubmit = (formData) => {
    // formData에는 email, password가 들어있습니다.
    // 이 정보를 바탕으로 authAPI.registerUser 를 이용해 유저를 등록하세요.
    // 성공적으로 유저를 등록했으면 유저 목록 페이지로 이동하세요.
    console.log(formData)
    
    authAPI
        .registerUser(formData)
        .then(()=> history.push('/users'))
  };

  return (
    <PageLayout>
      <Navigation>
        <Link to="/users">유저 목록</Link>
      </Navigation>
      <h2>유저 회원가입</h2>
      <WrappedRegisterForm onSubmit={handleSubmit} />
    </PageLayout>
  );
}

const WrappedRegisterForm = styled(RegisterForm)`
  margin-bottom: 12px;
`;
