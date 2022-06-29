let count = 0;
count += 1;
// count = "갑자기 분위기 문자열";
const message:string = 'hello';
const done:boolean = true;
const number:number[] = [1,2,3];
const messages: string[] = ["hello", "how", "are", "you"];

// messages.push(1); //숫자 넣으려고 하면 안됨

let mightBeUndefined: string | undefined = undefined; //string일수도 undefined일수도..
let nullableNumber: number | null = null; //number거나 null

let color: 'red'|'orange'|'yellow' = 'red'; //셋중 하나임
color = "yellow";
// color = "green"; //셋중 없으니 에러