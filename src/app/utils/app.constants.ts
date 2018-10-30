/**
 * @Author Irfan Nasim
 * @since 07-Sep-17
 * @Description Application Constants
 */
export class AppConstants {

    public static ACCESS_TOKEN = 'access_token';
    public static EXPIRE_PASSWORD_TOKEN = 'expire_password_token';
    public static USER_BY_ROLE = '/user/role/';
    public static FETCH_ALL_CLINICAL_DEPARTMENTS_URI = '/setting/department/';
    public static DELETE_CLINICAL_DEPARTMENTS_URI = '/setting/department/delete/';
    public static SEARCH_CLINICAL_DEPARTMENT_URL = '/setting/department/search/';
    public static SAVE_CLINICAL_DEPARTMENT_URL = '/setting/department/save';
    public static UPDATE_CLINICAL_DEPARTMENT_URL = '/setting/department/update';
    public static CREATE_USER_ENDPOINT = '/user/add';
    public static USER_SEARCH = '/user/search/';
    public static FETCH_ALL_USERS_URI = '/user/';
    public static FETCH_USER_BY_ID = '/user/get/';
    ////////////////////// Branch URLs ///////////////////////////////
    public static ADD_BRANCH = '/setting/branch/create';
    public static UPDATE_BRANCH = '/setting/branch/update/';
    public static DELETE_BRANCH_URI = '/setting/branch/delete/';
    public static BRANCHES_NAME = '/setting/branch/name';
    public static BRANCH_SEARCH = '/setting/branch/search/';
    public static FETCH_ALL_BRANCHES_URL = '/setting/branch/';
    public static FETCH_BRANCHES_BY_ID = '/setting/branch/get/';

    ////////////////////// ICD URLs ///////////////////////////////
    public static ICD_CODE = '/setting/icd/code';
    public static ICD_CODE_SAVE_URL = '/setting/icd/code/save';
    public static ICD_CODE_UPDATE_URL = '/setting/icd/code/update';
    public static ICD_CODES = '/setting/icd/codes/';
    public static ICD_CODE_DELETE_URL = '/setting/icd/code/delete?codeId=';
    public static ICD_CODE_SEARCH = '/setting/icd/code/search/';
    public static ICD_VERSION_SAVE_URL = '/setting/icd/version/save';
    public static ICD_VERSION_UPDATE_URL = '/setting/icd/version/update';
    public static ICD_VERSIONS = '/setting/icd/versions/';
    public static ICD_VERSION_DELETE_URL = '/setting/icd/version/delete?iCDVersionId=';
    public static ICD_VERSION_SEARCH = '/setting/icd/version/search/';
    public static ICD_CODE_VERSION_SAVE_URL = '/setting/icd/codeVersion/save';
    public static ICD_CODE_VERSIONS = '/setting/icd/codeVersions/';
    public static ICD_CODE_VERSION_DELETE_URL = '/setting/icd/codeVersion/delete?associateICDCVId=';
    public static ICD_CODE_VERSION_SEARCH = '/setting/icd/codeVersion/search/';
    public static ICD_VERSION_CODES_VERSION = '/setting/icd/version/codes/?versionId=';

    public static ROLE_ENDPOINT = '/setting/rolePermission/add';
    public static PERMISSION_ENDPOINT = '/user/auth/authorities';
    public static PERMISSION_BY_ROLE = '/setting/rolePermission/role';
    public static ASSIGN_PERMISSIONS_TO_ROLES = '/setting/rolePermission/assignAuthorities';

    ////////////////////// Service Tax URLs ///////////////////////////////
    public static FETCH_ALL_TAX_URL = '/setting/tax/';
    public static SERVICE_TAX_SAVE_URL = '/setting/tax/save';
    public static SERVICE_TAX_DELETE_URL = '/setting/tax/delete?taxId=';
    public static SERVICE_TAX_UPDATE_URL = '/setting/tax/update';
    public static SERVICE_TAX_SEARCH_URL = '/setting/tax/search/';

    ////////////////////// Email Template URLs ///////////////////////////////
    public static EMAIL_TEMPLATE_FETCH_ALL_URL = '/setting/emailTemplate/';
    public static EMAIL_TEMPLATE_DELETE_URL = '/setting/emailTemplate/delete/?id=';
    public static EMAIL_TEMPLATE_SAVE_URL = '/setting/emailTemplate/save';
    public static EMAIL_TEMPLATE_EDIT_URL = '/setting/emailTemplate/get/';
    public static EMAIL_TEMPLATE_UPDATE_URL = '/setting/emailTemplate/update';
    public static EMAIL_TEMPLATE_SEARCH_URL = '/setting/emailTemplate/search/';

    ////////////////////// Medical Service URLs ///////////////////////////////
    public static FETCH_ALL_MEDICAL_SERVICES_URL = '/setting/medicalService/';
    public static SAVE_MEDICAL_SERVICES_URL = '/setting/medicalService/save';
    public static UPDATE_MEDICAL_SERVICES_URL = '/setting/medicalService/update';
    public static DELETE_MEDICAL_SERVICES_URL = '/setting/medicalService/delete?';
    public static FETCH_MEDICAL_SERVICES_BY_ID_URL = '/setting/medicalService/id/';
    public static MEDICAL_SERVICE_SEARCH = '/setting/medicalService/search/';

    ////////////////////// Organization URLs ///////////////////////////////
    public static ORGANIZATION_CREATE_URL = '/setting/organization/create';
    public static TIMEZONE_FETCH_URL = '/setting/organization/timezone';
    public static FETCH_ALL_ORGANIZATION_URL_PAGINATED = '/setting/organization/';
    public static FETCH_ALL_ORGANIZATION_URL = '/setting/organization/all';
    public static FETCH_ORGANIZATION_BY_ID = '/setting/organization/get/';
    public static UPDATE_ORGANIZATION_URL = '/setting/organization/update/';

    ////////////////////// Patient URLs ///////////////////////////////
    public static FETCH_ALL_PATIENT_URL = '/user/patient/';
    public static PATIENT_DELETE_URI = '/user/patient/delete/';
    public static PATIENT_SAVE_URL = '/user/patient/save';
    public static PATIENT_FETCH_URL = '/user/patient/get/';
    public static PATIENT_UPDATE_URL = '/user/patient/update';
    public static SEARCH_ALL_PATIENT_URL = '/user/patient/search';
    public static GET_ALL_PATIENT_URL = '/user/patient/all';

    ////////////////////// Appointments URLs ///////////////////////////////
    public static FETCH_PAGINATED_APPOINTMENTS_URL = '/appointment/';
    public static CREATE_APPOINTMENT_URL = '/appointment/create';
    public static SEARCH_APPOINTMENT_URL = '/appointment/search/';
    public static FETCH_APPOINTMENTS_BY_ID = '/appointment/get/';
    public static UPDATE_APPOINTMENT = '/appointment/update/';
    public static DELETE_APPOINTMENT_URI = '/appointment/delete/';


}