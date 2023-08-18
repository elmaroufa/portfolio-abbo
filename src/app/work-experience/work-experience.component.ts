import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Developer Java/Odoo',
      company: 'SERVOO',
      duration: 'Jan 2023 - Now',
      description: [
        'Work on an anticipated customs application (spring boot,angular)',
        'Development of an association management application on odoo 15',
        'odoo functional support at APM (shipping agency) logistics, accounting,...'
      ],
    },
    {
      role: 'IT VAS / IT Support',
      company: 'Nexttel Cameroon S.A',
      duration: 'October 2020 - December 2022',
      description: [
        'VAS (value-added service) application maintenance; Monitoring of VAS app',
        'It support',
      ],
    },
    {
      role: 'Marketing staff',
      company: 'Nexttel Cameroon S.A',
      duration: 'October 2019 - October 2020',
      description: [
        'sales in shops (call credit, internet packages, internet modems)',
        'ownership and monitoring of credit distribution',
      ],
    },
    {
      role: 'Web Developer',
      company: 'Proxima Technologies Cameroon',
      duration: 'August 2017 September 2019',
      description: [
        'Development of odoo applications (bakery management,school app)',
        'E-commerce website with flask,boostrap,javascript',
      ],
    },
    {
      role: 'PHP Developer',
      company: 'INOV IT',
      duration: 'AUGUST 2016 TO AUGUST 2017',
      description: [
        'Development of customer follow-up module for ERP GAMA insurers',
        'Integration of an insurance vignette management system in the GAMA ERP',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
