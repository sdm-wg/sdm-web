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
  faMusic as fasMusic,
  faMapMarkerAlt as fasMapMarkerAlt,
  faCloud as fasCloud,
  faCalendarAlt as fasCalendarAlt,
  faCalendarCheck as fasCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
// import {} from "@fortawesome/free-regular-svg-icons";
// import {} from "@fortawesome/free-brands-svg-icons";

// import: Vuex
import store from "~/store/index";

// import: Global Components
import FlexLink from "~/components/atoms/FlexLink.vue";
import DefaultLayout from "~/layouts/Default.vue";

// Smooth Scroll behavior polyfill setting
if (process.browser) {
  smoothscroll.polyfill();
}

// Font Awesome setting
library.add(
  fasSun,
  fasMoon,
  fasGlobe,
  fasBars,
  fasTimes,
  fasMusic,
  fasMapMarkerAlt,
  fasCloud,
  fasCalendarAlt,
  fasCalendarCheck
);

export default function (Vue, { appOptions }) {
  Vue.component("flex-link", FlexLink);
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);

  // Vuex setting
  appOptions.store = store;

  // Locales setting
  const locales = ["en-us", "ja-jp"];
  for (const locale of locales) {
    appOptions.i18n.setLocaleMessage(
      locale,
      require(`~/locales/${locale}.json`)
    );
  }
}
