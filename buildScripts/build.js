/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified buncle for production. This will take a moment...'))

webpack(webpackConfig).run((err, status) => {
    if(err){ // on error exit
      console.log(chalk.red(err));
      return 1;
    }
    const jsonStats = status.toJson();

    if(jsonStats.hasErrors){
      return jsonStats.errors.map(error => console.log(chalk.red(error)))
    }

    if(jsonStats.hasWarnings){
      console.log(chalk.yellow('Webpack generated the following warnings: '));
      jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack stats: ${jsonStats}`);

    // build succeeded
    console.log(chalk.green('App build and written to /dist! Jeej'));
    return 0;
});