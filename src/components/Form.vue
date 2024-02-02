<template>
  <div>
    <b-breadcrumb :items="item"></b-breadcrumb>
    <h3>Registro de vehiculos</h3>

    <b-form-group id="input-group-1" label="Marca:" label-for="input-1">
      <b-form-input
        id="input-1"
        v-model="Form.branch"
        type="text"
        required
      ></b-form-input>
      <b-form-invalid-feedback v-if="branch.length >= 1">
        {{ this.branch }}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group id="input-group-1" label="Modelo:" label-for="input-1">
      <b-form-input
        id="input-1"
        v-model="Form.model"
        type="text"
        required
      ></b-form-input>
      <b-form-invalid-feedback v-if="model.length >= 1">
        {{ model }}
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group
      id="input-group-1"
      label="Año de fabricacion"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="Form.year"
        type="text"
        required
      ></b-form-input>
      <b-form-invalid-feedback v-if="years.length >= 1">
        {{ this.years }}
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group
      id="input-group-1"
      label="Numero de serie"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="Form.serialNumber"
        type="text"
        required
      ></b-form-input>
      <b-form-invalid-feedback v-if="serialNumber.lench >= 1">
        {{ serialNumber }}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-button @click="Data()" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      item: [
        {
          text: "Registrar vehiculos",
          to: { name: "register" },
          active: true,
        },
        {
          text: "Vehiculos",
          to: { name: "vehicles" },
        },
      ],
      Form: {
        branch: "",
        model: "",
        year: 0,
        serialNumber: "",
      },
      year: 2024,
      errors: [],
      branch: "",
      model: "",
      years: "",
      serialNumber: "",
    };
  },
  methods: {
    Data() {
      if (this.validateYear()) {
        this.years =
          "El año de fabricacion no puede ser mayor o igual al año actual";
        console.log(this.years, "", this.years.length >= 1);
      }

      if (!this.validateModel()) {
        console.log("aqui esta aaaaa");
      }

      if(!this.validateSeria()){
        this.serialNumber='escriba un valor valido para los formularios'
      }
    },
    async Register() {},
    validateModel() {
      if (this.Form.model.length > 0) {
        console.log(this.Form.length,'length' );
        return true
      }
      return false
    },
    validateYear() {
      if (this.Form.year >= this.years) {
        return true;
      }
      return false;
    },
    validateSeria() {
      if(this.form.serialNumber > 0 ){
        console.log(this.form.serialNumber >0);
      }
    },
  },
};
</script>
  
  <style>
</style>