import classnames from "classnames";

type TextProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "title";
  className?: string;
  style?: React.CSSProperties;
};

export default function Text(props: TextProps) {
  const { children, className, size = "md", style } = props;

  const defaultStyles = {
    text: "text-white font-light",
  };

  const sizeStyles = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    title: "text-3xl",
  };

  const classProps: string = classnames(
    defaultStyles.text,
    { [sizeStyles[size]]: size },
    className
  );

  return (
    <div className={classProps} style={style}>
      {children}
    </div>
  );
}
