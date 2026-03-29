import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={ref} className="reveal w-full flex justify-center max-w-5xl">
      {children}
    </div>
  );
};
