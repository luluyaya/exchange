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
    { id: 1, title: '教務處通知--欲申請提前一學期畢業學生，請注意申請期限', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 2, title: '東吳大學外國語文學院《東吳外語學報》第48期徵稿，歡迎本校師生及相關研究同仁踴躍投稿。', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 3, title: '世新大學人文社會學院《人文社會學報》第20期徵稿，歡迎本校師生及相關研究同仁踴躍投稿。', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 4, title: '南華大學哲學與生命教育學報《揭諦》徵稿，歡迎本校師生及相關研究同仁踴躍投稿。', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 5, title: '國立高雄師範大學《高雄師大學報-人文與藝術類、教育與社會科學類、自然科學與科技類》徵稿，歡迎本校師生及相關研究同仁踴躍投稿。', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 6, title: '教務處通知--欲申請提前一學期畢業學生，請注意申請期限', content: 'dfdfdfdfsf', showDateTime: new Date() },
    { id: 7, title: '東吳大學外國語文學院《東吳外語學報》第48期徵稿，歡迎本校師生及相關研究同仁踴躍投稿。', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 8, title: '世新大學人文社會學院《人文社會學報》第20期徵稿，歡迎本校師生及相關研究同仁踴躍投稿', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 9, title: '南華大學哲學與生命教育學報《揭諦》徵稿，歡迎本校師生及相關研究同仁踴躍投稿。', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 10, title: '南華大學哲學與生命教育學報《揭諦》徵稿，歡迎本校師生及相關研究同仁踴躍投稿。', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 11, title: '教務處通知--欲申請提前一學期畢業學生，請注意申請期限', content: 'dfdfdfdfsf', showDateTime: new Date() },
    { id: 12, title: '東吳大學外國語文學院《東吳外語學報》第48期徵稿，歡迎本校師生及相關研究同仁踴躍投稿。', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 13, title: '世新大學人文社會學院《人文社會學報》第20期徵稿，歡迎本校師生及相關研究同仁踴躍投稿', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 14, title: '南華大學哲學與生命教育學報《揭諦》徵稿，歡迎本校師生及相關研究同仁踴躍投稿。', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
    { id: 15, title: '南華大學哲學與生命教育學報《揭諦》徵稿，歡迎本校師生及相關研究同仁踴躍投稿。', content: '優魯好棒優魯好棒優魯好棒優魯好棒優魯好棒', showDateTime: new Date() },
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
