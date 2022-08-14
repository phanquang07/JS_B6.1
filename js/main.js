// Bài 1: Tìm số nguyên dương n nhỏ nhất sao cho 1 + 2 + … + n > 10000

function findNum() {
  var sum = 0
  var count = 0

  while (sum < 10000) {
    count++
    sum += count
  }
  document.querySelector('#findNum').innerHTML = `Tổng là: ${sum} <br> Số nguyên dương n nhỏ nhất: ${count}`
}

document.querySelector('#btn-find').onclick = findNum


// Bài 2: Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n

function calcSum() {
  var x = Number(document.querySelector('#inputNumX').value)
  var n = Number(document.querySelector('#inputNumN').value)
  var accu = 1
  var S = 0

  for (var i = 1; i <= n; i++) {
    accu *= x
    S += accu
  }

  document.querySelector('#sumNum').innerHTML = `Tổng là: ${S} <br>`
}
document.querySelector('#btn-calcNum').onclick = calcSum

// Bài 3: Tính n!

function calcSum2() {
  var n = Number(document.querySelector('#inputNumN2').value)
  var S = 1
  var accu = 1

  for (var i = 1; i < n; i++) {
    accu++
    S *= accu
  }

  document.querySelector('#sumNum2').innerHTML = `Tổng là: ${S} <br>`
}
document.querySelector('#btn-calcNum2').onclick = calcSum2

// Bài 4: Tạo thẻ div chẵn, lẻ
function createdDiv() {
  var contents = ''

  for (var i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      contents += `
      <div style='background: red; padding: 8px; color: white'>Div chẵn</div>      
      `
    } else {
      contents += `
      <div style='background: blue; padding: 8px; color: white'>Div lẻ</div>
      `
    }
  }
  document.querySelector('#createdDiv').innerHTML = contents
}

document.querySelector('#btn-create').onclick = createdDiv
