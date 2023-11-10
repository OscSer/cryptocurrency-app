import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Template({ children }: Props) {
  return <main>{children}</main>;
}
