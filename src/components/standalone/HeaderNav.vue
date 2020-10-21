<template>
  <HeaderWrapper :isDark="isDark" :isTop="isTop" class="h-20">
    <nav
      class="flex justify-between items-center w-full h-full container mx-auto px-4"
    >
      <!-- Logo -->
      <flex-link to="/">
        <SDMLogoSVG
          class="w-24 transition-set"
          :class="{
            'text-white': isDark,
            'text-black': !isDark,
          }"
        />
      </flex-link>

      <!-- Menu -->
      <div
        class="flex items-center h-full transition-set"
        :class="{
          'text-gray-100': isDark,
          'text-gray-900': !isDark,
        }"
      >
        <!-- Link -->
        <flex-link
          v-for="item in linkItems"
          :key="item.title"
          class="mx-2 font-bold"
          :class="{
            'hover:text-blue-500': isDark,
            'hover:text-orange-500': !isDark,
          }"
          :to="item.link"
        >
          {{ item.title }}
        </flex-link>

        <!-- Locale Button -->
        <div
          @click="toggleLocale"
          class="mx-2 cursor-pointer"
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
          @click="emitToggleDark"
          class="ml-2 cursor-pointer"
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
  },
  components: {
    HeaderWrapper,
    SDMLogoSVG,
  },
};
</script>
