/**
 * Button properties
 */
export interface ButtonProps {
    /** the text of the button */
    children: string,
    /** size of the button */
    size?: 'small' | 'medium' | 'large',
    /** whether the button is full width */
    fullWidth?: boolean,
    /** whether the button is disabled */
    disabled?: boolean,
    /** the color of the button */
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'inherit',
    /** different main variant styles for the button */
    variant?: 'contained' | 'outlined' | 'text',
    /** the URL to link to when the button is clicked. if defined, an `a` element will
     * be used as the root node. */
    href?: string,
    /** click action handler */
    onClick?: () => void,
    /** allows us to reference the button in tests, without flake */
    dataTestId?: string
}
