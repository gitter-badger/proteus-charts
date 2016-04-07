# proteus-charts 
[![Build Status](https://travis-ci.org/proteus-h2020/proteus-charts.svg?branch=development)](https://travis-ci.org/proteus-h2020/proteus-charts)
[![devDependency Status](https://david-dm.org/proteus-h2020/proteus-charts/dev-status.svg)](https://david-dm.org/0xNacho/proteus-charts#info=devDependencies)
[![Dependency Status](https://david-dm.org/proteus-h2020/proteus-charts.svg)](https://david-dm.org/0xNacho/proteus-charts)
[![codecov.io](https://codecov.io/github/proteus-h2020/proteus-charts/coverage.svg?branch=master)](https://codecov.io/github/proteus-h2020/proteus-charts?branch=development)

HTML5 and CSS3 charts.


## How to run
`cd proteus-charts`

`npm install`

`python -m SimpleHTTPServer 8888`

Open your browser on http://localhost:8888 and visit the examples folder.

**Note**: If you wan to run the websocket_* examples, you need to start a websocket server in the background. This project provides a very basic implementation of this (it sends random data every half second):

`node websocket-server.js`



Folder/file descriptions and code convention: [directory-structure.md](https://github.com/PROTEUS-H2020/proteus-graphs/blob/master/directory-structure.md) 
