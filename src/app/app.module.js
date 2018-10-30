"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var amazing_time_picker_1 = require("amazing-time-picker");
var datepicker_1 = require("@angular/material/datepicker");
// App Components
var app_component_1 = require("./components/app.component");
var main_component_1 = require("./components/dashboard/main.component");
var login_component_1 = require("./components/login.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
// Dashboard Components
var header_component_1 = require("./components/dashboard/header.component");
var navigation_component_1 = require("./components/dashboard/navigation.component");
var footer_component_1 = require("./components/dashboard/footer.component");
var content_component_1 = require("./components/dashboard/content.component");
// Errors
var not_found_404_component_1 = require("./components/errors/not-found-404.component");
// Routes
var app_routes_1 = require("./app.routes");
var ngx_color_picker_1 = require("ngx-color-picker");
// Services
var requests_service_1 = require("./services/requests.service");
var his_util_service_1 = require("./services/his-util.service");
var permissions_service_1 = require("./services/permissions.service");
var app_config_1 = require("./configuration/app.config");
var animations_1 = require("@angular/platform-browser/animations");
var ng2_toastr_1 = require("ng2-toastr");
var CustomOption_1 = require("./configuration/CustomOption");
var doctor_dashboard_component_1 = require("./components/dashboard/doctor/doctor-dashboard.component");
var http_1 = require("@angular/common/http");
var user_shared_service_1 = require("./services/user.shared.service");
var setting_component_1 = require("./components/dashboard/setting/setting.component");
var setting_navigation_component_1 = require("./components/dashboard/setting/setting-navigation.component");
var staff_component_1 = require("./components/dashboard/setting/staff.component");
var code_component_1 = require("./components/dashboard/setting/code.component");
var department_component_1 = require("./components/dashboard/setting/department.component");
var cashier_component_1 = require("./components/dashboard/setting/cashier.component");
var medical_service_component_1 = require("./components/dashboard/setting/medical-service.component");
var nurse_component_1 = require("./components/dashboard/setting/nurse.component");
var receptionist_component_1 = require("./components/dashboard/setting/receptionist.component");
var branch_component_1 = require("./components/dashboard/setting/branch.component");
var updatecashier_component_1 = require("./components/dashboard/setting/updatecashier.component");
var role_permissions_component_1 = require("./components/dashboard/setting/role-permissions.component");
var updatedoctor_component_1 = require("./components/dashboard/setting/updatedoctor.component");
var updatenurse_component_1 = require("./components/dashboard/setting/updatenurse.component");
var update_receptionist_component_1 = require("./components/dashboard/setting/update-receptionist.component");
var addbranch_component_1 = require("./components/dashboard/setting/addbranch.component");
var material_1 = require("@angular/material");
var notification_service_1 = require("./services/notification.service");
var organization_component_1 = require("./components/dashboard/setting/organization.component");
var add_organization_component_1 = require("./components/dashboard/setting/add-organization.component");
var addstaff_component_1 = require("./components/dashboard/setting/addstaff.component");
var errordisplay_component_1 = require("./components/dashboard/setting/errordisplay.component");
var ConformationDialogService_1 = require("./services/ConformationDialogService");
var confirmationdialog_component_1 = require("./components/dashboard/confirmationdialog.component");
var update_branch_component_1 = require("./components/dashboard/setting/update-branch.component");
var version_component_1 = require("./components/dashboard/setting/version.component");
var code_version_component_1 = require("./components/dashboard/setting/code-version.component");
var add_medical_service_component_1 = require("./components/dashboard/setting/add-medical-service.component");
var service_tax_component_1 = require("./components/dashboard/setting/service-tax.component");
var edit_medical_service_component_1 = require("./components/dashboard/setting/edit-medical-service.component");
var not_found_404_setting_component_1 = require("./components/dashboard/setting/not-found-404-setting.component");
var email_template_component_1 = require("./components/dashboard/setting/email-template-component");
var add_email_template_component_1 = require("./components/dashboard/setting/add-email-template.component");
var edit_email_template_component_1 = require("./components/dashboard/setting/edit-email-template.component");
var update_organization_component_1 = require("./components/dashboard/setting/update-organization.component");
var manage_patient_component_1 = require("./components/dashboard/patient/manage-patient.component");
var patient_navigation_component_1 = require("./components/dashboard/patient/patient-navigation.component");
var patient_dashboard_component_1 = require("./components/dashboard/patient/patient-dashboard.component");
var add_patient_component_1 = require("./components/dashboard/patient/add-patient.component");
var patient_reports_component_1 = require("./components/dashboard/patient/patient-reports.component");
var patient_component_1 = require("./components/dashboard/patient/patient.component");
var edit_patient_component_1 = require("./components/dashboard/patient/edit-patient.component");
var appointment_component_1 = require("./components/dashboard/appointment/appointment.component");
var appointment_dashboard_component_1 = require("./components/dashboard/appointment/appointment-dashboard.component");
var manage_appointment_component_1 = require("./components/dashboard/appointment/manage-appointment.component");
var add_appointment_component_1 = require("./components/dashboard/appointment/add-appointment.component");
var appointment_reports_component_1 = require("./components/dashboard/appointment/appointment-reports.component");
var appointment_navigation_component_1 = require("./components/dashboard/appointment/appointment-navigation.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var angular_calendar_1 = require("angular-calendar");
var module_1 = require("../demo-utils/module");
var edit_appointment_component_1 = require("./components/dashboard/appointment/edit-appointment.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.prototype.ngOnInit = function () {
    };
    AppModule = __decorate([
        core_1.NgModule({
            providers: [
                // Services
                requests_service_1.RequestsService,
                notification_service_1.NotificationService,
                his_util_service_1.HISUtilService,
                app_config_1.AppConfig,
                permissions_service_1.PermissionsService,
                { provide: ng2_toastr_1.ToastOptions, useClass: CustomOption_1.CustomOption },
                user_shared_service_1.UserSharedService, ConformationDialogService_1.ConformationDialogService
            ], entryComponents: [confirmationdialog_component_1.ConfirmationdialogComponent],
            imports: [
                // Modules
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                app_routes_1.routes,
                animations_1.BrowserAnimationsModule,
                material_1.MatButtonModule,
                http_1.HttpClientModule,
                material_1.MatSnackBarModule,
                amazing_time_picker_1.AmazingTimePickerModule,
                material_1.MatIconModule,
                material_1.MatDialogModule,
                amazing_time_picker_1.AmazingTimePickerModule,
                material_1.MatFormFieldModule,
                datepicker_1.MatDatepickerModule,
                material_1.MatNativeDateModule,
                material_1.MatInputModule,
                material_1.MatIconModule,
                ngx_color_picker_1.ColorPickerModule,
                ng_bootstrap_1.NgbModalModule.forRoot(),
                angular_calendar_1.CalendarModule.forRoot(),
                module_1.DemoUtilsModule
            ],
            declarations: [
                // App Components
                app_component_1.AppComponent,
                main_component_1.MainComponent,
                login_component_1.LoginComponent,
                department_component_1.DepartmentComponent,
                dashboard_component_1.DashboardComponent,
                doctor_dashboard_component_1.DoctorDashboardComponent,
                // Dashboard Components
                header_component_1.HeaderComponent,
                navigation_component_1.NavigationComponent,
                footer_component_1.FooterComponent,
                content_component_1.ContentComponent,
                not_found_404_component_1.NotFound404Component,
                manage_patient_component_1.ManagePatientComponent,
                patient_dashboard_component_1.PatientDashboardComponent,
                add_patient_component_1.AddPatientComponent,
                patient_reports_component_1.PatientReportsComponent,
                patient_component_1.PatientComponent,
                edit_patient_component_1.EditPatientComponent,
                appointment_component_1.AppointmentComponent,
                appointment_dashboard_component_1.AppointmentDashboardComponent,
                manage_appointment_component_1.ManageAppointmentComponent,
                add_appointment_component_1.AddAppointmentComponent,
                appointment_reports_component_1.AppointmentReportsComponent,
                appointment_navigation_component_1.AppointmentNavigationComponent,
                //Setting Components
                setting_component_1.SettingComponent,
                setting_navigation_component_1.SettingNavigationComponent,
                patient_navigation_component_1.PatientNavigationComponent,
                staff_component_1.StaffComponent,
                code_component_1.CodeComponent,
                version_component_1.VersionComponent,
                code_version_component_1.CodeVersionComponent,
                department_component_1.DepartmentComponent,
                cashier_component_1.CashierComponent,
                medical_service_component_1.MedicalServiceComponent,
                add_medical_service_component_1.AddMedicalServiceComponent,
                edit_medical_service_component_1.EditMedicalServiceComponent,
                nurse_component_1.NurseComponent,
                receptionist_component_1.ReceptionistComponent,
                branch_component_1.BranchComponent,
                updatecashier_component_1.UpdateCashierComponent,
                role_permissions_component_1.RolePermissionsComponent,
                updatedoctor_component_1.UpdatedoctorComponent,
                updatenurse_component_1.UpdateNurseComponent,
                update_receptionist_component_1.UpdateReceptionistComponent,
                addbranch_component_1.AddBranchComponent,
                organization_component_1.OrganizationComponent,
                add_organization_component_1.AddOrganizationComponent,
                addstaff_component_1.AddStaffComponent,
                confirmationdialog_component_1.ConfirmationdialogComponent,
                update_branch_component_1.UpdateBranchComponent,
                addstaff_component_1.AddStaffComponent,
                service_tax_component_1.ServiceTaxComponent,
                email_template_component_1.EmailTemplateComponent,
                add_email_template_component_1.AddEmailTemplateComponent,
                edit_email_template_component_1.EditEmailTemplateComponent,
                not_found_404_setting_component_1.NotFound404SettingComponent,
                addstaff_component_1.AddStaffComponent,
                errordisplay_component_1.ErrordisplayComponent,
                confirmationdialog_component_1.ConfirmationdialogComponent,
                update_organization_component_1.UpdateOrganizationComponent,
                edit_appointment_component_1.EditAppointmentComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map