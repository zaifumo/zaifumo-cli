'use strict';
const path = require('path');
const program = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const tool = require('node-tool-utils');
const Action = require('./action');
const utils = require('./utils');
const builder = require('./builder');

module.exports = class Command {
  constructor() {
    this.baseDir = process.cwd();
    this.program = program;
    this.inquirer = inquirer;
    this.chalk = chalk;
    this.tool = tool;
    this.utils = utils;
    this.builder = builder;
    this.boilerplate = {};
    this.commands = ['init'];
    this.action = new Action(this);
  }

  version() {
    const pkg = require(path.resolve(__dirname, '../package.json'));
    this.program.version(pkg.version);
  }

  option() {
    this.program
      .option('-f, --filename [path]', 'webpack config file path')
      .option('-p, --port [port]', 'webpack server port');
  }

  init() {
    this.program
      .command('init')
      .option('--sync [url]', 'sync easy init prompt template config')
      .description('init webpack config or boilerplate for Vue/React/Weex')
      .action(options => {
        this.action.init(this.boilerplate, options);
      });
  }

  command() {
    this.commands.forEach(cmd => {
      if (this[cmd]) {
        this[cmd].apply(this);
      } else {
        console.log(chalk.red(`The command [${cmd}] is not implemented!`));
      }
    });
  }

  parse() {
    this.program.parse(process.argv);
  }

  run() {
    this.version();
    this.option();
    this.command();
    this.parse();
  }
};
