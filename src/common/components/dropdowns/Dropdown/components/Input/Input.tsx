import { Input as CommonInput, InputProps as CommonInputProps } from '@common/components/inputs';
import React, { forwardRef } from 'react';

// Assuming CommonInputProps is already defined somewhere
type InputProps = CommonInputProps;

export const Input = forwardRef<HTMLInputElement, CommonInputProps>(({ ...props }, ref) => {

  return (
    <CommonInput
      ref={ref}
      id="searchInput"
      className="dropdown__search-input"
      placeholder="Search..."
      {...props}
    />
  );
});

