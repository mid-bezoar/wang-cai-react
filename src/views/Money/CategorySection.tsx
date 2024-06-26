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

type Props = {
  value: "-" | "+";
  onChange: (value: "-" | "+") => void;
};

const CategorySection: React.FunctionComponent<Props> = (props) => {
  const categoryMap = { "-": "支出", "+": "收入" };
  type Keys = keyof typeof categoryMap;
  const [categoryList] = useState<Keys[]>(["-", "+"]);
  const active = props.value;

  return (
    <Wrapper>
      <ul>
        {categoryList.map((item) => (
          <li key={item} className={active === item ? "selected" : ""} onClick={() => props.onChange(item)}>
            {categoryMap[item]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export { CategorySection };
