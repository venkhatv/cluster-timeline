import express from 'express';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import webpack from 'webpack';
import es6Renderer from 'express-es6-template-engine';
import webpackConfig from '../../webpack.config';
import db from './dbmodels';
import mountRoutes from './mountRoutes';
import routes from './routes';

const expressApp = express();
const expressPort = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  const webpackdevConfig = webpackConfig('development');
  const compiler = webpack(webpackdevConfig);

  expressApp.use(devMiddleware(compiler, {
    publicPath: webpackdevConfig.output.publicPath,
    historyApiFallback: true,
  }));

  expressApp.use(hotMiddleware(compiler));
}
expressApp.engine('html', es6Renderer);
expressApp.set('views', path.join(process.cwd(), 'dist'));
expressApp.set('view engine', 'html');
expressApp.use(express.static(path.join(process.cwd(), 'dist')));

expressApp.get('/', (request, response) => {
  response.render('index');
});

expressApp.use('/api', mountRoutes(routes));

expressApp.use('/timeline', (request, response) => {
  response.render('timeline');
});
expressApp.get('*', (request, response) => {
  response.render('index');
});

expressApp.listen(expressPort, (err) => {
  if (err) {
    console.log(`Express server failed to start ${err}`);
  } else {
    console.log(`Express server listening at ${expressPort}`);
  }
});
