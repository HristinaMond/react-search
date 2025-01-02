import React, {forwardRef, InputHTMLAttributes} from 'react';
import './style/Input.css';

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {...props}, ref
    ) => {

        return (
            <input
                ref={ref}
                autoComplete='off'
                {...props}
            />
        );
    });
