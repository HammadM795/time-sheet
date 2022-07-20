import { Injectable } from '@angular/core';
import { TimeSheet } from 'src/model/timesheet-model';

@Injectable({
  providedIn: 'root'
})
export class TimeSheetService {

  public timeSheetList : TimeSheet[] = [];

  constructor() { }

  setDefaultValue(){
    let time_sheet_list = localStorage.getItem('time_sheet_list')
    if (time_sheet_list == undefined){
      localStorage.setItem('time_sheet_list', '[]')
    }
  }

  getTimeSheetList(): Array<TimeSheet> {
    let time_sheet_list = localStorage.getItem('time_sheet_list')
    if (time_sheet_list != undefined) {
      return JSON.parse(time_sheet_list);
    }
    return []
  }

  saveTimeSheet(obj: TimeSheet) {
    let time_sheet_list = localStorage.getItem('time_sheet_list')
    if (time_sheet_list != undefined) {
     let t : TimeSheet[] =  JSON.parse(time_sheet_list);
     debugger
      console.log(t)
      t.push(obj);
      localStorage.setItem('time_sheet_list', JSON.stringify(t))
    }

  }

  updateTimeSheet(obj: TimeSheet) {

  }

  deleteTimeSheet(id: number) {

  }
}
