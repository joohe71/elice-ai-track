import styled from "styled-components";
import { colors } from "../../style/colors";

export const Bitcoin = styled.div`
  padding: 6px 0;

  & > div + div {
    margin-top: 4px;
  }

  .title {
    display: inline-block;
    font-size: 0.9rem;
    color: ${colors.pink5};
    width: 120px;
  }

  .content {
    color: ${colors.pink9};
    font-size: 0.8rem;
  }
`;
