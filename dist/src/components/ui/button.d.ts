import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const buttonVariants: (props?: ({
    variant?: "default" | "primary" | "outline" | "secondary" | "ghost" | "destructive" | "link" | null | undefined;
    size?: "default" | "xs" | "sm" | "md" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-md" | "icon-lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ButtonSize = "default" | "xs" | "sm" | "md" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-md" | "icon-lg";
interface ButtonProps extends React.ComponentProps<"button">, Omit<VariantProps<typeof buttonVariants>, "size"> {
    asChild?: boolean;
    /** Show a loading spinner and disable interaction */
    loading?: boolean;
    /** Icon to render on the left side of the label */
    iconLeft?: React.ReactNode;
    /** Icon to render on the right side of the label */
    iconRight?: React.ReactNode;
    /** Render as a square icon-only button (uses icon size variant) */
    iconOnly?: boolean;
    size?: ButtonSize;
}
declare function Button({ className, variant, size, asChild, loading, iconLeft, iconRight, iconOnly, children, disabled, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants };
