<template>
  <div class="likes-box">
    <input
      id="likeInput"
      type="checkbox"
      @change="handle"
    />
    <label for="likeInput">Только избранное</label>
  </div>
</template>

<script>
  export default {
    name: 'LikesBox',
    methods: {
      handle() {
        this.$emit('handle');
      },
    },
  };
</script>

<style>
  .likes-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0 4px;
  }
</style>
