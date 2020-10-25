<template>
  <SectionWrapper :isDark="isDark" :isEven="isEven" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("contact.heading") }}</template>

    <div class="flex flex-wrap w-full p-4">
      <div class="w-full md:w-1/2">
        <!-- Address -->
        <div class="p-2">
          <h3
            class="font-bold text-base sm:text-lg transition-set"
            :class="{
              'text-gray-100': isDark,
              'text-gray-900': !isDark,
            }"
          >
            {{ $t("contact.address.heading") }}
          </h3>
          <p
            class="text-base transition-set"
            :class="{
              'text-gray-300': isDark,
              'text-gray-700': !isDark,
            }"
          >
            {{ $t("contact.address.content") }}
            (
            <flex-link
              class="underline"
              :class="{
                'hover:text-blue-500': isDark,
                'hover:text-orange-500': !isDark,
              }"
              to="https://www.i.u-tokyo.ac.jp/map/index.shtml"
            >
              Map
            </flex-link>
            )
          </p>
        </div>

        <!-- Contact -->
        <div class="p-2">
          <h3
            class="font-bold text-base sm:text-lg transition-set"
            :class="{
              'text-gray-100': isDark,
              'text-gray-900': !isDark,
            }"
          >
            {{ $t("contact.contact.heading") }}
          </h3>
          <p
            class="text-base transition-set"
            :class="{
              'text-gray-300': isDark,
              'text-gray-700': !isDark,
            }"
          >
            {{ $t("contact.contact.content") }}
            <a
              href="mailto:sdm-wg-request@wide.ad.jp"
              class="underline"
              :class="{
                'hover:text-blue-500': isDark,
                'hover:text-orange-500': !isDark,
              }"
            >
              sdm-wg-request@wide.ad.jp
            </a>
          </p>
        </div>
      </div>

      <!-- Google Map -->
      <div class="w-full md:w-1/2">
        <div class="h-64 sm:h-128 p-2">
          <iframe
            frameborder="0"
            class="w-full h-full b-0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCx3d07zxHPLvkFBLlAR3Ng8a9wsAsGoJ8&amp;q=place_id:ChIJo24g-i-MGGARlboTg0kH5DA"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script>
import SectionWrapper from "~/components/helpers/SectionWrapper.vue";

export default {
  name: "ContactSection",
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    isEven: {
      type: Boolean,
      required: false,
      default: false,
    },
    sectionId: {
      type: String,
      required: true,
    },
  },
  components: {
    SectionWrapper,
  },
};
</script>
