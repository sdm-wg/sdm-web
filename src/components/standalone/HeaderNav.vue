<template>
  <HeaderWrapper :isDark="isDark" :isTop="isTop" class="h-20">
    <nav
      class="flex justify-between items-center w-full h-full container mx-auto px-1"
    >
      <!-- Logo -->
      <SDMLogoSVG
        class="w-24 transition-set"
        :class="{
          'text-white': isDark,
          'text-black': !isDark,
        }"
      />

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
          :key="item"
          class="mx-2 font-bold"
          :class="{
            'hover:text-blue-500': isDark,
            'hover:text-orange-500': !isDark,
          }"
          :to="item.link"
        >
          {{ item.title }}
        </flex-link>
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
  components: {
    HeaderWrapper,
    SDMLogoSVG,
  },
};
</script>
