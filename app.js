Vue.component('device', {
    template: '#device-template',
    props: ['id', 'x', 'y', 'state', 'count', 'time_left']
});

Vue.component('device-group', {
    template: '#group-template',
    props: ['id', 'x', 'y', 'amount']
});

var vm = new Vue({
    el: '#app',

    data: {
        device_list: [{ // enten skal count/time_left være string eller int. String er bedst, da det er nemmere at arbejde med, når der ikke er nogen værdi.
            id: 1,
            x: 40,
            y: 40,
            state: 'on', // green
            count: 80,
            time_left: 872
        }, {
            id: 2,
            x: 80,
            y: 40,
            state: 'offline', // red
            count: 20,
            time_left: 23
        }, {
            id: 3,
            x: 120,
            y: 40,
            state: 'new', // dark
            count: 100,
            time_left: 1
        }, {
            id: 4,
            x: 40,
            y: 80,
            state: 'offline',
            count: 55,
            time_left: ''
        }, {
            id: 238,
            x: 80,
            y: 80,
            state: 'new',
            count: 100,
            time_left: 872
        }, {
            id: 6,
            x: 120,
            y: 80,
            state: 'on',
            count: 30,
            time_left: ''
        }, {
            id: 238,
            x: 40,
            y: 120,
            state: 'new',
            count: 100,
            time_left: 872
        }, {
            id: 4,
            x: 80,
            y: 120,
            state: 'offline',
            count: 55,
            time_left: ''
        }, {
            id: 238,
            x: 120,
            y: 120,
            state: 'new',
            count: 100,
            time_left: 872
        }, {
            id: 6,
            x: 100,
            y: 300,
            state: 'on',
            count: 30,
            time_left: ''
        }]
    }
});