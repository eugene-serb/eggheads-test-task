<template>
  <div class="likes-box">
    <input
      id="likeInput"
      type="checkbox"
      @change="handle"
      v-model="checked"
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
      LikesToReset: {
        type: Boolean,
        default: () => false,
      },
    },
    data() {
      return {
        checked: false,
      };
    },
    methods: {
      handle() {
        $$(this.tableID).filterByAll()
      },
    },
    watch: {
      LikesToReset(value) {
        if (value) {
          this.checked = false;
          this.$emit('likesBoxReloaded');
        }
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
