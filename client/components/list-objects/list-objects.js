import axios from 'axios'

export default {
  name: 'ListObjects',
  data () {
    return {
      fields: {
        string: { label: 'String', sortable: true },
        number: { label: 'Number', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      objects: []
    }
  },
  created () {
    axios.get(`/api/sample-object`)
      .then(response => {
        this.objects = response.data
      })
      .catch(e => {
        console.log(e)
      })
  },
  methods: {
    details (obj) {
      this.$router.push({
        name: 'ShowObject',
        params: { id: obj._id }
      })
    },
    update (obj) {
      this.$router.push({
        name: 'ShowObject',
        params: { id: obj._id }
      })
    },
    remove (obj) {
      this.$router.push({
        name: 'ShowObject',
        params: { id: obj._id }
      })
    }
  }
}
