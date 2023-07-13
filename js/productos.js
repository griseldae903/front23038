const{createApp} = Vue;

createApp({
    data(){
        return{
            productos:[],
            //url:'http://127.0.0.1:5000/productos',  
            url: 'https://grisseldess.pythonanywhere.com/productos',
            //url:'https://diegosorribas.pythonanywhere.com/productos',
            cargando: true,
            error: false, //por si falla la carga del servidor, inicializo en false

        }
    },

    methods:{
        fetchApi(url){
            fetch(url)
            .then(res => res.json()
            .then(data =>{
                this.productos=data;
                this.cargando=false;
            })
            .catch(err=>{
                console.error(err);
                this.error= true;
            }))
        },  //metodo eliminar, o para consulto la api

        eliminar(id){
            const url= this.url+"/"+id
            let options ={
                method: 'DELETE'
            }
            fetch(url, options)
            .then(res=> res.json())
            .then(data =>{
                location.reload();
            })
            .catch(err=> console.error(err))
        }
    },

    created(){
        this.fetchApi(this.url);

    }
}).mount('#app')