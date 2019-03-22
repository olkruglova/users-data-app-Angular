import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { DataListService } from './data-list.service';

describe('DataListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ HttpClient, HttpHandler ]
  }));

  it('should be created', () => {
    const service: DataListService = TestBed.get(DataListService);
    expect(service).toBeTruthy();
  });
});
