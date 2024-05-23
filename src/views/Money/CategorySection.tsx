import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background-color: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        background-color: #333;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
      }
    }
  }
`;

const CategorySection: React.FunctionComponent = () => {
  const [categoryList] = useState(["-", "+"]);
  const [active, setActive] = useState("-");
  const categoryMap = { "-": "支出", "+": "收入" };

  return (
    <Wrapper>
      <ul>
        {categoryList.map((item) => (
          <li className={active === item ? "selected" : ""} onClick={() => setActive(item)}>
            {categoryMap[item]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export { CategorySection };
