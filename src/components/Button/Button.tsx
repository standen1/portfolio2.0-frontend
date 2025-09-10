import React, { forwardRef } from "react";
import { ButtonProps } from "./ButtonProps";
import styles from "./Button.module.css";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, onClick, isActive }, ref) => {

  return (
    <button onClick={onClick} ref={ref} className={`${styles.Button} ${isActive ? styles.ButtonActive : ''}`}>
      {children}
    </button>
  );
});

Button.displayName = 'Button'; // For better debugging in React DevTools

export default Button;
