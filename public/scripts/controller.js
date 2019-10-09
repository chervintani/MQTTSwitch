$('#game').click(function () {
  $('body').toggleClass('night');
});

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
client.subscribe("chervz/device/status")
client.on("connect", function () {
  console.log("Successfully connected");
})
$('#on').on("click", function () {
  client.publish("chervz/device/status", "Turned on: " + moment().format('MMMM Do YYYY, h:mm:ss a'));
  client.on("message", function (topic, payload) {
    console.log([topic, payload].join(": "));
  })

})

$('#off').on("click", function () {
  client.publish("chervz/device/status", "Turned off: " + moment().format('MMMM Do YYYY, h:mm:ss a'));
  // client.end();
})

