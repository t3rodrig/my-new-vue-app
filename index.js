let app = new Vue({
    el: "#app",
    data: {
        message: "Hola Vue"
    }
});

let app2 = new Vue({
    el: "#app-2",
    data: {
        message: "Tú cargaste esta página el " + new Date().toLocaleString()
    }
});

let app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
});