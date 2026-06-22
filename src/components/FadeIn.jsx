import { useEffect, useRef, useState } from "react";

function FadeIn({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default FadeIn;