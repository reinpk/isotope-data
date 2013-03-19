describe('isotope data', function () {

  var isotopeData = require('isotope-data'),
      _           = require('component-underscore');

  it('should all have a valid half-life', function () {
    _.each(_.keys(isotopeData), function (isotopeName) {
      var isotope = isotopeData[isotopeName];
      expect(isotope).to.have.key('halflife');
      expect(isotope.halflife).to.be.greaterThan(0);
    });
  });

  it('should all have a valid product or products', function () {
    _.each(_.keys(isotopeData), function (isotopeName) {
      var isotope = isotopeData[isotopeName];
      expect(isotope.product || isotope.products).to.be.ok();

      if (isotope.product) {
        expect(typeof isotope.product).to.equal('string');
      }
      else {
        expect(typeof isotope.products).to.equal('object');
        expect(isotope.products.length).to.be.greaterThan(1);
        _.each(isotope.products, function (product) {
          expect(product).to.have.key('fraction');
          expect(typeof product.fraction).to.equal('number');
          expect(product).to.have.key('product');
          expect(typeof product.product).to.equal('string');
        });
      }
    });
  });

  it('should all have a valid molar mass', function () {
    _.each(_.keys(isotopeData), function (isotopeName) {

      console.log(isotopeName);

      var isotope = isotopeData[isotopeName];
      expect(isotope).to.have.key('molarMass');
      expect(isotope.molarMass).to.be.greaterThan(0);
      expect(isotope.molarMass).to.be.lessThan(1);

      // Values should also be close to the value in the name, like 239 in Pu-239 
      var roughBasedOnName = parseInt(isotopeName.split('-')[1], 10) / 1000;
      var error = (isotope.molarMass - roughBasedOnName) / roughBasedOnName;
      expect(error).to.be.lessThan(0.001);
    });
  });

});