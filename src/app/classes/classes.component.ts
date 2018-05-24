import { Component, OnInit } from '@angular/core';
import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const greeter = new Greeter('world');
    console.log(greeter.greet());

    const sam = new Snake('Sammy the Python');
    sam.move();
    const tom: Horse = new Horse('Tommy the Palomino');
    tom.move(45);

    const howard = new Employee('secret passcode');
    console.log(howard.fullName);
    // console.log(howard.name); // 错误

    // const john = new Person('John'); // 错误: 'Person' 的构造函数是被保护的.

    const dad = new Octopus('Man with the 8 strong legs');
    // dad.name = 'Man with the 3-piece suit'; // 错误! name 是只读的.

    const aa = new Animal('测试');
    aa.move();

    const employee = new Employee('测试');
    employee.fullName = 'Bob Smith';
    if (employee.fullName) {
        alert(employee.fullName);
    }

    const grid1 = new Grid(1.0);  // 1x scale
    const grid2 = new Grid(5.0);  // 5x scale

    console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
    console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

    let department: Department; // 允许创建一个对抽象类型的引用
    // department = new Department(); // 错误: 不能创建一个抽象类的实例
    department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
    department.printName();
    department.printMeeting();
    // department.generateReports(); // 错误: 方法在声明的抽象类中不存在
  }

}

class Greeter {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }
  greet() {
      return 'Hello, ' + this.greeting;
  }
}

class Animal {
  constructor(protected name: string) { }
  move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
      console.log('Slithering...');
      super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 45) {
      console.log('Galloping...');
      super.move(distanceInMeters);
  }
}

class Rhino extends Animal {
  constructor() { super('Rhino'); }
}
class Person {
  protected name: string;
  protected constructor(name: string) { this.name = name; }
}

// 只读readonly修饰符
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor (theName: string) {
      this.name = theName;
  }
}

class Employee {
  constructor(private passcode) {}
  private _fullName: string;

  get fullName(): string {
      return this._fullName;
  }

  set fullName(newName: string) {
      if (this.passcode && this.passcode === 'secret passcode') {
          this._fullName = newName;
      } else {
          console.log('Error: Unauthorized update of employee!');
      }
  }
}

// 静态属性
class Grid {
  static origin = {x: 0, y: 0};
  calculateDistanceFromOrigin(point: { x: number; y: number; }) {
      const xDist = (point.x - Grid.origin.x);
      const yDist = (point.y - Grid.origin.y);
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor (public scale: number) { }
}

// 抽象类
abstract class Department {

  constructor(public name: string) {
  }

  printName(): void {
      console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
      console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
      console.log('Generating accounting reports...');
  }
}
