<template>
  <b-row class="justify-content-md-center">
    <b-col cols="12" md="auto">
      <h2>
        Object Details
      </h2>
      <b-jumbotron>
        <template slot="lead">
          String: {{obj.string}} <br />
          Number: {{obj.number}} <br />
          ID: {{obj._id}}
        </template>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ShowObject',
  data () {
    return {
      obj: []
    }
  },
  created () {
    axios.get(`api/sample-object/` + this.$route.params.id)
      .then(response => {
        this.obj = response.data
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>
