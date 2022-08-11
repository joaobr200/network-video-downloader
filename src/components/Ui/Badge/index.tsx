import { ReactNode } from "react";

import { BadgeBlock } from "./styles";

interface BadgeProps {
  children: ReactNode;
  bg?: "blue" | "red";
}

const Badge = ({ children, bg }: BadgeProps) => {
  return <BadgeBlock bg={bg}>{children}</BadgeBlock>;
};

export default Badge;
