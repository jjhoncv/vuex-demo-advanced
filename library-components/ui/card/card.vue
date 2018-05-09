<template>
  <div :style="css.card">
    <div :style="css['card-header']">
      <span>{{ title }}</span>
      <button></button>
    </div>
    <div :style="css['card-main']">
      <p>{{ description }}</p>
    </div>
  </div>
</template>
<script>
import { cssCard } from "./../../theme/index";

export default {
  data() {
    return {
      css: cssCard
    };
  },
  created() {
    this.css = this.cssCard || cssCard;
  },
  name: "Card",
  props: {
    title: String,
    description: String,
    cssCard: Object
  }
};
</script>