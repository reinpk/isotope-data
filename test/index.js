var expect = require('chai').expect;
var isotopeData = require('../');

describe('isotope data', function () {

  it('should all have a valid half-life', function () {
    Object.keys(isotopeData).forEach(function (isotopeName) {
      var isotope = isotopeData[isotopeName];
      expect(isotope.halflife).to.be.a('number');
      expect(isotope.halflife).to.be.greaterThan(0);
    });
  });

  it('should all have a valid product or products', function () {
    Object.keys(isotopeData).forEach(function (isotopeName) {
      var isotope = isotopeData[isotopeName];
      expect(isotope.product || isotope.products).to.be.ok;

      if (isotope.product) {
        expect(typeof isotope.product).to.equal('string');
      }
      else {
        expect(typeof isotope.products).to.equal('object');
        expect(isotope.products.length).to.be.greaterThan(1);
        isotope.products.forEach(function (product) {
          expect(product.fraction).to.be.a('number');
          expect(product.product).to.be.a('string');
        });
      }
    });
  });

  it('should all have a valid molar mass', function () {
    Object.keys(isotopeData).forEach(function (isotopeName) {
      var isotope = isotopeData[isotopeName];
      expect(isotope.molarMass).to.be.a('number');
      expect(isotope.molarMass).to.be.greaterThan(0);
      expect(isotope.molarMass).to.be.lessThan(1);

      // Values should also be close to the value in the name, like 239 in Pu-239 
      var roughBasedOnName = parseInt(isotopeName.split('-')[1], 10) / 1000;
      var error = (isotope.molarMass - roughBasedOnName) / roughBasedOnName;
      expect(error).to.be.lessThan(0.001);
    });
  });

});