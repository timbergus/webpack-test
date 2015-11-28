# [WebPack](https://webpack.github.io/) Test

This is a test to see how WebPack works.

To make it works, just open a terminal and type `npm run debug`.

Then use this [link](http://localhost:8080/webpack-dev-server/bundle) to visit your local app url.

## Loaders

We are using WebPack loaders to import the files we need. In this app we are working with Stylus, Jade and ES2015, so we need to use:

#### Stylus

* style-loader
* css-loader
* stylus-loader

#### Jade

* jade
* jade-loader

#### ES2015

* babel-core
* babel-preset-es2015
* babel-preset-stage-2
* babel-loader
