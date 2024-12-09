import { TestBed } from '@angular/core/testing';

import { ToDoService } from './todoservice.service';

describe('ToDoService', () => {
  let service: ToDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ToDoService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
