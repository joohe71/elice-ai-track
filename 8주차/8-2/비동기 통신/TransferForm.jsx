import React, { useRef } from "react";
import styled from "styled-components";

export default function TransferForm({ addresses, onSubmit }) {
  const addressRef = useRef();
  const amountRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const address = addressRef.current.value;
    const amount = Number(amountRef.current.value);

    const formData = {
      address,
      amount,
    };

    onSubmit(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="to-address">전송할 주소</label>
        <select ref={addressRef} id="to-address" name="to-address">
          {addresses.map((address) => (
            <option value={address}>{address}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="amount">금액</label>
        <input ref={amountRef} id="amount" type="number" name="amount" />
      </div>

      <div className="form-group">
        <input type="submit" value="전송" />
      </div>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  .form-group {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
  }

  label {
    width: 120px;
  }

  input,
  select {
    flex: 1;
  }
`;
