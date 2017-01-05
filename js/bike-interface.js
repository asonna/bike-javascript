var Bike = require('./../js/bike.js').bikeModule;

var displayManufacturer = function(serial, manufacturerData, image) {
  $('.showManufacturer').text(serial + " manufactured bike stolen in this area " + manufacturerData);
  $('.showImg').empty();
  $('.showImg').append('<img src="' + image + '">');
};

var displayBikes = function(location, manufacturer, bikeArray) {
  var i = '';
  // console.log(bikeArray);
  for(i=0; i< bikeArray.length; ++i) {
    $('.showBikes').append('<img src="' + bikeArray[i].large_img + '">');
    // console.log(bikeArray[i]);
  }
};

$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('.bikeSerialForm').submit(function(event) {
    // debugger;
    event.preventDefault();
    var serial = $('#serial').val();
    $('#serial').val();
    currentBikeObject.getManufacturer(serial, displayManufacturer);
  });
  $('.byLocationForm').submit(function(event) {
    event.preventDefault();
    var location = $('#locationInput').val();
    var manufacturer = $("#manufacturerInput").val();
    $("#locationInput").val();
    $("#manufacturerInput").val();
    currentBikeObject.getList(location, manufacturer, displayBikes);
  });
});
