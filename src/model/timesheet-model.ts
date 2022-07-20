export interface TimeSheet{
  id: number;
  employeeName: string;
  employeeId: number;
  timeSheetDate: Date;
  projectName: string;
  projectId: number;
  workTypeId: number;
  workTypeTitle: string;
  assignedTask: string;
  houseSpent: number;
  statusId: number;
  status: string;
  comment: string;
  createdDate: Date;
  modifiedDate: Date;
}
