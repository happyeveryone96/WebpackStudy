import _ from 'lodash';
import './style.css';
import img from './img.png';
import Data from './data.xml';
import Notes from './data.csv';

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