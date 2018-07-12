/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';
import faker from 'faker';

jsf.extend("faker", function(){
  return faker;
});

jsf.resolve(schema).then(function(result) {
  fs.writeFile("./src/api/db.json", JSON.stringify(result, null, 2), function(err){
      if (err) {
          return (console.log(chalk.red(err)));
      } else {
          console.log(chalk.green(`Mock Data Generated Here: "./src/api/db.json"`));
      }
  });
});