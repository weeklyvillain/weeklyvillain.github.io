import { useEffect, useRef, useState } from "react";

import './FadeInSection.css';

type FadeInSectionProps = {
    children: React.ReactNode;
}

export const FadeInSection = (props: FadeInSectionProps): JSX.Element => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const current = domRef.current;

        if (!current) return;


        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {props.children}
      </div>
    );
  }