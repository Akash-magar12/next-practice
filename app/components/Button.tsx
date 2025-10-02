import React from "react";
interface ButtonProps {
  label: string;
}
const Button = ({ label }: ButtonProps) => {
  return <div>{label}</div>;
};

export default Button;
