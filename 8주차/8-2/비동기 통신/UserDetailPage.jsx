import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import * as authAPI from "../../service/auth";
import { PageLayout } from "../components/PageLayout";
import TransferForm from "../components/TransferForm";
import Navigation from "../components/Navigation";
import { colors } from "../../style/colors";
import styled from "styled-components";
import { Bitcoin } from "../elements/Bitcoin";

function UserDetailPage() {
  const { email } = useParams();
  const [addresses, setAddresses] = useState([]);
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  
  // 유저의 상세 정보를 로드하여 user에 저장하고, 정보를 보여주세요.
  useEffect(()=>{
    const decodedEmail = decodeURIComponent(email)
    authAPI
        .getUser(decodedEmail)
        .then(setUser)
        .catch(e=>setError(e.message))
    
    authAPI
        .getUsers()
        .then(users=>users.map(user=>user.bitcoinAddress))
        .then(setAddresses)
        .catch(e=>setError(e.message))
  },[])
  
  
  const handleSubmit = (formData) => {
    const { address, amount } = formData;
    // address는 다른 유저의 주소입니다.
    // 비트코인을 다른 유저에게 전송하는 기능을 구현하세요.
    // 성공적으로 전송했으면 유저 목록 페이지로 이동하세요.
    console.log(address, amount)
    
    authAPI
        .transferBitcoin(user.bitcoinAddress,address,amount)
        .then(()=>history.push('/users'))
        .catch(e=>setError(e.message))
  };

  return (
    <PageLayout>
      <Navigation>
        <Link to="/users">유저 목록</Link>
      </Navigation>

      <h2>유저 상세정보</h2>

      {!user ? (
        <div>Loading...</div>
      ) : (
        <>
          <Bitcoin>
            <div>
              <strong className="title">Bitcoin Address</strong>
              <span className="content">{user.bitcoinAddress}</span>
            </div>

            <div>
              <strong className="title">Bitcoin Balance</strong>
              <span className="content">{user.bitcoinBalance} BTC</span>
            </div>
          </Bitcoin>

          <h3>비트코인 전송</h3>

          <TransferForm addresses={addresses} onSubmit={handleSubmit} />
          {error && <div>{error}</div>}
        </>
      )}
    </PageLayout>
  );
}

export default UserDetailPage;
