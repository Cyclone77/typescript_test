import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatype',
  templateUrl: './datatype.component.html',
  styleUrls: ['./datatype.component.css']
})
export class DatatypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let fibonacci: (number | string)[] = [1, 1, 2, 3, 5];
    fibonacci = [1, '1', 2, 3, 5];

    const fibonacci1: Array<number> = [1, 1, 2, 3, 5];
    const fibonacci2: NumberArray = [1, 1, 2, 3, 5];
    const fibonacci3: NumberArray = {
      1: 2,
      2: 2
    };
    const args: IArguments = arguments;


    // tslint:disable-next-line:no-shadowed-variable
    const mySum = function (x: number, y: number): number {
      return x + y;
    };

    console.log(mySum(1, 2));

    let mySearch: SearchFunc;
    mySearch = (source: string, subString: string) => {
        return source.search(subString) !== -1;
    };

    function push(array: any[], ...items: any[]) {
      items.forEach(function(item) {
          array.push(item);
      });
    }

    const a = [];
    push(a, 1, 2, 3);
    console.log(a , 'dddd');

    console.log(this.reverse('xyzahjlt'));

    let x: [string, number];
    x = ['hello', 10]; // OK
    this.setColor(Color.Blue);
    console.log(this.getLength(12344));
  }
  reverse(x: number): number;
  reverse(x: string): string;
  reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
  }

  getLength(something: string | number): number {
    if ((something as string).length) {
      return (<string>something).length;
    } else {
        return something.toString().length;
    }
  }

  setColor(color: Color): void {}
}

interface NumberArray {
  [index: number]: number;
}

interface SearchFunc {
  // tslint:disable-next-line:callable-types
  (source: string, subString: string): boolean;
}

enum Color {Red, Green, Blue}
