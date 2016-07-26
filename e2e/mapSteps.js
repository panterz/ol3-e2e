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
    expect(browser.driver.executeScript(function(browser) {
      var canvas = document.getElementsByTagName('canvas')[0];
      var data = canvas.getContext('2d').getImageData(0,0,canvas.width,canvas.height).data;
			console.log(data)
			console.log(data.length > 0)
			console.log(data[4] > 0)
			console.log(data.length > 0 && data[4] > 0)
      return data.length > 0 && data[4] > 0;
			//expect(data[4]).to.be.above(0);
			//console.log('xxxxxxxx')
			//callback();
		})).to.eventually.equal(true);
		//browser.pause();
  });



};

module.exports = mapSteps;
