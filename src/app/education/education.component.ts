import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "IUT OF DOUALA",
      course: 'B.D Software Engineering',
      duration: '2016-2017',
      score: 'quite well',
    },
    {
      institute: 'IUT OF DOUALA',
      course: 'Associate’s Degree Computer Science',
      duration: '2014-2016',
      score: 'quite well',
    },

  ];

  constructor() {}

  ngOnInit(): void {}
}
