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
  // Data
  company!: IBusiness;

  // Request
  loading = false;
  errorMessage = '';

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
    this.loading = true;
    this.companyService.fetchCompanyById(id).subscribe({
      next: (company: IBusiness) => {
        this.company = company;
        this.loading = false;
        this.errorMessage = '';
      },
      error: (error: any) => {
        console.error(error);
        this.errorMessage = error;
        this.loading = false;
      }
    });
  }

  save() {
    alert(`Salvo com sucesso!
    Nome: ${this.company.name || ''}
    CEP: ${this.company.cep || ''}
    Rua: ${this.company.street || ''}
    Bairro: ${this.company.neighborhood || ''}
    Estado: ${this.company.state || ''}
    Cidade: ${this.company.city || ''}
    Business: ${this.company.business || ''}
    Valuation: ${this.company.valuation || ''}
    CNPJ: ${this.company.cnpj || ''}
    Ativo: ${this.company.active || ''}`);
  }

  back(): void {
    window.history.back();
  }

}
