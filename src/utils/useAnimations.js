import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";

export function useAnimation(containerRef) {
    const q = gsap.utils.selector(containerRef);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animatables = gsap.utils.toArray('.animated');

        gsap.fromTo(animatables, {
            autoAlpha: 0,
        }, {
            autoAlpha: 1,
            scrollTrigger: {
                start: 'top 80%',
            }
        })

    }, [])
}