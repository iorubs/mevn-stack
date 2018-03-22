<template>
  <b-row class="justify-content-md-center">
    <b-col cols="12" md="auto">
      <b-form @submit="onSubmit" v-if="show">
       <b-form-group id="exampleInputGroup1"
                     label="String:"
                     label-for="exampleInput1">
         <b-form-input id="exampleInput1"
                       type="text"
                       v-model="form.string"
                       required
                       placeholder="Enter string">
         </b-form-input>
       </b-form-group>
       <b-form-group id="exampleInputGroup2"
                     label="Number:"
                     label-for="exampleInput2">
         <b-form-input id="exampleInput2"
                       type="number"
                       v-model.number="form.number"
                       required
                       placeholder="Enter number">
         </b-form-input>
       </b-form-group>
       <b-button type="submit" variant="primary">Submit</b-button>
     </b-form>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CreateObject',
  data () {
    return {
      form: {
        string: '',
        number: null
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`api/sample-object/`, this.form)
        .then(response => {
          alert(JSON.stringify(response.data))
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
