// import: Smooth Scroll behavior polyfill
import smoothscroll from "smoothscroll-polyfill";

// import: Tailwind CSS
import "~/assets/css/tailwind.css";

// import: Prism
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

// import: Font Awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSun as fasSun,
  faMoon as fasMoon,
  faGlobe as fasGlobe,
  faBars as fasBars,
  faTimes as fasTimes,
} from "@fortawesome/free-solid-svg-icons";
// import {} from "@fortawesome/free-regular-svg-icons";
// import {} from "@fortawesome/free-brands-svg-icons";

import FlexLink from "~/components/atoms/FlexLink.vue";
import DefaultLayout from "~/layouts/Default.vue";

// Smooth Scroll behavior polyfill setting
if (process.browser) {
  smoothscroll.polyfill();
}

// Font Awesome setting
library.add(fasSun, fasMoon, fasGlobe, fasBars, fasTimes);

export default function (Vue) {
  Vue.component("flex-link", FlexLink);
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);
}
