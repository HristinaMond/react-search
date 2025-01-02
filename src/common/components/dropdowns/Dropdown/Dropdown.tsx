import './style/Dropdown.css';
import React, {forwardRef, HTMLAttributes} from "react";

type DropdownProps = HTMLAttributes<HTMLDivElement>

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(({ children }, ref) => {
  return (
      <div className="dropdown" ref={ref}>
        {children}
      </div>
  );
});

Dropdown.displayName = "Dropdown";
