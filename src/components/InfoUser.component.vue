<template>
    <div>
        <h3>Información del Usuario</h3>
        <div>
            <p><strong>Nombre:</strong> {{ nombre }}</p>
            <p><strong>Email:</strong> {{ email }}</p>
        </div>
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
    created () {
        let id = this.$route.params.id
        this.$http.get('https://jsonplaceholder.typicode.com/users'+id)
        .then(resp => {
            return resp.json()
        }).then(user => {
            this.nombre = user.name,
            this.email = user.email
        })
    }
}
</script>