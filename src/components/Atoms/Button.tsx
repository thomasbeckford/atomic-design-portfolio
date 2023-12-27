import classnames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rounded?: boolean;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Button(props: ButtonProps) {
  const {
    children,
    rounded,
    disabled,
    className,
    size = "md",
    type = "button",
    leftIcon,
    onClick,
  } = props;

  const defaultStyles = {
    button: `text-slate-900 font-bold border-2 border-gray-200 py-4 px-8 ${
      leftIcon ? "flex items-center gap-2" : ""
    }`,
    disabled: "opacity-50 cursor-not-allowed",
    rounded: "rounded-full",
  };

  const sizeStyles = {
    sm: "text-sm py-3 px-3",
    md: "text-base py-4 px-8",
    lg: "text-lg py-6 px-10",
  };

  const classProps: string = classnames(
    defaultStyles.button,
    { [sizeStyles[size]]: size },
    { [defaultStyles.rounded]: rounded },
    { [defaultStyles.disabled]: disabled },
    className
  );

  return (
    <button type={type} className={classProps} onClick={onClick}>
      <span className="flex items-center gap-2">{leftIcon}</span>
      {children}
    </button>
  );
}
