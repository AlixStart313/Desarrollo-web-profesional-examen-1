<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <h1>vehiculos</h1>
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
        <b-button
          size="sm"
          @click="info(row.item, row.index, $event.target)"
          class="mr-1"
        >
          Info modal
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? "Hide" : "Show" }} Details
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </b-card>
      </template>
    </b-table>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Registrar vehiculos",
          to: { name: "register" },
        },
        {
          text: "Vehiculos",
          to: { name: "vehicles" },
          active: true,
        },
      ],
      Form: {
        branch: "",
        model: "",
        year: 2024,
        serialNumber: "",
      },
      year: 2024,
      errors: [],
      branch: "",
      model: "",
      year: "",
      serialNumber: "",
    };
  },
  methods: {
    Data() {
      console.log(this.Form);
    },
    async Register() {},
  },
};
</script>
  <style>
</style>