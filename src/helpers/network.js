const API_URL = "https://swapi.co/";

export { API_URL };

const someObject = {
    property01: "string",
    property02: false,
    sayHello: function () {
        console.log("Hello");
    },
    nestedObject: {
        prop01: "string",
        prop: 123,
    },
};

console.log("someObject:", someObject);
someObject.sayHello()