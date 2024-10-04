document.getElementById('search-btn').addEventListener('click', function() {
  const query = document.getElementById('search').value;
  const resultElement = document.getElementById('result');

  if (query === '') {
    resultElement.textContent = 'กรุณากรอกคำค้นหา';
  } else {
    // ดึงข้อมูลจาก id="data-soc" หรือทำการค้นหา
    resultElement.textContent = `คุณค้นหา: ${query}`;
  }
});
