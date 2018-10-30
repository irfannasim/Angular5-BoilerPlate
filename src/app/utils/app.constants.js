"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author Irfan Nasim
 * @since 07-Sep-17
 * @Description Application Constants
 */
var AppConstants = (function () {
    function AppConstants() {
    }
    AppConstants.ACCESS_TOKEN = 'access_token';
    AppConstants.EXPIRE_PASSWORD_TOKEN = 'expire_password_token';
    AppConstants.USER_BY_ROLE = '/user/role/';
    AppConstants.FETCH_ALL_CLINICAL_DEPARTMENTS_URI = '/setting/department/';
    AppConstants.DELETE_CLINICAL_DEPARTMENTS_URI = '/setting/department/delete/';
    AppConstants.SEARCH_CLINICAL_DEPARTMENT_URL = '/setting/department/search/';
    AppConstants.SAVE_CLINICAL_DEPARTMENT_URL = '/setting/department/save';
    AppConstants.UPDATE_CLINICAL_DEPARTMENT_URL = '/setting/department/update';
    AppConstants.CREATE_USER_ENDPOINT = '/user/add';
    AppConstants.USER_SEARCH = '/user/search/';
    AppConstants.FETCH_ALL_USERS_URI = '/user/';
    AppConstants.FETCH_USER_BY_ID = '/user/get/';
    ////////////////////// Branch URLs ///////////////////////////////
    AppConstants.ADD_BRANCH = '/setting/branch/create';
    AppConstants.UPDATE_BRANCH = '/setting/branch/update/';
    AppConstants.DELETE_BRANCH_URI = '/setting/branch/delete/';
    AppConstants.BRANCHES_NAME = '/setting/branch/name';
    AppConstants.BRANCH_SEARCH = '/setting/branch/search/';
    AppConstants.FETCH_ALL_BRANCHES_URL = '/setting/branch/';
    AppConstants.FETCH_BRANCHES_BY_ID = '/setting/branch/get/';
    ////////////////////// ICD URLs ///////////////////////////////
    AppConstants.ICD_CODE = '/setting/icd/code';
    AppConstants.ICD_CODE_SAVE_URL = '/setting/icd/code/save';
    AppConstants.ICD_CODE_UPDATE_URL = '/setting/icd/code/update';
    AppConstants.ICD_CODES = '/setting/icd/codes/';
    AppConstants.ICD_CODE_DELETE_URL = '/setting/icd/code/delete?codeId=';
    AppConstants.ICD_CODE_SEARCH = '/setting/icd/code/search/';
    AppConstants.ICD_VERSION_SAVE_URL = '/setting/icd/version/save';
    AppConstants.ICD_VERSION_UPDATE_URL = '/setting/icd/version/update';
    AppConstants.ICD_VERSIONS = '/setting/icd/versions/';
    AppConstants.ICD_VERSION_DELETE_URL = '/setting/icd/version/delete?iCDVersionId=';
    AppConstants.ICD_VERSION_SEARCH = '/setting/icd/version/search/';
    AppConstants.ICD_CODE_VERSION_SAVE_URL = '/setting/icd/codeVersion/save';
    AppConstants.ICD_CODE_VERSIONS = '/setting/icd/codeVersions/';
    AppConstants.ICD_CODE_VERSION_DELETE_URL = '/setting/icd/codeVersion/delete?associateICDCVId=';
    AppConstants.ICD_CODE_VERSION_SEARCH = '/setting/icd/codeVersion/search/';
    AppConstants.ICD_VERSION_CODES_VERSION = '/setting/icd/version/codes/?versionId=';
    AppConstants.ROLE_ENDPOINT = '/setting/rolePermission/add';
    AppConstants.PERMISSION_ENDPOINT = '/user/auth/authorities';
    AppConstants.PERMISSION_BY_ROLE = '/setting/rolePermission/role';
    AppConstants.ASSIGN_PERMISSIONS_TO_ROLES = '/setting/rolePermission/assignAuthorities';
    ////////////////////// Service Tax URLs ///////////////////////////////
    AppConstants.FETCH_ALL_TAX_URL = '/setting/tax/';
    AppConstants.SERVICE_TAX_SAVE_URL = '/setting/tax/save';
    AppConstants.SERVICE_TAX_DELETE_URL = '/setting/tax/delete?taxId=';
    AppConstants.SERVICE_TAX_UPDATE_URL = '/setting/tax/update';
    AppConstants.SERVICE_TAX_SEARCH_URL = '/setting/tax/search/';
    ////////////////////// Email Template URLs ///////////////////////////////
    AppConstants.EMAIL_TEMPLATE_FETCH_ALL_URL = '/setting/emailTemplate/';
    AppConstants.EMAIL_TEMPLATE_DELETE_URL = '/setting/emailTemplate/delete/?id=';
    AppConstants.EMAIL_TEMPLATE_SAVE_URL = '/setting/emailTemplate/save';
    AppConstants.EMAIL_TEMPLATE_EDIT_URL = '/setting/emailTemplate/get/';
    AppConstants.EMAIL_TEMPLATE_UPDATE_URL = '/setting/emailTemplate/update';
    AppConstants.EMAIL_TEMPLATE_SEARCH_URL = '/setting/emailTemplate/search/';
    ////////////////////// Medical Service URLs ///////////////////////////////
    AppConstants.FETCH_ALL_MEDICAL_SERVICES_URL = '/setting/medicalService/';
    AppConstants.SAVE_MEDICAL_SERVICES_URL = '/setting/medicalService/save';
    AppConstants.UPDATE_MEDICAL_SERVICES_URL = '/setting/medicalService/update';
    AppConstants.DELETE_MEDICAL_SERVICES_URL = '/setting/medicalService/delete?';
    AppConstants.FETCH_MEDICAL_SERVICES_BY_ID_URL = '/setting/medicalService/id/';
    AppConstants.MEDICAL_SERVICE_SEARCH = '/setting/medicalService/search/';
    ////////////////////// Organization URLs ///////////////////////////////
    AppConstants.ORGANIZATION_CREATE_URL = '/setting/organization/create';
    AppConstants.TIMEZONE_FETCH_URL = '/setting/organization/timezone';
    AppConstants.FETCH_ALL_ORGANIZATION_URL_PAGINATED = '/setting/organization/';
    AppConstants.FETCH_ALL_ORGANIZATION_URL = '/setting/organization/all';
    AppConstants.FETCH_ORGANIZATION_BY_ID = '/setting/organization/get/';
    AppConstants.UPDATE_ORGANIZATION_URL = '/setting/organization/update/';
    ////////////////////// Patient URLs ///////////////////////////////
    AppConstants.FETCH_ALL_PATIENT_URL = '/user/patient/';
    AppConstants.PATIENT_DELETE_URI = '/user/patient/delete/';
    AppConstants.PATIENT_SAVE_URL = '/user/patient/save';
    AppConstants.PATIENT_FETCH_URL = '/user/patient/get/';
    AppConstants.PATIENT_UPDATE_URL = '/user/patient/update';
    AppConstants.SEARCH_ALL_PATIENT_URL = '/user/patient/search';
    AppConstants.GET_ALL_PATIENT_URL = '/user/patient/all';
    ////////////////////// Appointments URLs ///////////////////////////////
    AppConstants.FETCH_PAGINATED_APPOINTMENTS_URL = '/appointment/';
    AppConstants.CREATE_APPOINTMENT_URL = '/appointment/create';
    AppConstants.SEARCH_APPOINTMENT_URL = '/appointment/search/';
    AppConstants.FETCH_APPOINTMENTS_BY_ID = '/appointment/get/';
    AppConstants.UPDATE_APPOINTMENT = '/appointment/update/';
    AppConstants.DELETE_APPOINTMENT_URI = '/appointment/delete/';
    return AppConstants;
}());
exports.AppConstants = AppConstants;
//# sourceMappingURL=app.constants.js.map