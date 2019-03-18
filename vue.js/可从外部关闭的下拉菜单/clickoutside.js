Vue.directive('clickoutside',{
    bind:function(el,binding,vnode){
        function documentHandler(e){
            //documentHandler 函数做了两个判断，第一个是
            //判断点击的区域是否是指令所在的元素内部，如果是，就跳出函数，不往下继续执行。
            if(el.contains(e.target)){
                return false;
            }
            //第二个判断的是当前的指令 v-clickoutside 有没有写表达式 在该自定义指令中 表达式应该
            //是一个函数 在过滤了内部元素后 点击外面任何区域应该执行用户表达式中的函数 所以
            //binding.value()就是用来 行当前上下文 methods 中指定 函数
            if(binding.expression){
                binding.value(e);
            }
        }
        el.__vueClickOutside__=documentHandler;
        document.addEventListener('click',documentHandler);
    },
    unbind:function(el,binding){
        document.removeEventListener('click',el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
});