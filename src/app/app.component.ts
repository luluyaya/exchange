import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'exchange-cover';
  displayedColumns: string[] = ['title'];

  constructor(
    public dialog: MatDialog,
  ) { }


  fakeData = [
    { id: 1, title: '優魯好棒', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 2, title: '優魯好棒', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 3, title: '優魯好棒', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 4, title: '優魯好棒', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 5, title: '優魯好棒', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 6, title: '優魯好棒', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
  ]
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.fakeData);
    this.dataSource.paginator = this.paginator;
  }

  newsClick(data: any) {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      width: '1000px',
      data: { title: data.title, content: data.content, showDatetime: data.showDatetime }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
