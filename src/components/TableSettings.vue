<template>
  <button
    class="table-settings-button"
    @click="openOverlay"
  >
    <img src="/assets/icons/settings_black_24dp.svg" />
    <span>Настройка таблицы</span>
  </button>

  <div
    class="table-settings-overlay"
    v-if="overlayEnabled"
    @click.self="closeOverlay"
  >
    <div class="table-settings-overlay__modal">
      <div class="table-settings-overlay__close-container">
        <img
          src="/assets/icons/close_black_24dp.svg"
          @click.stop="closeOverlay"
        />
      </div>
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
  </div>
</template>

<script>
  /* eslint-disable no-undef */

  export default {
    name: 'TableSettings',
    props: {
      tableID: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        columns: {},
        state: [],
        overlayEnabled: false,
      };
    },
    methods: {
      getState() {
        this.columns = $$(this.tableID).getColumns(true);

        this.state = this.columns.map((column) => {
          return {
            id: column.id,
            name: column.header[0].text,
            hidden: false,
          };
        });
      },
      setState() {
        $$(this.tableID).refreshColumns(this.columns);
      },
      openOverlay() {
        this.overlayEnabled = true;
      },
      closeOverlay() {
        this.overlayEnabled = false;
      },
      handleCheckbox(index) {
        const id = this.state[index].id;

        if (this.state[index].hidden) {
          $$(this.tableID).showColumn(id);
        } else {
          $$(this.tableID).hideColumn(id);
        }

        this.state[index].hidden = !this.state[index].hidden;
      },
      handleReset() {
        this.state.forEach((item) => {
          if (item.hidden) {
            item.hidden = false;
            $$(this.tableID).showColumn(item.id);
          }
        });
      },
    },
    mounted() {
      setTimeout(() => {
        this.getState();
      }, 1000);
    },
  };
</script>

<style>
  .table-settings-button {
    margin: 0 0 0 -20px;
    padding: 4px;
    width: 200px;
    height: 28px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 0 4px;
  }

    .table-settings-button > img {
      width: 16px;
      height: 16px;
    }

  .table-settings-overlay {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000BB;
  }

  .table-settings-overlay__modal {
    padding: 16px;
    margin: 0;
    width: 500px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #FFFFFF;
  }

  .table-settings-overlay__close-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

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
    margin: 16px 0 0 16px;
    display: flex;
  }

  .table-settings-overlay__reset-button {
    width: 100px;
    height: 28px;
  }
</style>
