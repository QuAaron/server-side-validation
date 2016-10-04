export default class ServerValidationController {

  constructor($scope) {
    'ngInject';

    $scope.$watch(() => this.errors, errors => this.mapErrorsToFields(errors) )

  }

  invalidateField (field, errorType) {
    const changeListener = () => {
        field.$setValidity(errorType, true);

        let index = field.$viewChangeListeners.indexOf(changeListener);
        if (index > -1) {
            field.$viewChangeListeners.splice(index, 1);
        }
    }

    field.$setDirty();
    field.$setValidity(errorType, false);
    field.$viewChangeListeners.push(changeListener);
  }

  mapErrorsToFields (errors = []) {
    errors.map(error => {
      this.invalidateField(this.form[error.field], `server.${error.type.toLowerCase()}`)
    })
  }

}