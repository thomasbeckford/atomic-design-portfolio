import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function VanilaTilt(props: Props) {
  const { children, className } = props;
  const tilt = useRef(null);

  useEffect(() => {
    const VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(tilt.current, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  }, []);

  return (
    <div className={className} ref={tilt}>
      {children}
    </div>
  );
}
