<template>
    <div>
        <p>Lista de usuarios</p>
        <ul class="list-group">
            <span>ID: {{ id }}</span>
            <li class="list-group-item"
            v-for="(user, index) in users" :key="index">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
      return {
          users : {},
          id : this.$route.params.id
      } 
    },
   created () {
       this.$http.get('https://jsonplaceholder.typicode.com/users')
       .then(resp => {
           return resp.json()
       }).then(users => {
           this.users = users
       })
   }
}
</script>