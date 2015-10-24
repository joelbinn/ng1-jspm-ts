/// <reference path="../declarations.d.ts" />
import HelloDirective from './HelloDirective';

export default angular
    .module('hello', [])
    .directive(HelloDirective.name, HelloDirective.definition);
