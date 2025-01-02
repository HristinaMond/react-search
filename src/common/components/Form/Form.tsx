import React, {ReactNode, forwardRef, HTMLAttributes} from "react";

type FormProps = HTMLAttributes<HTMLFormElement>

export const Form = forwardRef<HTMLFormElement, FormProps>(({ children, onSubmit, ...props }, ref) => {


    return (
        <form
            ref={ref}
            onSubmit={onSubmit}
            style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '11px',
                marginBottom: '10px',
            }}
            {...props}
        >
            {children}
        </form>
    );
});
