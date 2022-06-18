import React from 'react';
import { Button as CustomButton } from '@mui/material';
import { ButtonProps } from './interface';

/**
 * Our main button component. See:
 *
 * https://mui.com/material-ui/react-button/
 *
 * https://mui.com/material-ui/api/button/
 */
export const Button: React.FunctionComponent<ButtonProps> = props => {
  const {
    children,
    size = 'medium',
    fullWidth = false,
    disabled = false,
    color = 'primary',
    variant = 'contained',
    href,
    onClick,
    dataTestId
  } = props;
  return (
    <CustomButton
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      color={color}
      variant={variant}
      href={href}
      onClick={onClick}
      data-testid={dataTestId}
  >
    {children}
  </CustomButton>
  );
}


// const Button = ({
//   children,
//   size = 'medium',
//   fullWidth = false,
//   disabled = false,
//   color = 'primary',
//   variant = 'contained',
//   href,
//   onClick,
//   dataTestId
// }: ButtonProps) => (
//   <CustomButton
//     size={size}
//     fullWidth={fullWidth}
//     disabled={disabled}
//     color={color}
//     variant={variant}
//     href={href}
//     onClick={onClick}
//     data-testid={dataTestId}
//   >
//     {children}
//   </CustomButton>
// );

// export default Button;
