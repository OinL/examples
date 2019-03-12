var app = new Vue({
    el: '#app',
    data: {
        flag: true,
        list: [
            {
                id: 1,
                name: 'iPhone 7',
                price: 6888,
                count: 1,
                isSelect: true
            },
            {
                id: 2,
                name: 'iPhone 8',
                price: 8888,
                count: 1,
                isSelect: true
            },
            {
                id: 3,
                name: 'iPhone X',
                price: 12888,
                count: 1,
                isSelect: true
            }
        ]
    },
    computed: {
        totalPrice() {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].isSelect) {
                    var item = this.list[i];
                    total += item.price * item.count;
                }
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
            //把返回数字带上千位符
        }
    },
    methods: {
        handleReduce(index) {
            if (this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd(index) {
            this.list[index].count++;
        },
        handleRemove(index) {
            this.list.splice(index, 1);
        },
        selectAll(checked) {
            if (checked == true) {
                for (var i = 0; i < this.list.length; i++) {
                    this.list[i].isSelect = "true"
                }
            }
            if(checked == false) {
                for (var i = 0; i < this.list.length; i++) {
                    this.list[i].isSelect = "false"
                }
            }
        }
    }
})