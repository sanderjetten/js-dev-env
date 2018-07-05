import './index.css';

import numeral from 'numeral';

const siteValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${siteValue} for this awesome site!`)
