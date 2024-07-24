import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IBusiness } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

// TODO: Montar logica que quando realizar o filtro e não achar valores, exibir uma mensagem de erro

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit, AfterViewInit {
  // Table
  displayedColumns: string[] = ['name', 'business', 'valuation', 'active', 'action'];
  dataSource = new MatTableDataSource<IBusiness>([]);

  // Paginator
  resultsLength = 0;
  pageSize = 5;
  orderByAsc = true;

  // Request
  loading = false;
  errorMessage = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const pageIndex = params['pageIndex'] ? parseInt(params['pageIndex'], 10) : 0;
      const pageSize = params['pageSize'] ? parseInt(params['pageSize'], 10) : 5;
      const orderByAsc = params['orderByAsc'] ? JSON.parse(params['orderByAsc']) : true;

      this.pageSize = pageSize;
      this.orderByAsc = orderByAsc;
      this.fetchData(pageIndex, pageSize);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchData(pageIndex: number, pageSize: number) {
    this.loading = true;

    this.companyService.fetchCompanies().subscribe({
      next: (value) => {
        this.dataSource.data = value.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
        this.resultsLength = value.length;
        this.paginator.pageIndex = pageIndex;
        this.paginator.pageSize = pageSize;
      },
      error: (error) => {
        this.errorMessage = error?.message || 'An error occurred';
        this.loading = false;

        console.error('There was an error!', error);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onPageChange(event: PageEvent) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { pageIndex: event.pageIndex, pageSize: event.pageSize,
        orderByAsc: this.orderByAsc
       },
      queryParamsHandling: 'merge'
    });
    this.fetchData(event.pageIndex, event.pageSize);
  }

  viewCampaign(id: string) {
    this.router.navigate([`/campaigns/${id}`]);
  }

    orderByAscName(orderByAsc: boolean) {
    const data = this.dataSource.data;
    this.dataSource.data = data.sort((a, b) => {
      return orderByAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });
    this.orderByAsc = orderByAsc;

  }
}
