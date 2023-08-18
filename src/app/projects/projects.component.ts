import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Advance ruling request application for the customs.',
      technologies: 'Spring boot 3,Angular 16,Keycloak,Minio',
      description: [
        'Creation of all templates with their respective APIs,creation of the home page;',
        'CRUD registration form for customs agents with their,various profiles',
      ],
    },
    {
      title: 'Learn how to Building an Issue Tracking System using Reactive Forms',
      technologies: 'Typescript, Angular,Clarity',
      description: [
        'Displaying an overview of issues',
        'Reporting new issues',
      ],
    },
    {
      title: 'Customer file tracking application for OLEA (health insurance company)',
      technologies: 'Odoo 15, html,CSS,XML,PYTHON',
      description: [
        'web portal with form for consulting the status of your file',
        'Addition of a system for monitoring a file by the various players, with their role and profile in the OLEA system',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
