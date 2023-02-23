import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'import-data-demo';

  // exceltoJson: any;

  show: boolean = false;
  public tableNo: any = [];

  public tableData: any;
  public tableTitle: any;

  public recordsPerPage = 10;
  public tableRecords: any = [];
  public data: any = [];


  public uploadData(e: any) {
    console.log(e.target.files[0]);
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(<unknown>e.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });


      /* selected the first sheet */
      const sheets = []
      for (let i = 0; i < wb.SheetNames.length; i++) {
        sheets[i] = wb.SheetNames[i];

        console.log(sheets)
        const wsname: string = sheets[i];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */

        this.data.push(XLSX.utils.sheet_to_json(ws)); // to get 2d array pass 2nd parameter as object {header: 1}
        console.log(this.data[i]); // Data will be logged in array format containing objects

        this.tableData = this.data[i];
        this.tableTitle = Object.keys(this.tableData[i]);
        console.log("tabletitle", this.tableTitle);
        this.tableRecords.push(this.tableData)
        this.tableNo.push(this.tableData);
        // this.tableNo.push(this.tableRecords)
        // this.tableRecords.pop()
      }
      //  return this.tableRecords;
      // this.totalPageCount = this.tableData.length / this.recordsPerPage;
    };
  }

  // onPageChange() {
  //   this.pageStartCount = this.currentPage * this.recordsPerPage;
  //   this.pageEndCount = this.pageStartCount + this.recordsPerPage;
  //   this.tableRecords = this.tableData.slice(
  //     this.pageStartCount,
  //     this.pageEndCount
  //   );
  // }
  logData() {
    this.show = true;
    // for(let i=0;i<this.tableNo.length;i++){
    //   this.tableTitle = Object.keys(this.tableData[i]);
    //   this.tableRecords.push(this.tableData)
    //   console.log(this.tableRecords)
    //   this.tableNo.push(this.tableData);
    //   console.log("Actual data",this.tableNo);
    // }
    // return this.tableNo
  }

}
