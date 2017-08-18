window.onload = function() {
    var vm = new Vue({
        el: '#app',
        data: {
            'page1': true,
            'page2': false,
        },
        methods: {
            toggle: function() {
                this.page1 = !this.page1;
                this.page2 = !this.page2;
            }
        }
    });
}
var box = document.querySelector('.countDown')
    // var box1 = document.querySelector('.mask')
box.addEventListener('webkitAnimationEnd', () => {
    document.getElementById("mask").style.display = "none";
    box.style.display = "none";
    // box.style.display = 'none';
    // box1.style.display = 'none';
    // var oName = box.className;
    // box.ClassName = `${noName boxOut }`;

}, false)