import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    console.log('加载中……');


    /**
     * 类型断言
     */
    const square = <Square>{};
    square.color = 'blue';
    square.sideLength = 40;

  }



}

interface Shape {
  color: string;
}

// tslint:disable-next-line:no-empty-interface
interface Square extends Shape {
  sideLength: number;
}
