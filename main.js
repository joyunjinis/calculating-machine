// 전역변수
let currentInput = ""; // 현재 입력값
let previousInput = ""; // 이전 입력값
let operation = null; // 연산자
let displayValue = ""; // 화면에 표시될 값

// 숫자 입력 처리
function press(num) {
  const input = document.getElementById("numberInput");
  currentInput += num;
  displayValue += num;
  input.value = displayValue;
}

// 연산자 설정
function setOperation(op) {
  if (currentInput === "") return;

  if (previousInput !== "") {
    calculate(); // 이전 연산 결과가 있으면 계산
  }

  operation = op;
  previousInput = currentInput;
  displayValue += " " + op + " ";
  currentInput = "";
  document.getElementById("numberInput").value = displayValue;
}

// 계산 실행
function calculate() {
  if (previousInput === "" || currentInput === "") return;

  let result;
  const previous = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(previous) || isNaN(current)) return;

  switch (operation) {
    case "+":
      result = previous + current;
      break;

    case "-":
      result = previous - current;
      break;

    case "×":
      result = previous * current;
      break;

    case "÷":
      if (current === 0) {
        alert("0으로 나눌 수 없습니다.");
        return;
      }
      result = previous / current;
      break;

    case "%":
      result = previous % current;
      break;

    default:
      return;
  }

  // 결과 처리
  currentInput = result.toString();
  operation = null;
  previousInput = "";
  displayValue = currentInput;
  document.getElementById("numberInput").value = displayValue;
}

// 초기화
function ce() {
  currentInput = "";
  previousInput = "";
  operation = null;
  displayValue = "";
  document.getElementById("numberInput").value = displayValue;
}

// 삭제
function del() {
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -1);
    displayValue = displayValue.slice(0, -1);
    document.getElementById("numberInput").value = displayValue;
  }
}
