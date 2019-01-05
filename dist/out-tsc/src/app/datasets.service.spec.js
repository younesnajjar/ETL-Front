import { TestBed } from '@angular/core/testing';
import { DatasetsService } from './datasets.service';
describe('DatasetsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DatasetsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=datasets.service.spec.js.map