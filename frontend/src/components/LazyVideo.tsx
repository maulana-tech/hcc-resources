import { useEffect, useRef, useState } from "react";

type LazyVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  poster?: string;
  rootMargin?: string;
};

export function LazyVideo({
  src,
  poster,
  rootMargin = "300px", // start loading 300px before it enters the screen
  ...rest
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  // set src + load ONLY when it's about to be visible
  useEffect(() => {
    const el = ref.current;
    if (el && inView && el.getAttribute("src") !== src) {
      el.src = src;
      el.load();
    }
  }, [inView, src]);

  return <video ref={ref} poster={poster} preload="none" {...rest} />;
}
