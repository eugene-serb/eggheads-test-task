<template>
  <OverlayScreen
    :overlayEnabled="overlayEnabled" 
    @closeOverlay="closeOverlay"
  >
    <div class="table-settings-overlay__body-container">
      <h2>Колонки</h2>
      <div class="table-settings-overlay__checkbox-list">
        <div
          class="table-settings-overlay__checkbox-item"
          v-for="(column, index) in state"
          :key="column.id"
        >
          <input
            type="checkbox"
            :id="`checkbox-${column.id}`"
            :checked="column.hidden"
            @click="handleCheckbox(index)"
          />
          <label
            :for="`checkbox-${column.id}`"
            v-text="column.name"
          />
        </div>
      </div>
      <div class="table-settings-overlay__reset-container">
        <button
          class="table-settings-overlay__reset-button"
          @click="handleReset"
        >
          <span>Сбросить</span>
        </button>
      </div>
    </div>
  </OverlayScreen>
</template>

<script>
  /* eslint-disable no-undef */

  import OverlayScreen from '@/components/overlay-screen/OverlayScreen.vue';

  export default {
    name: 'TableSettings',
    components: {
      OverlayScreen,
    },
    props: {
      tableID: {
        type: String,
        required: true,
      },
      overlayEnabled: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        columns: {},
        state: [],
      };
    },
    methods: {
      init() {
        this.table = $$(this.tableID);
        this.getState();
      },
      getState() {
        this.columns = this.table.getColumns(true);

        this.state = this.columns.map((column) => {
          return {
            id: column.id,
            name: column.header[0].text,
            hidden: false,
          };
        });
      },
      setState() {
        this.table.refreshColumns(this.columns);
      },
      closeOverlay() {
        this.$emit('closeOverlay');
      },
      handleCheckbox(index) {
        const id = this.state[index].id;

        if (this.state[index].hidden) {
          this.table.showColumn(id);
        } else {
          this.table.hideColumn(id);
        }

        this.state[index].hidden = !this.state[index].hidden;
      },
      handleReset() {
        this.state.forEach((item) => {
          if (item.hidden) {
            item.hidden = false;
            this.table.showColumn(item.id);
          }

          const filter = this.table.getFilter(item.id);
          
          if (filter) {
            filter.value = '';
          }
        });

        this.$emit('resetTable');
      },
    },
    mounted() {
      setTimeout(() => {
        this.init();
      }, 1000);
    },
  };
</script>

<style>
  .table-settings-overlay__body-container {
    padding: 16px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
  }

  .table-settings-overlay__checkbox-list {
    margin: 32px 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px 0;
  }

  .table-settings-overlay__checkbox-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0 8px;
    font-size: 16px;
  }

  .table-settings-overlay__reset-container {
    margin: 32px 0 0 0;
    display: flex;
  }

  .table-settings-overlay__reset-button {
    width: 100px;
    height: 28px;
  }
</style>
