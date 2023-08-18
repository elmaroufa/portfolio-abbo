import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Saly Aboo'],
    ['DOB', '16/07/1992'],
    ['Work Exp', '6 Years'],
    ['Education', 'B.S (2017)'],
    ['Interests', 'Book reading, design thinking'],
  ];
  url = '<a class="servoo-link" href="https://www.servoo.cm/">Servoo</a>'
  aboutMe: string[] = [
    'Hi, I am a Software Developer with 5 years of experience in software industry.',
    'I had the opportunity to work with senior developers for three years and I learned a lot from them. Today, I continue my adventure with Odoo, Python, Java, Spring-Boot and Angular. Solving problems and bringing something useful is one of the things that I am passionate about in the software industry.',
    'Design thinking, experience design and innovation are my favorite topics of discussion.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
