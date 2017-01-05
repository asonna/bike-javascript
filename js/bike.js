
function Bike() {

}

Bike.prototype.getManufacturer = function(serial, displayFunction){
  // debugger;
  $.get('https://bikeindex.org:443/api/v3/search?serial=' + serial).then(function(response) {
    displayFunction(serial, response.bikes[0].manufacturer_name, response.bikes[0].large_img);
  }).fail(function(error) {
    $('.showManufacturer').text(error.responseJSON.message);
    $('.showImg').append(error.responseJSON.message);
  });
};

Bike.prototype.getList = function(location, manufacturer, displayFunction) {
  // debugger;
  $.get('https://bikeindex.org:443/api/v3/search?manufacturer=' + manufacturer + '&location=' + location + '&stolenness=proximity').then(function(response) {
    displayFunction(location, manufacturer, response.bikes);
    // console.log(response.bikes);
  }).fail(function(error) {
    $('.showBikes').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
