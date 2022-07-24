import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as authAPI from "../../service/auth";
import { PageLayout } from "../components/PageLayout";
import Navigation from "../components/Navigation";
import UserDetail from "../components/UserDetail";

function UsersPage() {
  const [users, setUsers] = useState(undefined);

  const fetchUsers = () => {
    authAPI.getUsers().then((userData) => {
      setUsers(userData);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <PageLayout>
      <Navigation>
        <Link to="/register">회원가입</Link>
      </Navigation>

      <h2>유저 목록</h2>

      {!users ? (
        <div>유저 정보를 불러오는 중입니다...</div>
      ) : (
        users.map((user) => <WrappedUserDetail {...user} />)
      )}
    </PageLayout>
  );
}

export default UsersPage;

const WrappedUserDetail = styled(UserDetail)`
  & + & {
    margin-top: 12px;
  }
`;
