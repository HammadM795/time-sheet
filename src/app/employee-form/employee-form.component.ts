import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api'
import { Employee, EmployeeList } from 'src/model/employee-model';
import { Project, ProjectList } from 'src/model/project-model';
import { WorkType, WorkTypeList } from 'src/model/work-type-model';
import { WorkStatus, WorkStatusList } from 'src/model/work-status-model';
import { TimeSheet } from 'src/model/timesheet-model';
import { TimeSheetService } from 'src/service/timesheet.service';
interface Name {
  name: string,
}


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  msgs1!: Message[];
  msgs2!: Message[];
  projectList = ProjectList
  defaultProject = <Project>{};
  employeeList = EmployeeList;
  defaultEmployee = <Employee>{};
  hoursSpent: number = 0;
  timeSheetDate: Date = new Date();
  workTypeList = WorkTypeList;
  defaultWorType = <WorkType>{};
  workStatusList = WorkStatusList;
  defaultWorkStatus = <WorkStatus>{}
  obj = <TimeSheet>{};
  employee!: Name[];
  project!: Name[];
  worktype!: Name[];
  status!: Name[];
  employee1!: Name;
  project1!: Name;
  worktype1!: Name;
  status1!: Name;
  selectedCountry!: string;
  countries!: any[];
  groupedCities!: SelectItemGroup[];
  lazyItems!: SelectItem[];
  selectedItem1!: string;
  selectedItem2!: string;
  loading: boolean = false;
  loadLazyTimeout!: any;

  showClientError: boolean = false;

  //DatePicker/Calender
  date1!: Date;
  date2!: Date;
  date3!: Date;
  date4!: Date;
  date5!: Date;
  date6!: Date;
  date7!: Date;
  date8!: Date;
  date9!: Date;
  date10!: Date;
  date11!: Date;
  date12!: Date;
  date14!: Date;
  dates!: Date[];
  rangeDates!: Date[];
  minDate!: Date;
  maxDate!: Date;
  invalidDates!: Array<Date>

  timeSheetList : TimeSheet[] = [];

  ngOnInit() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
    this.defaultFormValues();
    this._timeSheetService.setDefaultValue();
    this.timeSheetList = this._timeSheetService.getTimeSheetList();
    console.log(this._timeSheetService.getTimeSheetList())
  }

  defaultFormValues() {
    this.defaultEmployee = this.employeeList[0]
    this.defaultProject = this.projectList[0]
    this.defaultWorType = this.workTypeList[0];
    this.defaultWorkStatus = this.workStatusList[0];
    this.obj.comment = "";
    this.obj.houseSpent = 0;
    this.obj.assignedTask = "";
    this.obj.timeSheetDate = new Date();
  }

  //Date-to-Day

  day1: Date = new Date();
  day: string = "";

  onBlurMethod(e: any) {
    let dummy = this.date1.getDay();
    switch (dummy) {
      case 0:
        this.day = "(Sunday)";
        break;
      case 1:
        this.day = "(Monday)";
        break;
      case 2:
        this.day = "(Tuesday)";
        break;
      case 3:
        this.day = "(Wednesday)";
        break;
      case 4:
        this.day = "(Thursday)";
        break;
      case 5:
        this.day = "(Friday)";
        break;
      case 6:
        this.day = "(Saturday)";
    }
  }
  // console: any.log(day);


  constructor(private _timeSheetService: TimeSheetService) {

    let n = 1;
    console.log(n++)
    console.log(++n)
    console.log(n)

    this.lazyItems = Array.from({ length: 100000 });
  }

  onLazyLoad(event: { first: any; last: any; }) {
    this.loading = true;

    if (this.loadLazyTimeout) {
      clearTimeout(this.loadLazyTimeout);
    }

    //imitate delay of a backend call
    this.loadLazyTimeout = setTimeout(() => {
      const { first, last } = event;
      const lazyItems = [...this.lazyItems];

      for (let i = first; i < last; i++) {
        lazyItems[i] = { label: `Item #${i}`, value: i };
      }

      this.lazyItems = lazyItems;
      this.loading = false;
    }, Math.random() * 1000 + 250);
  }

  saveTimeSheet() {
    this.showClientError = false;

    if (this.obj.assignedTask != "" && (this.obj.houseSpent % 1 === 0) && (new Date(this.obj.timeSheetDate).toString() !== 'Invalid Date')) {
      this.obj.id = this.timeSheetList.length + 1;
      this.obj.employeeId = this.defaultEmployee.id;
      this.obj.employeeName = this.defaultEmployee.title;
      this.obj.projectId = this.defaultProject.id;
      this.obj.projectName = this.defaultProject.title;
      this.obj.workTypeId = this.defaultWorType.id;
      this.obj.workTypeTitle = this.defaultWorType.title;
      this.obj.statusId = this.defaultWorkStatus.id;
      this.obj.status = this.defaultWorkStatus.title;
      this._timeSheetService.saveTimeSheet(this.obj)
    }
    else {
      this.showClientError = true;
      // this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
      this.msgs2 = [{ severity: 'error', summary: 'Error', detail: 'Message Content' }]
    }
  }
}
