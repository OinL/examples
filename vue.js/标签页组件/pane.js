Vue.component('pane',{
    name:'pane',
    template:'\
    <div class="pane" v-show="show">\
        <slot></slot>\
    </div>',
    data:function(){
        return{
            show:true
        }
    },
    props:{
        name:{
            type:String
        },
        label:{
            type:String,
            default:''
        }
    },
    methods:{
        updateNav(){
            this.$parent.updateNav();    //取父级的数据
            //props 比较直接，就像是赋值，可以给我值就行了
            //$parent 更有作用域／父子级的概念，它要一层一层向上访问
        }
    },
    watch:{   //直接写一个监听处理函数，当每次监听到 值发生改变时，执行函数
        label(){
            this.updateNav();
        }
    },
    mounted(){
        this.updateNav();
    }
})
//钩子函数就是指再所有函数执行前，我先执行了的函数，即 钩住 我感兴趣的函数，只要它执行，我就先执行