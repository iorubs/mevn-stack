<template>
  <b-row class="justify-content-md-center">
    <b-col cols="12" md="auto">

      <div v-if="objects.length != 0">
        <h2>List Objects</h2>

        <b-table striped hover :items="objects" :fields="fields">
          <template slot="actions" slot-scope="row">
            <b-button-group>
             <b-button variant="info" @click="details(row.item)">Details</b-button>
             <b-button variant="primary" @click="update(row.item)">Update</b-button>
             <b-button variant="danger" @click="remove(row.item)">Remove</b-button>
           </b-button-group>
          </template>
        </b-table>
      </div>

      <div v-else>
        <h2>No Objects Found :(</h2>

        <b-button variant="primary" href="#/create">Create new Object</b-button>
      </div>

    </b-col>
  </b-row>
</template>

<script src="./list-objects.js" />

<style scoped lang="scss">

</style>
