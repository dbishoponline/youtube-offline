// ###*
//  *
//  * AWS
//  * http://docs.download.amazon.com/AWSJavaScriptSDK/latest/AWS/
// ###

require('shelljs/global');

var clone         = require("nodegit").Clone.clone,
    config        = require('../../config'),
    paths         = require('../../config').paths,
    PromptHelper  = require('../../lib/bishop/helpers/PromptHelper'),
    SystemHelper  = require('../../lib/bishop/helpers/SystemHelper'),
    log           = require('../../lib/bishop/helpers/ConsoleHelper'),
    _ssh          = require('node-ssh');

var download = {
  // start EC2 instance
  start: function(servers) {
    var ec2    = null,
        ids    = [],
        names  = [],
        params = {};

    // if starting multiple instances
    if(servers.length) {

      servers.map(function(server){
        ids.push(config.instances[server].instance_id);
        names.push(config.instances[server].machine_name);
      });

      params = {
        InstanceIds: ids, // instance IDs array (required)
        AdditionalInfo: 'STRING_VALUE',
        DryRun: false // TODO: add option flag
      };

      ec2 = new AWS.EC2({
        region: 'us-west-1'
      });

      ec2.startInstances(params, function(err, data) {
        if (err) {
          // ERROR
          log.notice('error', err);
          log.notice('error', err.stack);
        }
        else {


          // SUCCESS
          log.notice('success', 'Started '+names+' and they are all initializing and will be ready for use soon.');
          log.notice('info', data);
        }
      });
    }
  },

  // stop EC2 instance
  stop: function(servers) {
    var ec2    = null,
        ids    = [],
        names    = [],
        params = {};

    if(servers.length) {

      servers.map(function(server){
        ids.push(config.instances[server].instance_id);
        names.push(config.instances[server].machine_name);
      });

      params = {
        InstanceIds: ids, // instance IDs array (required)
        Force: false,
        DryRun: false // TODO: add option flag
      };

      ec2 = new AWS.EC2({
        region: 'us-west-1'
      });

      ec2.stopInstances(params, function(err, data) {
        if (err) {
          // ERROR
          log.notice('error', err);
          log.notice('error', err.stack);
        }
        else {
          // SUCCESS
          log.notice('success', 'Stopped '+names+' and they are all shutting down...');
          log.notice('info', data);
        }
      });
    }
  },
};

module.exports = download;
