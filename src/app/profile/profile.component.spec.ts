import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';

import { AuthService } from '../firebase/auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
class MockAuth {
  user = new BehaviorSubject({});
}

import { UserService } from '../core/user.service';
class MockUser {
  getUser() {
    return new BehaviorSubject({});
  }
}

import { LocalStorageService } from '../core/local-storage.service';
class MockLocalStorage {

}

import { ReviewService } from '../reviews/review.service';
class MockReview {

}

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        {provide: AuthService, useClass: MockAuth},
        {provide: UserService, useClass: MockUser},
        {provide: ReviewService, useClass: MockReview},
        {provide: LocalStorageService, useClass: MockLocalStorage}
      ],
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
