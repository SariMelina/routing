<template>
    <div>
        <h3>Información del Usuario</h3>
        <div>
            <p><strong>Nombre:</strong> {{ nombre }}</p>
            <p><strong>Email:</strong> {{ email }}</p>
        </div>
        <button class="btn btn-primary"
        @click="volver()">Volver</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nombre : '',
            email: ''
        }
    }, 
    /* watch : {
        $route() {
            let id = this.$route.params.id
            this.$http.get('https://jsonplaceholder.typicode.com/users/'+id)
            .then(resp => {
                return resp.json()
            }).then(user => {
                this.nombre = user.name,
                this.email = user.email
            })
        }
    }, */
    created () {
        let id = this.$route.params.id
        this.$http.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then(resp => {
            return resp.json()
        }).then(user => {
            this.nombre = user.name,
            this.email = user.email
        })
    },
    methods: {
        volver () {
            this.$router.push('/users')
        }
    }
}
</script>