import { TestBed } from '@angular/core/testing';

import { TimeSheetService } from './timesheet.service';

describe('TimeSheetService', () => {
  let service: TimeSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a time sheet in an array',()=>{
    const createObj = {
      id: 1,
      employeeName: "Qayyum fridi",
      employeeId: 4,
      timeSheetDate: new Date(),
      projectName: 'Citadel',
      projectId: 1,
      workTypeId: 1
      workTypeTitle: string;
      assignedTask: string;
      houseSpent: number;
      statusId: number;
      status: string;
      comment: string;
      createdDate: Date;
      modifiedDate: Date;
}
    service.saveTimeSheet();
    expect(service.quoteList.length).toBeGreaterThanOrEqual(1);
  })
});
