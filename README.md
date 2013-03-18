isotope-data
============

This is a [component](https://github.com/component/component) that contains data about many nuclear isotopes.

## Install
For use in javascript projects:

    component install 'reinpk/isotope-data'

Then wherever you need to use it:

```javascript
    var isotopeData = require('isotope-data');
```

## Format
The data is accessible as a dictionary of compact isotope names, mapping to the data for each isotope:

```javascript
{
    'Pu-239' : {
        halflife : 24100, // units in years
        product  : 'U-235'
    }
}
```

or if the isotope has multiple decay products then the structure is:

```javascript
{
    'Ac-227' : {
        halflife : 21.772, // units in years
        products : [
            {
                fraction : 0.9862, // unitless
                product  : 'Th-227'
            },
            {
                fraction : 0.0138,
                product  : 'Fr-223'
            }
        ]
    }
}
```



## License

    WWWWWW||WWWWWW
     W W W||W W W
          ||
        ( OO )__________
         /  |           \
        /o o|    MIT     \
        \___/||_||__||_|| *
             || ||  || ||
            _||_|| _||_||
           (__|__|(__|__|

Copyright (C) 2013 Peter Reinhardt

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.