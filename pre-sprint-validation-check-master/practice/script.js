// [엘리먼트 변수]
// 여기에 querySelector를 이용해 상호작용을 해야 하는 모든 엘리먼트를 전역변수로 지정하세요
//const elErrorMessage = document.querySelector('#invalid-message');
const btnSignup = document.querySelector('#btn-signup')
//const checkid = document.querySelector('#checkID');
//const pwValue = document.querySelector('#passWord').value;

// [이벤트 핸들러]
function handleBtnSignupClick() {
  console.log('회원가입 버튼을 클릭했군요!');
  //console.log(id.value);
  //console.log(idValue);

  /*

  버튼을 클릭했을 때, 작동해야하는 시나리오의 예시를 소개합니다.
  예를 들어, 아이디가 8자 이상인지 확인하려면,

  1. 아이디 input box를 변수로 지정한다
  2. input box에 적힌 값을 얻어온다
  3. input 값을 함수를 이용해 검증한다
  4. 함수 리턴값 (true 또는 false)을 통해 유효성을 검증하여 로직을 분기한다
  5. 유효하다면, 정상적으로 로그인했다고 alert 창을 띄운다
  6. 유효하지 않다면
    6-1. 아이디 입력창 옆에 오류 메시지를 표시한다
    6-2. 아이디 입력창에 붉은색의 스타일을 적용한다

  */
  //let check = document.createElement('id');
  const idchk =  document.querySelector('#checkID');
  const pwchk =  document.querySelector('#checkPW');
  const pwchk2 =  document.querySelector('#checkPW2');
  if(moreThanLength(id.value, 8) && onlyNumberAndEnglish(id.value)){
    idchk.textContent = '✅';
    idchk.parentElement.style.backgroundColor = "white";
  }
  else{
    idchk.textContent = '❌ 아이디는 8글자이상이여야합니다.';
    //passwordSpan.style.color = "red";
    idchk.parentElement.style.backgroundColor = "#ffc1e3";
  }
  
  
  if(pw.value==='' && pw2.value===''){
    pwchk.textContent='❌';
    pwchk2.textContent = '❌ 비밀번호가 같지않습니다.';
    pw.parentElement.style.backgroundColor = "#ffc1e3";
    pw2.parentElement.style.backgroundColor = "#ffc1e3";
  }

  else if(pw.value===pw2.value){
    if(strongPassword(pw.value)===false && strongPassword(pw2.value)===false){
      pwchk.textContent='❌';
      pwchk2.textContent = '❌ 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함해야합니다.';
      pw.parentElement.style.backgroundColor = "#ffc1e3";
      pw2.parentElement.style.backgroundColor = "#ffc1e3";
    }
    else{
      pwchk.textContent = '✅';
      pwchk2.textContent = '✅';

      pw.parentElement.style.backgroundColor = "white";
      pw2.parentElement.style.backgroundColor = "white";
    }
  }
 

   // alert=("로그인에 성공했습니다.");

}


// [유효성 검증 함수]
// 필요에 따라서 여러분들이 사용할 유효성 검증 함수를 추가하세요.
function moreThanLength(str, n) {
  return str.length >= n; // 항상 true 또는 false로 리턴하게 만드는 게 좋습니다.
}

function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

// [시각적 피드백]
function displayErrorMessage(message) {
  // 직접 작성하세요
  //elErrorMessage.classList.add('show');
  //elErrorMessage.textContent = message;
}

// [엘리먼트와 이벤트 핸들러의 연결]
btnSignup.onclick = handleBtnSignupClick;


//

displayErrorMessage('insufficient requirements to register')