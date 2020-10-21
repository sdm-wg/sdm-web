<template>
  <HeaderWrapper
    :isDark="isDark"
    :isTop="isTop"
    class="md:max-h-20 overflow-hidden transition-all-set"
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
        <flex-link to="/">
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
          <font-awesome v-show="isOpen" :icon="['fas', 'times']" fixed-width />
          <font-awesome v-show="!isOpen" :icon="['fas', 'bars']" fixed-width />
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
          v-for="item in linkItems"
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

export default {
  name: "HeaderNav",
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
          title: "Member",
          link: "#member",
        },
        {
          title: "Publications",
          link: "#publications",
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
      const logoHeight = this.$refs.logo ? this.$refs.logo.clientHeight : 0;
      const menuHeight = this.$refs.menu ? this.$refs.menu.clientHeight : 0;
      const height = logoHeight + menuHeight;
      return this.isOpen && height > 0 ? `${height}px` : "5rem";
    },
    anotherLanguage: function () {
      if (this.$context.locale === "en-us") {
        return "ja";
      } else {
        return "en";
      }
    },
    anotherLocale: function () {
      if (this.$context.locale === "en-us") {
        return "ja-jp";
      } else {
        return "en-us";
      }
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
  },
  components: {
    HeaderWrapper,
    SDMLogoSVG,
  },
};
</script>
