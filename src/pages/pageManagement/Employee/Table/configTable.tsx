export interface data {
  isChecked: boolean;
  id: string;
  staff_id: string;
  gender: string;
  name: string;
  card_number: string;
  bank_account_no: string;
  family_card_number: string;
  marriage_code: string;
  mother_name: string;
  dob: string;
  home_address_1: string;
  home_address_2: string;
  nc_id: string;
  contract_start_date: string;
  contract_first: string;
  contract_second: string;
  contract_end: string;
  department_name: string;
  type: string;
  basic_salary: string;
  position_name: string;
  entitle_ot: string;
  meal_allowance_paid: string;
  grade_name: string;
}

export interface paginate {
  current_page: number;
  per_page: number;
  from: number;
  to: number;
  total: number;
  first_page_url: string;
  last_page_url: string;
  pre_page_url: string;
  next_page_url: string;
}

export const TH = [
  "NIK",
  "Gender",
  "Name",
  "Bank Card No",
  "Bank Account No",
  "Family Card No.",
  "Marriage Status",
  "Mother Name",
  "Place and Date Birth",
  "Home Address",
  "National ID Card No.",
  "Date Start",
  "First",
  "Second",
  "End",
  "Department",
  "Employee Type",
  "Basic Salary",
  "Position",
  "O/T paid",
  "Meal allowance",
  "Grading",
];

export const DATAS = [
  "name",
  "card_number",
  "bank_account_no",
  "family_card_number",
  "marriage_code",
  "mother_name",
  "dob",
  "home_address_1",
  "home_address_2",
  "nc_id",
  "contract_start_date",
  "contract_first",
  "contract_second",
  "contract_end",
  "department_name",
  "type",
  "basic_salary",
  "position_name",
  "entitle_ot",
  "meal_allowance_paid",
  "grade_name",
];
