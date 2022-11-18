var PROTO_PATH = __dirname + "./route_guide.proto";

var async = require('async');
var fs = require('fs');
var parseArgs = require('minimist');
var path = require('path');
var _ = require('lodash');
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });

var protoDescriptor = grpc.loadPackageDefinition(packageDefition);
// The protoDescriptor object has the full package hierarchy
var routeguide = protoDescriptor.routeguide;

// Stub Constructor is in the routeguide namespace
var client = new routeguide.RouteGuide('localhost:50051', grpc.credentials.createInsecure());

var COORD_FACTOR = 1e7;

/***
 * Run the getFeature demo. Calls getFeature with a point known to have a
 * feature and a point known not to hae a feature
 * @param {function} callback Called when demo is complete
 */
