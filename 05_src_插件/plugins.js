export default {
    install(Vue) {
        // 定义全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4);
        })
        // 定义全局指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时
            bind(element, binding) {
                // 定义指令时，this指向window
                console.log(element, binding, this);
                element.value = binding.value;
            },
            // 当被绑定的元素插入到 DOM 中时
            inserted(element) {
                element.focus();
            },
            // 指令所在的模板被重新解析时
            update(element, binding) {
                element.value = binding.value;
                // element.focus();
            }
        })
        // 定义全局混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 100
                }
            }
        })
        // 在Vue原型上添加方法
        Vue.prototype.hello = () => {
            alert('hello')
        }
    }
}