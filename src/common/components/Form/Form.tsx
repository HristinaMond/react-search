import React, { ReactNode, forwardRef } from "react";

type FormProps = {
    children?: ReactNode;
    onSubmit?: (e: React.FormEvent) => void;
};

export const Form = forwardRef<HTMLFormElement, FormProps>(({ children, onSubmit }, ref) => {

    const onSubmitHandler = (e: React.FormEvent) => {
      //  e.preventDefault();
        if (onSubmit) {
            onSubmit(e);  // Trigger the provided submit function
        }
    };


    return (
        <form
            ref={ref} // This connects the ref to the form element
            onSubmit={onSubmitHandler}
            style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '11px',
                marginBottom: '10px',
            }}
        >
            {children}
        </form>
    );
});
