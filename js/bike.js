var apiKey = require('./../.env').apiKey;

function Bike() {

}

Bike.prototype.getManufacturer = function(serial, displayFunction){
  $.get('https://bikeindex.org:443/api/v3/search?serial=' + serial).then(function(response) {
    displayFunction(serial, response.bikes.manufacturer_name);
      console.log(response.bikes[0].manufacturer_name);
  }).fail(function(error) {
    $('.showManufacturer').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
