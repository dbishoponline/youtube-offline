// Folder Structure of ~/dev/

// ~/dev/
//    - /apps
//    - /assets
//    - /cli
//    - /drupal
//    - /projects
//    - /repos
//    - /tools
//    - /wordpress

var config = {
  "colors": {
    "console": "grey",
    "prompt": "cyan",
    "error": "red",
    "warning": "yellow",
    "success": "green"
  },
  "workstation": {
    "name": "macbook-laptop",
    "type": "macosx",
    "privateKey": "/Users/dylan/.ssh/id_rsa",
    "passphrase": "",
    "keepReleases": 2,
  },
  "paths": {
    "root": "/Users/dylan/dev/",
    "apps": "apps",
    "assets": "assets",
    "cli": "cli",
    "drupal": "apps",
    "projects": "projects",
    "repos": "repos",
    "tools": "tools",
    "wordpress": "apps",
  },
  "repositories": {
  //   // TODO: SETUP WITH DOCKER CONTAINERS
    // "wordpress_boilerplate": "https://github.com/RCooLeR/php-nginx-mysql-memcache-vagrant-docker.git"
    "wordpress_boilerplate": "git@git.dylanbishop.me:dylan.bishop/dylanbishop_website.git",
    "universal_redux_boilerplate": "git@github.com:erikras/react-redux-universal-hot-example.git"
  //   // "vvv": "git@git.dylanbishop.me:dylan.bishop/dylanbishop_vvv.git",
  //   // "vdd": "http://ftp.drupal.org/files/projects/vdd-8.x-1.0-alpha4.tar.gz"
  },
  "instances":{
    proxy: {
      // PROXY - ssh proxy for secure browsing on public wifi
      "name": "Proxy Server",
      "nickname": "proxy",
      "machine_name": "proxy_server_instance",
      "instance_id": "i-87e6b935",
      "host": "proxy.dylanbishop.me",
      "envs": ["prod"]
    },
    // deploy: {
    //   // DEPLOY (Jenkins, selenium, other test runners)
    //   "name": "Deploy Server",
    //   "nickname": "",
    //   "machine_name": "deploy_server_instance",
    //   "instance_id": "i-b2e381f4",
    //   "host": "deploy.dylanbishop.me",
    //   "envs": ["dev", "qa", "prod"]
    // },
    jira: {
      // JIRA
      "name": "Jira Server",
      "nickname": "",
      "machine_name": "jira_server_instance",
      "instance_id": "i-0c882cbe",
      "envs": {
        // "dev": {
        //   "host": "192.168.1.9",
        //   "port": "8080",
        //   "user": "ubuntu",
        //   "path": "/opt/atlassian/jira/",
        // },
        // "qa": {
        //   "host": "192.168.1.9",
        //   "port": "8080",
        //   "user": "ubuntu",
        //   "path": "/opt/atlassian/jira/",
        // },
        "prod": {
          // "host": "pm.dylanbishop.me",
          "host": "pm.dylanbishop.me",
          "port": "80",
          // "user": "ubuntu",
          "user": "dylanbishop",
          // "path": "/opt/atlassian/jira/",
          "path": "~/atlassian/jira/",
        }
      }
    },
    confluence: {
      //  CONFLUENCE
      "name": "Confluence Server",
      "nickname": "",
      "machine_name": "confluence_server_instance",
      "instance_id": "",
      "envs": {
        // "dev": {
        //   "host": "192.168.1.9",
        //   "port": "8080",
        //   "user": "ubuntu",
        //   "path": "/opt/atlassian/jira/",
        // },
        // "qa": {
        //   "host": "192.168.1.9",
        //   "port": "8080",
        //   "user": "ubuntu",
        //   "path": "/opt/atlassian/jira/",
        // },
        "prod": {
          // "host": "wiki.dylanbishop.me",
          "host": "wiki.dylanbishop.me",
          "port": "8090",
          "user": "ubuntu",
          "path": "/opt/atlassian/jira/",
        }
      }
    },
    gitlab: {
      // GITLAB
      "name": "Gitlab Server",
      "nickname": "i-0c882cbe",
      "machine_name": "gitlab_server_instance",
      "instance_id": "",
      "host": "git.dylanbishop.me",
      "envs": ["dev", "qa", "prod"]
    },
    devcrm: {
      // DEVCRM (dev+)
      "name": "CRM Server",
      "nickname": "",
      "machine_name": "dev+_server_instance",
      "instance_id": "",
      "host": "crm.dylanbishop.me",
      "envs": ["dev", "qa", "prod"]
    },
    // wordpress: {
    //   // WORDPRESS (SHARED)
    //   "name": "Shared Wordpress Server",
    //   "nickname": "",
    //   "machine_name": "shared_wordpress_instance",
    //   "instance_id": "i-0c882cbe",
    //   "host": "wordpress.dylanbishop.me",
    //   "envs": ["dev", "qa", "prod"]
    // },
    // drupal: {
    //   // DRUPAL (SHARED)
    //   "name": "Shared Drupal Server",
    //   "nickname": "",
    //   "machine_name": "shared_drupal_instance",
    //   "instance_id": "",
    //   "host": "drupal.dylanbishop.me",
    //   "envs": ["dev", "qa", "prod"]
    // }
  },
  "projects":[
    {
      "name": "dylanbishop",
      "recipe": "wordpress",
      "directory_name": "dylanbishop",
      "repository": "git@git.dylanbishop.me:dylan.bishop/dylanbishop_website.git",
      "environments": ["dev","qa","prod"]
    },
    {
      "name": "masterful",
      "recipe": "wordpress",
      "directory_name": "masterful",
      "repository": "git@git.dylanbishop.me:dylan.bishop/masterful_website.git",
      "environments": ["dev","qa","prod"]
    },
    {
      "name": "cavemandaycare",
      "recipe": "grav",
      "directory_name": "cavemandaycare2",
      "repository": "git@git.dylanbishop.me:dylan.bishop/cavemandaycare2.git",
      "environments": ["dev","qa","prod"]
    },
    {
      "name": "devcrm",
      "recipe": "node",
      "directory_name": "devcrm",
      "repository": "git@git.dylanbishop.me:dylan.bishop/dylanbishop_intranet_ember.git",
      "environments": ["dev","qa","prod"]
    },
  ],
};

module.exports = config;
