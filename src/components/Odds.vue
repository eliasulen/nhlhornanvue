
<template>
  <v-card>
    <v-card-title>
      Odds
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
    :headers="headers"
        :items="items"
        :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.key }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
import ApiClient from '../api/index'

  export default {
  created: function(){
      this.getData()
  },
  methods: {
      getData: function(){
                        var vm = this;
                        ApiClient().get('Odds/2018-2019')
                        .then(function (data) {
                            vm.items = data;
                        }).catch(function (error) {
    console.log(error);
  });;                             

      }
  },
  data () {
    return {
      search: '',
      headers: [
      /*  {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },*/
        { text: 'Key', value: 'key' }
      ],
      items: []
    }
  }
  }
</script>