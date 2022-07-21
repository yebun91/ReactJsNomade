interface Person {
  name: string;
  age?: number;
  //물음표가 들어갔다는 것은 설정을 해도 되고 안해도 되는 값이라는 것을 의미함.
}

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
type Developer = Person & {
  skills: string[];
}

const person: Person = {
  name: '김사람',
  age: 20
}

const expert: Developer = {
  name: '김개발',
  skills: ['js', 'react']
}

type People = Person[];
// Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people: People=[person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color2: Color = 'red';
const colors: Color[] = ['red', 'orange']