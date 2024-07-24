import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBusiness } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-id-company',
  templateUrl: './id-company.component.html',
  styleUrls: ['./id-company.component.scss']
})
export class IdCompanyComponent implements OnInit {
  company!: IBusiness;

 constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.fetchCompany(Number(id));
      }
    });

  }

  fetchCompany(id: number): void {
    this.companyService.fetchCompanyById(id).subscribe({
      next: (company: IBusiness) => {
        this.company = company;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

}
