import React, {forwardRef, InputHTMLAttributes} from 'react';
import './style/Input.css';

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {...props}, ref
    ) => {

        // Focus the input on page load
        React.useEffect(() => {
            if (ref && typeof ref !== 'function' && ref.current) {
                ref.current.focus();
            }
        }, [ref]);


        return (
            <input
                ref={ref}
                autoComplete='off'
                {...props}
            />
        );
    });
