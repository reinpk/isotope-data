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

});