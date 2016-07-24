// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.driver.get('http://localhost:8080');

    expect(browser.driver.getTitle()).toEqual('Attributions');
  });

  it('should have a canvas image', function() {
    browser.driver.sleep(2000);
    expect(browser.driver.executeScript(function(browser) {
      var callback = arguments[arguments.length - 1];
      var canvas = document.getElementsByTagName('canvas')[0];
      var data = canvas.getContext('2d').getImageData(0,0,canvas.width,canvas.height).data;
      var isData = false;
      return data.length > 0 && data[4] > 0;
    })).toBeTruthy();
  })
});
