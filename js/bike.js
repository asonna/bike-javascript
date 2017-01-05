
function Bike() {

}

Bike.prototype.getManufacturer = function(serial, displayFunction){
  $.get('https://bikeindex.org:443/api/v3/search?serial=' + serial).then(function(response) {
    displayFunction(serial, response.bikes[0].manufacturer_name, response.bikes[0].large_img);
    console.log(response.bikes);
  }).fail(function(error) {
    $('.showManufacturer').text(error.responseJSON.message);
    $('.showImg').append(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
