/* CSS */
import "@css/app.pcss";
import Swiper from 'swiper/bundle';
//import 'swiper/css' ;

/* JS */
import 'lazysizes';
import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import * as YTPlayer from 'yt-player';


/* SCRIPTS HERE */

console.log('dude?');

/**
 * Alpine JS
 * Best to put it last so that all other potential JS is available
 * when components start getting initialized.
 */
import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
if (typeof window.Alpine === "undefined") {
  window.Alpine = Alpine;
  Alpine.start();
  Alpine.plugin(collapse);
}

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept(() => {
	console.log("HMR")
  });
}

