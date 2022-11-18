var PROTO_PATH = __dirname + '/route_guide.proto';

var fs = require('fs');
var parseArgs = require('minimist');
var path = require('path');
var _ = require('lodash');
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
);
var routeguide = grpc.loadPackageDefinition(packageDefinition).routeguide;

var COORD_FACTOR = 1e7;

var feature_list = [];

function checkFeature(point) {
  var feature;
  for (var i = 0; i < feature_list.length; i++) {
    feature = feature_list[i];
    if (feature.location.latitude === point.latitude &&
      feature.location.longitude === point.longitude) {
      return feature;
    }
    var name = '';
    feature = {
      name: name,
      location: point
    };
  }
  return feature;
}

function getFeature(call, callback) {
  callback(null, checkFeature(call.request));
}

function getServer() {
  var server = new grpc.Server();
  server.addService(routeguide.RouteGuide.service, {
    getFeature: getFeature,
  });
  return server;
}

if (require.main === module) {
  var routeServer = getServer();
  routeServer.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    var argv = parseArgs(process.argv, {
      string: 'db_path'
    });
    fs.readFile(path.resolve(argv.db_path), (err, data) => {
      if (err) throw err;
      feature_list = JSON.parse(data);
      routeServer.start();
      console.log('Server started');
    });
  });
}