import {Icon, IconProps} from "@common/components";

type CloseIconProps = IconProps;

export const CloseIcon = ({ ...props }: CloseIconProps) => {
    return (
        <Icon
            {...props}
        >
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="currentColor">
                <path
                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
        </Icon>
    )
}