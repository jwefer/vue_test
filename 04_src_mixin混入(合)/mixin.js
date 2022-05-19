// 分别暴露
export const hunhe = {
    methods: {
        showName() {
            alert(this.name);
        },
    },
    data() {
        return {
            x: 100,
            y: 200
        }
    },

};
export const hunhe2 = {
    mounted() {
        console.log('你好啊！');
    }
}