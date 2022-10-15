import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap, delay } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httClient: HttpClient) { }

  list() {
    return this.httClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(600),
      tap(courses => console.log(courses))
    );
  }
}
