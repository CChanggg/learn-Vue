let Nav = Vue.extend({
    template: '#page-nav'
})
let Header = Vue.extend({
    template: '#page-header',
    components: {
        'page-nav': Nav
    }
})
let Play = Vue.extend({
    template: '#page-play'
})
let Detail = Vue.extend({
    template: '#page-detail'
})
let Playing = Vue.extend({
    template: '#page-playing'
})
let page = new Vue({
    el: '#app',
    components: {
        'page-header': Header,
        'page-play': Play,
        'page-detail': Detail,
        'page-playing': Playing
    }
})