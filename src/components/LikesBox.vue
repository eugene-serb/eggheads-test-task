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
  /* eslint-disable no-undef */

  export default {
    name: 'LikesBox',
    props: {
      tableID: {
        type: String,
        required: true,
      },
    },
    methods: {
      handle() {
        $$(this.tableID).filterByAll()
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
