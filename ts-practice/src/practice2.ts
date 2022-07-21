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
  //shape interface에는 getArea라는 함수가 꼭 있어야 하며, 해당 함수의 반환값은 숫자이다. 
}
class Circle implements Shape {
  radius : number; //멤버 변수 radius 값을 설정함.

  constructor(radius: number) {
    this.radius = radius;
  }

  //너비를 가져오는 함수를 구현
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width : number;
  height : number;
  constructor(width: number, height: number){
    this.width = width;
    this.height = height;
  }
  getArea(){
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea())
})