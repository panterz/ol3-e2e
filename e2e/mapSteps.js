var chai = require('chai');

//https://github.com/domenic/chai-as-promised/
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

var mapSteps = function() {

	this.Given(/^a page with map$/, function (callback) {
		browser.driver.get('http://localhost:8080');

    expect(browser.driver.getTitle()).to.eventually.equal('Attributions');
	  callback();
	});

  this.Then(/^the map should contain data$/, function(callback){
		browser.driver.sleep(2000);
    browser.driver.executeScript(function(browser) {
      var canvas = document.getElementsByTagName('canvas')[0];
      var data = canvas.getContext('2d').getImageData(0,0,canvas.width,canvas.height).data;
      return data.length > 0 && data[4] > 0;
		}).then(function(data){
			expect(data).to.equal(true);
			callback();
		})
		//browser.pause();
  });



};

module.exports = mapSteps;
