import { Injectable } from '@angular/core';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';
@Injectable()
export class PdfService {
    constructor() { }

    public exportPdf(list: any[], pdfName: string, name? : string): void {
        const doc = new jsPDF('l', 'mm', 'a4'); 
        var head = Array.from(Object.entries(list[0]), ([key, value]) => key);
        var data = []
        for (let index = 0; index < list.length; index++) {
            data.push(Array.from(Object.entries(list[index]), ([key, value]) => value));
        }

        autoTable(doc, {
            head: [head],
            body: data,
            didDrawCell: (data) => { },
        });
        doc.save(`${pdfName}.pdf`);
    }

    public openViewPDF(name: string): void {
        let DATA: any = document.getElementById('htmlData');
        html2canvas(DATA).then((canvas) => {
          let fileWidth = 208;
          let fileHeight = (canvas.height * fileWidth) / canvas.width;
          const FILEURI = canvas.toDataURL('image/png');
          let PDF = new jsPDF('p', 'mm', 'a4');
          let position = 0;
          PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
        //   PDF.sa('angular-demo.pdf');

        PDF.setProperties({
            title: name
        });
          window.open(PDF.output('bloburl'))
        });
      }
}