// ==============================================
// 제2장 노드 간단하게 살펴보기
// ==============================================

// ----------------------------------------------
// 실행 소요 시간 측정하기
// ----------------------------------------------
var result = 0;

console.time('duration_sum');

for (var i = 1; i <= 1000; i++) {
	result += i;
}

console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물 : %d', result);

// ----------------------------------------------
// 전역변수
// __filename, __dirname
// ----------------------------------------------
console.log('현재 실행한 파일의 이름 : %s', __filename);
console.log('현재 실행한 파일의 패스 : %s', __dirname);

// ----------------------------------------------
// dir() 메소드 사용하기
// ----------------------------------------------
var Person = {name:"소녀시대", age:20};
console.dir(Person);

// ----------------------------------------------
// Process 객체
// ----------------------------------------------
console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv);


if (process.argv.length > 2) {
	console.log('세번째 파라미터의 값 : %s', process.argv[2]);
}

process.argv.forEach(function(item, index) {
	console.log(index + ' : ', item);
});

// ----------------------------------------------
// env 객체 사용하여 환경변수의 값 알아내기
// ----------------------------------------------
console.dir(process.env);
//console.log('OS 환경변수의 값 : ' + process.env[OS]);

// ----------------------------------------------
// 모 듈
// ----------------------------------------------
var calc = {};
calc.add = function(a, b) {
	return a + b;
}

console.log('모듈로 분리하기 전 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));

// ----------------------------------------------
// 모듈
// * 더하기 함수를 모듈로 분리한 calc.js 모듈 파일을 불러들임
// * 모듈 파일의 exports가 불러들인 객체라고 생각하면 됨
// ----------------------------------------------
var calc = require('./calc');
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));

var calc2 = require('./calc2');
console.log('모듈로 분리한 후 - calc2.add 함수 호출 결과 : %d', calc2.add(10, 10));

// ----------------------------------------------
// * 외부 모듈인 nconf를 이용해 환경변수 확인하기
// ----------------------------------------------
var nconf = require('nconf');
nconf.env();
console.log('OS 환경변수의 값 : %s', nconf.get('OS'));
console.dir(nconf);
