export interface IFormValues {
  // EmployeeInfor
  nik: string;
  name: string;
  gender: number;
  motherName: string;
  birth: string;
  place: string;
  ktp: string;
  notional: string;
  home1: string;
  home2: string;

  mobile: string;
  tel: string;
  marriage: string;
  bankCard: string;
  bankAcc: string;
  bankName: string;
  familyCard: string;
  safety: string;
  health: string;

  // ContractInfor
  dateStart: string;
  type: string;

  // Employee Details
  positionId: number;
  department: number;
  entitle_ot: boolean;
  meal_allowance_paid: boolean;
  operational_allowance_paid: boolean;
  attendance_allowance_paid: boolean;

  // Salary
  salary: string;
  salaryAudit: string;
  safetyAmount: string;
  healthyAmount: string;
  mealAllowance: string;

  // Other
  gradeId: number;
  benefit: string;
  remark: string;
  inputTest: string;

  // Settings -> ChangePassWord
  newPass: string;
  confirmPass: string;
}
