import React, { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

const NoteSection: React.FunctionComponent = (props) => {
  const [note, setNote] = useState<string>("");
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value);
    }
  };

  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input ref={refInput} type='text' placeholder='备注' defaultValue={note} onBlur={onBlur} />
      </label>
    </Wrapper>
  );
};

export { NoteSection };
