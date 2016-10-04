/*
 * Let’s assume that the server returns validation errors using
 * the following format:
 *
 * [{
 *     "field": "code",
 *     "type": "unique",
 *     "value": 123,
 *     "message": "this field is unique"
 * }]
 *
 */

import ServerValidationController from './server-validation.controller';
  
const serverValidationComponent = {
  require: {
    form: '^form'
  },
  template: '',
  controller: ServerValidationController,
  controllerAs: 'vm',
  bindings: {
    errors: '<'
  }
}

export default angular.module('server-validation', [])
  .component('server-validate', serverValidationComponent)