import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../pipes/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { AppRoutingModule } from '../app-routing.module';
import { CourseComponent } from './course/course.component';
import { CourseNavComponent } from './course-nav/course-nav.component';
import { ReviewsModule } from '../reviews/reviews.module';
import { MatCardModule, MatButtonToggleModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PipeModule,
    ReactiveFormsModule,
    ReviewsModule,
    FormsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CoursesComponent, CourseComponent, CourseNavComponent],
})
export class CoursesModule {}
