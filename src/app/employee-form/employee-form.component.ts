import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api'


interface Name {
  name: string,
}


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee!: Name[];
  project!: Name[];
  worktype!: Name[];
  status!: Name[];
  employee1!: Name;
  project1!: Name;
  worktype1!: Name;
  status1!: string;
  selectedCountry!: string;
  countries!: any[];
  groupedCities!: SelectItemGroup[];
  lazyItems!: SelectItem[];
  selectedItem1!: string;
  selectedItem2!: string;
  loading: boolean = false;
  loadLazyTimeout!: any;

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


  constructor() {


    this.employee = [
      { name: 'Awais Saleem' },
      { name: 'Asghir Baig' },
      { name: 'Usman Shami' },
      { name: 'Qayyum Fridi' },
      { name: 'Hassan-al-Badar' },
      { name: 'Sajawal' },
      { name: 'Waseem Mustafa' },
      { name: 'Muhammad Imran' },
      { name: 'Muhammad Tayyab' },
      { name: 'Haseeb Khan' },
      { name: 'Muhammad Waseem' },
      { name: 'Nasir Ahmed' },
      { name: 'Usman Baig' },
      { name: 'Hammad Fazal' },
      { name: 'Shavaiz Ashraf' }

    ];

    this.project = [
      { name: 'Connect' },
      { name: 'Citadel' },
      { name: 'Family Thrift Center', },
      { name: 'Shama Central' },
      { name: 'Shama Jr.' },
      { name: 'Shama English' },
      { name: 'Zilon Operations' },
      { name: 'Holidays' },
      { name: 'Leave' },
      { name: 'HR' },
      { name: 'Meeting' },
      { name: 'Zilon Social Media', }

    ];

    this.worktype = [
      { name: 'QA & Testing' },
      { name: 'Development' },
      { name: 'Project Management' },
      { name: 'Operaions' },
      { name: 'Meeting' },
      { name: 'Requirement' },
      { name: 'Design' },
      { name: 'Unit Test' },
      { name: 'Support' },
      { name: 'Assist' },
      { name: 'Analysis' },
      { name: 'Ideate' },
      { name: 'Social Media Work' }
    ];

    this.status = [
      { name: 'Complete' },
      { name: 'On-Hold' },
      { name: 'Work-in-Progress' },
      { name: 'Delay' }
    ]


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
}
