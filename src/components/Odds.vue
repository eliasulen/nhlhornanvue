
<template>
   <v-card>
      <v-card-title>
        Odds
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        loading
      >
       <v-progress-linear slot="progress" color="blue" indeterminate v-show="isLoading"></v-progress-linear>
        <template slot="items" slot-scope="props">
          <td class="text-xs">{{ props.item.key }}</td>
          <td class="text-xs">{{ props.item.date }}</td>
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
      this.isLoading = true;
      this.getData()
  },
  methods: {
      getData: function(){
          var vm = this;
                        ApiClient().get('Odds')
                        .then(function (response) {
                            vm.items = response.data;
                            console.log('Fetched')
                        }).catch(function (error) {             
         console.log(error);
  });                             

      }
  },
  data () {
    return {
      search: '',
      headers: [
      { text: 'Key', value: 'key', sortable: false, searchable: false },
      { text: 'Date', value: 'date'}
      ],
      items: []
    }
  },
  mounted()
  {
      this.isLoading = false;
  }
  }
</script>