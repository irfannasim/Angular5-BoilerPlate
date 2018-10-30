"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(user) {
        this.userType = user.userType;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.userName = user.userName;
        this.email = user.email;
        this.password = user.password;
        this.confirmPassword = user.confirmPassword;
        this.primaryBranch = user.primaryBranch;
        this.allowDiscount = user.allowDiscount;
        this.managePatientInvoices = user.managePatientInvoices;
        this.managePatientRecords = user.managePatientRecords;
        this.cellPhone = user.cellPhone;
        this.homePhone = user.homePhone;
        this.sendBillingReport = user.sendBillingReport;
        this.useReceptDashboard = user.useReceptDashboard;
        this.otherDoctorDashBoard = user.otherDoctorDashBoard;
        this.otherDashboard = user.otherDashboard;
        this.accountExpiry = user.accountExpiry;
        this.active = user.active;
        this.interval = user.interval;
        this.dutyWithDoctors = user.dutyWithDoctors;
        this.selectedServices = user.selectedServices;
        this.selectedVisitBranches = user.selectedVisitBranches;
        this.selectedDoctors = user.selectedDoctors;
        this.firstShiftFromTime = user.firstShiftFromTime;
        this.firstShiftToTime = user.firstShiftToTime;
        this.secondShiftFromTime = user.secondShiftFromTime;
        this.secondShiftToTime = user.secondShiftToTime;
        this.vacation = user.vacation;
        this.selectedWorkingDays = user.selectedWorkingDays;
        this.selectedDepartment = user.selectedDepartment;
        this.shift1 = user.shift1;
        this.shift2 = user.shift2;
        this.dateFrom = user.dateFrom;
        this.dateTo = user.dateTo;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map