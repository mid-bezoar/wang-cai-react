import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background-color: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25), inset 0 5px 5px -5px rgb(0, 0, 0, 0.25);
  }
  > .pad {
    /* display: flex;
    flex-wrap: wrap; */
    > button {
      font-size: 18px;
      float: left;
      width: 20%;
      height: 64px;
      border: none;
      &.ok {
        height: 128px;
        float: right;
      }
      &:nth-child(1) {
        background-color: #e7e7e7;
      }
      &:nth-child(2),
      &:nth-child(6) {
        background-color: #e3e2e2;
      }
      &:nth-child(3),
      &:nth-child(7),
      &:nth-child(11) {
        background-color: #e0e0e0;
      }
      &:nth-child(4),
      &:nth-child(8),
      &:nth-child(12),
      &:nth-child(16) {
        background-color: #d3d3d3;
      }
      &:nth-child(5),
      &:nth-child(9),
      &:nth-child(13),
      &:nth-child(17) {
        background-color: #c1c1c1;
      }
      &:nth-child(10),
      &:nth-child(14),
      &:nth-child(18) {
        background-color: #b8b8b8;
      }
      &:nth-child(15) {
        background-color: #9a9a9a;
      }
      &:nth-child(19) {
        background-color: #a9a9a9;
      }
    }
  }
`;

type Props = {
  value: number;
  onChange: (value: number) => void;
  onOk?: () => void;
};

const NumberPadSection: React.FC<Props> = (props) => {
  const output = props.value.toString();

  const setOutput = (output: string) => {
    let value;
    if (output.length > 16) {
      value = parseFloat(output.slice(0, 16));
    } else if (output.length === 0) {
      value = 0;
    } else {
      value = parseFloat(output);
    }
    // _setOutput(output);
    props.onChange(value);
  };

  const buttons = [
    { number: 1, text: "1" },
    { number: 2, text: "2" },
    { number: 3, text: "3" },
    { text: "+" },
    { text: "删除" },
    { number: 4, text: "4" },
    { number: 5, text: "5" },
    { number: 6, text: "6" },
    { text: "-" },
    { text: "清空" },
    { number: 7, text: "7" },
    { number: 8, text: "8" },
    { number: 9, text: "9" },
    { text: "X" },
    { specialClass: "ok", text: "OK" },
    { specialClass: "zero", number: 0, text: "0" },
    { specialClass: "dot", text: "." },
    { text: "%" },
    { text: "/" }
  ];

  const onCLickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;

    const actions: { [key: string]: () => void } = {
      "0": () => handleNumberClick(text),
      "1": () => handleNumberClick(text),
      "2": () => handleNumberClick(text),
      "3": () => handleNumberClick(text),
      "4": () => handleNumberClick(text),
      "5": () => handleNumberClick(text),
      "6": () => handleNumberClick(text),
      "7": () => handleNumberClick(text),
      "8": () => handleNumberClick(text),
      "9": () => handleNumberClick(text),
      ".": handDotClick,
      删除: handleDelete,
      清空: handleClear
    };

    if (text === "OK") {
      props.onOk && props.onOk();
    }

    if (text in actions) {
      actions[text]();
    }
  };

  const handleNumberClick = (text: string) => {
    if (output === "0") {
      setOutput(text);
    } else {
      setOutput(output + text);
    }
  };

  const handDotClick = () => {
    if (output.indexOf(".") === -1) {
      setOutput(output + ".");
    }
  };

  const handleDelete = () => {
    if (output.length === 1) {
      setOutput("");
    } else {
      setOutput(output.slice(0, -1));
    }
  };

  const handleClear = () => {
    setOutput("");
  };
  return (
    <Wrapper>
      <div className='output'>{output}</div>
      <div className='pad clearfix' onClick={onCLickButtonWrapper}>
        {buttons.map(({ number, text, specialClass }, index) => (
          <button key={index} className={specialClass}>
            {text}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

export { NumberPadSection };
