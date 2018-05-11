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
    const mySquare_2 = this.createSquare({ width: 100, opacity: 0.5 });

    const squareOptions = { colour: 'red', width: 100 };
    const mySquare_3 = this.createSquare(squareOptions);

    // 函数类型
    let mySearch: SearchFunc;
    mySearch = (src: string, sub: string): boolean => {
      const result = src.search(sub);
      return result > -1;
    };

    const mySearch_1 = <SearchFunc>((src, sub) => {
      return false;
    });

    mySearch_1('1,2', '2');

    // 所以接口实现
    const myArray = <StringArray> {
      1 : 'Bob',
      3 : 'Fred'
    };
    console.log(myArray['1']);

    const digital = this.createClock(DigitalClock, 12, 17);
    const analog = this.createClock(AnalogClock, 7, 32);

    // 接口集成类
    const img = new Image();
    img.select();
    console.log(img.test);
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

  createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
  }

  createDig(ctor: ClockConstructor) {
    return new ctor(1, 2);
  }

  getCounter() {
    // tslint:disable-next-line:no-shadowed-variable
    const counter = <Counter>function(start: number) { };
    counter.interval = 4;
    counter.reset = function() {};
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
  // 额外的属性检查
  [key: string]: any;
}

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

// 函数类型
type SearchFunction = (source: string, subString: string) => boolean;
// tslint:disable-next-line:no-empty-interface
interface SearchFunc {
  // tslint:disable-next-line:callable-types
  (source: string, subString: string): boolean;
}

// 可索引的类型
interface StringArray {
  [index: number]: string;
}

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: string]: Dog;
  // [x: number]: Animal;
}
// 接口实现
interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  tick() {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line:member-ordering
  currentTime: Date;
  constructor() {}
}

// 类静态部分与实例部分的区别
interface ClockConstructor {
  new (hour: number, minute: number);
}


interface ClockInterface {
  tick();
}

class DigitalClock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) { }
  tick() {
      console.log('beep beep');
  }
}

class AnalogClock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) { }
  tick() {
      console.log('tick tock');
  }
}

// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

// 接口继承类
class Control {
  private state: any;
  test: string;
}
// 1. 接口集成类
interface SelectableControl extends Control {
  select(): void;
}
// 2. 类实现接口
// 错误：“Image”类型缺少“state”属性。
class Image extends Control implements SelectableControl {
  select() {
    this.test = '图片名称';
  }
}

class Location {
}
