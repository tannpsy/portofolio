import { useRef, useEffect, useState } from "react";

const RevealOnScroll = ({
  children,
  threshold = 0.1,
  transitionClass = "transition-all duration-1000 ease-out",
  initialClass = "opacity-0 translate-y-5",
  finalClass = "opacity-100 translate-y-0"
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${transitionClass} ${isVisible ? finalClass : initialClass}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
