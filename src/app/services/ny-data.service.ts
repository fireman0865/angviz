import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NyDataService {
    constructor(private http: HttpClient) {}

    /**
     * https://data.ny.gov/Recreation/State-Park-Facility-Points-with-Playgrounds/44wf-4yxs
     */
    getFacilityPointsWithPlaygrounds(): Observable<any> {
        return this.http.get('https://data.ny.gov/resource/44wf-4yxs.json');
    }
}
