import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatype-export',
  templateUrl: './datatype-export.component.html',
  styleUrls: ['./datatype-export.component.css']
})
export class DatatypeExportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // 类型别名
    type GLString = string;
    type GLFunction = () => any;
    const func = (n: GLString | GLFunction) => {
      if (typeof n === 'string') {
        return n;
      } else {
        return n();
      }
    };

    console.log(func(() => 1 + 1));

    // 字符串字面量类型
    type EventNames = 'click' | 'scroll' | 'mousemove';
    function handleEvent(ele: HTMLElement, event: EventNames) {
        // do something
    }

    handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
    // handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'

    // let xcatliu: [string, number];
    // xcatliu = ['Xcat Liu', 25, 'http://xcatliu.com/'];
    console.log(this.setWeek(Days.Sat));

    // 类
    const a = new Animal('Jack');
    console.log(Animal.isAnimal(a)); // true
    // console.log(a.name);
    console.log(Animal.age);
    // a.isAnimal(a);
    // 抽象类 只能用于子类来集成

  }

  setWeek(day: Days) {
    return day;
  }

}

enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat = 'S'}

// tslint:disable-next-line:class-name
/**
 * 抽象类 任何是事物
 */
// tslint:disable-next-line:class-name
abstract class anything {
  constructor() {}
  move() {
    console.log('行走');
  }
  abstract spack();
}

// tslint:disable-next-line:class-name
class person {}

class Animal extends anything {
  static age = 22;
  protected name: string;
  constructor(name) {
    super();
    this.name = name;
  }
  static isAnimal(a) {
      return a instanceof Animal;
  }
  spack() {
    console.log('说话');
  }
}
