import './style/Dropdown.css';
import React, { forwardRef } from "react";

type DropdownProps = {
  children?:string | React.ReactNode;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(({ children }, ref) => {
  return (
      <div className="dropdown" ref={ref}>
        {children}
      </div>
  );
});

Dropdown.displayName = "Dropdown";
