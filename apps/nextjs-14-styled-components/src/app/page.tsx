"use client";

import styled from "styled-components";

const MyStyledComponent = styled.div`
  background-color: red;
  height: 100px;
  width: 100px;
`;

export default function Home() {
  return <MyStyledComponent>Hello World</MyStyledComponent>;
}
