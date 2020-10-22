---
title:
  ja: "{{ unslug name }}"
  en: "{{ unslug name }}"
slug: "{{ name }}"
summary:
  ja: ""
  en: ""
keywords:
  - ""
tags:
  - ""
date: "{{ format date 'YYYY-MM-DDTHH:mm:ss' }}"
archives:
  - "{{ format date 'YYYY' }}"
  - "{{ format date 'YYYY-MM' }}"
  - "{{ format date 'YYYY-MM-DD' }}"
image: ""
draft: true
---

<!-- 日本語記事ここから -->
<section lang="ja" v-if="$context.locale === 'ja-jp'">

# {{ unslug name }}

</section>
<!-- 日本語記事ここまで -->

<!-- English article start -->
<section lang="en" v-else>

# {{ unslug name }}

</section>
<!-- English article end -->
