import React from "react";

import styled from "styled-components/native";
import { useThemeColor } from "@/hooks/useThemeColor";

type HeadingProps = {
  text: string;
};

export function Heading({ text }: HeadingProps) {
  const color = useThemeColor({}, "text");

  return <HeadingText style={{ color }}>{text}</HeadingText>;
}

const HeadingText = styled.Text`
  font-size: 24px;
`;
