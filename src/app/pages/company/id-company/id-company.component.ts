import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { provideNgxMask } from 'ngx-mask';
import { IBusiness, IBusinessFormatted } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { Country } from 'src/app/utils/functions/price';
import { mapperGetCompanyFormatted } from 'src/app/utils/mappers/company/getCompany';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-id-company',
  templateUrl: './id-company.component.html',
  styleUrls: ['./id-company.component.scss'],
  providers: [provideNgxMask()],
})
export class IdCompanyComponent implements OnInit, OnDestroy {
  // Data
  company!: IBusinessFormatted;

  // Request
  loading = false;
  errorMessage = '';

  private langChangeSubscription!: Subscription;
  private routeSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.fetchCompany(Number(id));
      }
    });

    this.langChangeSubscription = this.translateService.onLangChange.subscribe(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.fetchCompany(Number(id));
      }
    });
  }

  ngOnDestroy(): void {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  fetchCompany(id: number): void {
    this.loading = true;
    this.companyService.fetchCompanyById(id).subscribe({
      next: (company: IBusiness) => {
        this.company = mapperGetCompanyFormatted(
          company,
          this.translateService.currentLang as Country
        );
        this.loading = false;
        this.errorMessage = '';
      },
      error: (error: any) => {
        console.error(error);
        this.errorMessage = error;
        this.loading = false;
      },
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
