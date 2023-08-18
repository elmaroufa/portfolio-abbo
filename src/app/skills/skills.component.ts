import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Typescript',
      level: 'Intermidiate',
      rating: 60,
    },

    {
      name: 'HTML, CSS, JS',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'JAVA, SPRING BOOT',
      level: 'Intermidiate',
      rating: 65,
    },
    {
      name: 'Python,ODOO',
      level: 'Intermidiate',
      rating: 65,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
