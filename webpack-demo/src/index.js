import _ from 'lodash';
import './style.css';
import img from './img.png';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('div');

  // 이제 Lodash를 스크립트로 가져왔습니다.
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 원래 있던 div 에 이미지를 추가합니다.
  const myImg = new Image();
  myImg.src = img;

  element.appendChild(myImg);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());