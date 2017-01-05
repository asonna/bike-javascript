var Bike = require('./../js/bike.js').bikeModule;

var displayManufacturer = function(serial, manufacturerData) {
  $('.showManufacturer').text(serial + " matches bike from " + manufacturerData + " manufacturer.");
};

$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('.bikeSerialForm').submit(function(event) {
    event.preventDefault();
    var serial = $('#serial').val();
    $('#serial').val();
    currentBikeObject.getManufacturer(serial, displayManufacturer);
  });
});
