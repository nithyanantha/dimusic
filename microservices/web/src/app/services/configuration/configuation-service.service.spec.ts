/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfiguationServiceService } from './configuation-service.service';

describe('ConfiguationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfiguationServiceService]
    });
  });

  it('should ...', inject([ConfiguationServiceService], (service: ConfiguationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
