import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../sales/shared/sale.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ResportSaleModel } from '../shared/resport-sale.model';
import { ExcelService } from 'src/app/core/excel.service';
import { PdfService } from 'src/app/core/pdfService';

@Component({
  selector: 'app-report-sale-list',
  templateUrl: './report-sale-list.component.html',
  styleUrls: ['./report-sale-list.component.scss']
})
export class ReportSaleListComponent implements OnInit{
  users: Array<ResportSaleModel>;
  constructor(
    private userService : SaleService, 
    private excelService: ExcelService,
        private pdfService: PdfService,
  ) {
    this.users = new Array<ResportSaleModel>();
  }

  ngOnInit(): void {
    this.userService.getDailyReport().subscribe(res =>{
      this.users = res;
    });
  }

  exportPdf() {
    if (this.users.length > 0) 
      this.pdfService.exportPdf(this.users, 'Report Sales');
  }

  exportExcel() {
    if (this.users.length > 0) 
      this.excelService.exportAsExcelFile(this.users, 'Report Sales');
    }
}