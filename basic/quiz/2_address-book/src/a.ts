function fetchItems() : string[]{
  let items = ['a', 'b', 'c'];
  return items;
}
var result = fetchItems();
console.log(result);

//비동기 적인 코드

function fetchItems1():Promise<string[]>{ // [unKnown = 알 수 없다는 뜻] 이를 통해 Promise은 기본적으로 제너릭을 이용해서 정의가 되고 있다.
  var items: string[] = ['a','b','c']; // 얘네들이 string으로 담긴 문자열이다.
  //Promise는 타입정의가 전부 일치해야한다. 그래야 반환할 때 에러없이 사용할 수 있다.
  return new Promise(function(resolve){
    resolve(items);
  })
}

fetchItems();