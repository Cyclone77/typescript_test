import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-face',
  templateUrl: './inter-face.component.html',
  styleUrls: ['./inter-face.component.css']
})
export class InterFaceComponent implements OnInit {

  p1: Point = { x: 10, y: 10 } ;
  p2 = <Point>{ x: 5, y: 6 };
  p3 = {} as Point;
  constructor() { }

  ngOnInit() {

    // 接口初探
    this.printLabel(this.myObj);
    const mySquare = this.createSquare({color: 'black', width: 40});
    console.log(mySquare);

    // 只读属性
    const a: number[] = [1, 2, 3, 4];
    const ro: ReadonlyArray<number> = Array.prototype.concat(a);
    console.log(ro[2]);
    console.log(a === ro);
    const b: number[] = <number[]>ro;
    console.log(b);

    // 额外的属性检查 可以类型断言
    const mySquare_1 = this.createSquare(<SquareConfig>{ colour: 'red', width: 100 });
    console.log(mySquare);
  }

  // 接口初探
  // tslint:disable-next-line:member-ordering
  myObj = { size: 10, label: 'Size 10 Object' };
  printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
  }

  createSquare(config: SquareConfig): { color: string, area: number} {
    const newSquare = {color: 'white', area: 100};
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }

    return newSquare;
  }

}

// 接口初探
interface LabelledValue {
  label: string;
}

// 可选属性
interface SquareConfig {
  color?: string;
  width?: number;
}

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

// 额外的属性检查
