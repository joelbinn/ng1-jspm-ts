/// <reference path="./declarations.d.ts" />
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!'
import 'angular';
import Hello from './hello/Hello';

let main = angular.module('main', [Hello.name]);

console.log('main has started');