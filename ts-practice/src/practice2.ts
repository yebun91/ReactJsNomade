function sum(x:number, y:number): number {
  return x+y;
}
sum(1,2);

function sumArray(numbers:number[]):number{
  return numbers.reduce((acc, current) => acc+current, 0);
}
const total = sumArray([1,2,3,4,5]);

function retrnNothing():void{
  console.log("아무것도 리턴 안할거지롱");
}

interface Shape {
  getArea():number;
}
class Circle implements Shape {
  constructor(radius: number) {
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}
