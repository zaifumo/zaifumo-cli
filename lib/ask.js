'use strict';
const chalk = require('chalk');
exports.boilerplateChoice = [
  {
    name: `Create ${chalk.green('HTML')} Application`,
    value: 'zaifumo-multiple-html'
  },
  {
    name: `Create ${chalk.green('React')} Application`,
    value: 'zaifumo-react'
  }
];

exports.boilerplateDetailChoice = {
  'zaifumo-react': [
    {
      name: `Create ${chalk.green('React + Webpack')} Application`,
      value: 'zaifumo-react-webpack',
      pkgName: 'zaifumo-react-webpack'
    },
    {
      name: `Create ${chalk.green('React + Easywebpack')} Application`,
      value: 'zaifumo-react-easywebpack',
      pkgName: 'zaifumo-react-easywebpack'
    }
  ],
  'boilerplate-egg-react': [
    {
      name: `Create ${chalk.green('Egg + AntD Admin')} Application`,
      value: 'easy-react-admin',
      pkgName: 'easy-react-admin'
    },
    {
      name: `Create ${chalk.green('Egg + React Single Page')} ${chalk.yellow('SSR')} Application`,
      value: 'egg-react-spa',
      pkgName: 'egg-react-webpack-spa-boilerplate'
    },
    {
      name: `Create ${chalk.green('Egg + React Multil Page')} ${chalk.yellow('SSR')} Application`,
      value: 'egg-react-multil',
      pkgName: 'egg-react-webpack-mpa-boilerplate'
    },
    {
      name: `Create ${chalk.green('Egg + React Single And Multil Page')} ${chalk.yellow('SSR')} Application`,
      value: 'egg-react',
      pkgName: 'egg-react-webpack-boilerplate'
    },
    {
      name: `Create ${chalk.green('Egg + React + TypeScript')} ${chalk.yellow('SSR')} Application`,
      value: 'egg-react-typescript',
      pkgName: 'egg-react-typescript-boilerplate'
    }
  ]
};

exports.projectAskChoice = [
  {
    type: 'input',
    name: 'name',
    message: 'Please input project name:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please input project description:'
  },
  {
    type: 'checkbox',
    name: 'style',
    message: 'Please choose css style:',
    choices: [
      {
        name: 'css',
        value: null,
        checked: true
      },
      {
        name: 'sass',
        value: 'scss'
      },
      {
        name: 'less',
        value: 'less'
      },
      {
        name: 'stylus',
        value: 'stylus'
      }
    ]
  },
  {
    type: 'list',
    name: 'npm',
    message: 'Please choose the way to install dependency:',
    choices: [
      {
        name: 'none',
        value: null,
        checked: true
      },
      {
        name: 'npm',
        value: 'npm'
      },
      {
        name: 'yarn',
        value: 'yarn'
      },
      {
        name: 'cnpm',
        value: 'cnpm'
      },
      {
        name: 'tnpm',
        value: 'tnpm'
      }
    ]
  }
];
