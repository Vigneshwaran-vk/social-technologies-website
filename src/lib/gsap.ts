import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

let pluginsRegistered = false;

/**
 * Ensures GSAP plugins (ScrollTrigger, SplitText) are registered exactly once
 * safely on the client side.
 */
export function registerGsapPlugins() {
  if (typeof window !== "undefined" && !pluginsRegistered) {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    pluginsRegistered = true;
  }
}

// Automatically register if imported on client
if (typeof window !== "undefined") {
  registerGsapPlugins();
}

export { gsap, ScrollTrigger, SplitText };
