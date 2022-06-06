const app = Vue.createApp({
    data(){
        return{
            id:1,
            name:"Aung Kaung",
            age : 27,
            profile:"images/profile.webp",
            para:`<span style="color:red">This is text.</span>`,
            seen:true,
            mark:30,
            students : [
                {name:"mg mg",age:15,gender:"male"},
                {name:"su su",age:17,gender:"female"},
                {name:"ko ko",age:20,gender:"male"}

            ],
            username:"",
            money: 150.12345,

        }
    },
    methods:{
        reverse(){
            this.name = this.name.split('').reverse().join('')
        },
    },
    computed:{
        girls(){
            return this.students.filter(row=>row.gender == "female")
        },
        boys(){
            return this.students.filter(row=>row.gender == "male")
        },
    },
    filter:{
        currencydecimal(value){
            return value.toFixed(2);
        }
    }
})