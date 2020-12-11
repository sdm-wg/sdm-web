<template>
  <HeaderWrapper
    :isDark="isDark"
    :isTop="isTop"
    class="md:max-h-20 overflow-hidden transition-all-set"
    :class="{ 'bg-opacity-100 shadow': isOpen }"
    :style="{ height: navHeight }"
  >
    <nav
      class="flex flex-wrap justify-between w-full h-full container mx-auto px-4"
    >
      <!-- Logo -->
      <div
        ref="logo"
        class="flex items-center h-20 transition-set"
        :class="{
          'text-white': isDark,
          'text-black': !isDark,
        }"
      >
        <span
          v-if="isTopPage"
          @click="scrollTo(0, true)"
          class="cursor-pointer"
        >
          <SDMLogoSVG class="w-24" />
        </span>
        <flex-link v-else to="/">
          <SDMLogoSVG class="w-24" />
        </flex-link>
      </div>

      <div
        class="flex md:hidden items-center h-20 transition-set"
        :class="{
          'text-gray-100': isDark,
          'text-gray-900': !isDark,
        }"
      >
        <div
          @click="setIsOpen(!isOpen)"
          class="cursor-pointer"
          :class="{
            'hover:text-blue-500': isDark,
            'hover:text-orange-500': !isDark,
          }"
        >
          <font-awesome
            v-show="isOpen"
            :icon="['fas', 'times']"
            size="2x"
            fixed-width
          />
          <font-awesome
            v-show="!isOpen"
            :icon="['fas', 'bars']"
            size="2x"
            fixed-width
          />
        </div>
      </div>

      <!-- Menu -->
      <div
        ref="menu"
        class="block md:flex md:items-center w-full md:w-auto transition-set"
        :class="{
          'text-gray-100': isDark,
          'text-gray-900': !isDark,
        }"
      >
        <!-- Link -->
        <flex-link
          v-for="item in refLinkItems"
          :key="item.title"
          class="block md:inline-block md:mx-2 my-2 font-bold"
          :class="{
            'hover:text-blue-500': isDark,
            'hover:text-orange-500': !isDark,
          }"
          :to="item.link"
        >
          <span class="block" @click="setIsOpen(false)">{{ item.title }}</span>
        </flex-link>

        <!-- Locale Button -->
        <div
          @click="
            setIsOpen(false);
            toggleLocale();
          "
          class="md:mx-2 my-2 cursor-pointer"
          :class="{
            'hover:text-blue-500': isDark,
            'hover:text-orange-500': !isDark,
          }"
        >
          <font-awesome :icon="['fas', 'globe']" fixed-width />
          <span class="mx-1 font-bold">{{ anotherLanguage }}</span>
        </div>

        <!-- Dark Mode Button -->
        <div
          @click="
            setIsOpen(false);
            emitToggleDark();
          "
          class="md:ml-2 mt-2 mb-4 md:mb-2 cursor-pointer"
          :class="{
            'hover:text-orange-500': isDark,
            'hover:text-blue-500': !isDark,
          }"
        >
          <font-awesome v-show="isDark" :icon="['fas', 'sun']" fixed-width />
          <font-awesome v-show="!isDark" :icon="['fas', 'moon']" fixed-width />
        </div>
      </div>
    </nav>
  </HeaderWrapper>
</template>

<script>
import HeaderWrapper from "~/components/atoms/HeaderWrapper.vue";
import SDMLogoSVG from "~/components/atoms/SDMLogoSVG.vue";

import localeMixin from "~/mixins/locale.js";

import { rem2px } from "~/utils/unitConverter.js";

const path = require("path");

export default {
  name: "HeaderNav",
  mixins: [localeMixin],
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    isTop: {
      type: Boolean,
      required: true,
    },
  },
  data: () => {
    return {
      isOpen: false,
      linkItems: [
        {
          title: "About",
          link: "#about",
        },
        {
          title: "Events",
          link: "#events",
        },
        {
          title: "News",
          link: "#news",
        },
        {
          title: "Members",
          link: "#members",
        },
        {
          title: "Publications",
          link: "#publications",
        },
        {
          title: "OpenSources",
          link: "#content",
        },
        {
          title: "Contact",
          link: "#contact",
        },
      ],
    };
  },
  computed: {
    navHeight: function () {
      const logoHeight = rem2px(5);
      const menuHeight = this.$refs.menu ? this.$refs.menu.clientHeight : 0;
      const height = this.isOpen ? logoHeight + menuHeight : logoHeight;
      return `${height}px`;
    },
    isTopPage: function () {
      return (
        this.$route.path === "/" ||
        path.relative(`/${this.language}/`, this.$route.path) === ""
      );
    },
    refLinkItems: function () {
      if (this.isTopPage) {
        return this.linkItems;
      }
      return this.linkItems.map((linkItem) => {
        linkItem.link = `/${linkItem.link}`;
        return linkItem;
      });
    },
  },
  methods: {
    emitToggleDark: function () {
      this.$emit("receive-toggle-dark");
    },
    toggleLocale: function () {
      this.$router.push({
        path: this.$tp(this.$route.path, this.anotherLocale, true),
      });
    },
    setIsOpen: function (isOpen) {
      this.isOpen = isOpen;
    },
    scrollTo: function (top, isSmooth = false) {
      const options = isSmooth
        ? { top: top, behavior: "smooth" }
        : { top: top };
      window.scrollTo(options);
    },
    calcTop: function (hash) {
      const targetEl = document.querySelector(hash);
      const targetTop = targetEl.getBoundingClientRect().top;
      const offsetTop = window.pageYOffset;
      const headerCorrection = rem2px(6); // header: 5rem + padding-top: 1rem
      const top = targetTop + offsetTop - headerCorrection;
      return top;
    },
  },
  mounted: function () {
    let hash = this.$route.hash;
    const scrollTo = this.scrollTo;
    const calcTop = this.calcTop;

    if (hash) {
      setTimeout(() => {
        this.scrollTo(this.calcTop(hash));
      }, 0);
    }

    this.$el.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        hash = this.getAttribute("href");
        history.pushState(null, null, hash);

        scrollTo(calcTop(hash), true);
      });
    });
  },
  components: {
    HeaderWrapper,
    SDMLogoSVG,
  },
};
</script>
