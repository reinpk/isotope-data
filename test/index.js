var isotopeData = require('../build/build.js'),
    _           = require('underscore');

describe('isotope data', function () {

  it('should all have a valid half-life', function () {
    _.each(_.keys(isotopeData), function (isotopeName) {
      var isotope = isotopeData[isotope];
      should.exist(isotope.halflife);
      isotope.halflife.should.be.greaterThan(0);
      isotope.halflife.should.be.lessThan(100000000000);
    });
  });

  it('should all have a valid product or products', function () {
    _.each(_.keys(isotopeData), function (isotopeName) {
      var isotope = isotopeData[isotope];
      should.exist(isotope.product || isotope.products);

      if (isotope.product) {
        (typeof isotope.product).should.equal('string');
      }
      else {
        (typeof isotope.products).should.equal('object');
        isotope.products.length.should.be.greaterThan(1);
        _.each(isotope.products, function (product) {
          should.exist(product.fraction);
          (typeof product.fraction).should.equal('number');
          should.exist(product.product);
          (typeof product.product).should.equal('string');
        });
      }
    });
  });

});