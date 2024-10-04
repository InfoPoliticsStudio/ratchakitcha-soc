document.addEventListener('DOMContentLoaded', function () {
  // ฟังก์ชันสำหรับเปลี่ยนแท็บเมื่อเลือกหมวดหมู่
  const selectTab = document.getElementById('tab-type');
  const allTabs = document.querySelectorAll('.list-tab');

  selectTab.addEventListener('change', function () {
    const selectedTab = this.value;
    
    allTabs.forEach(function (tab) {
      if (tab.classList.contains(selectedTab)) {
        tab.style.display = 'block';
      } else {
        tab.style.display = 'none';
      }
    });
  });

  // ฟังก์ชันการโหลดข้อมูลเพิ่มเติม
  let itemsToShow = 2; // จำนวนรายการที่แสดงเมื่อเริ่มต้น
  const loadMoreButton = document.getElementById('loadMore');
  const allItems = document.querySelectorAll('.blogBox');

  function showItems() {
    allItems.forEach((item, index) => {
      if (index < itemsToShow) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  showItems(); // แสดงรายการเริ่มต้น

  loadMoreButton.addEventListener('click', function () {
    itemsToShow += 2; // เพิ่มจำนวนรายการที่แสดงทีละ 2
    showItems();

    // ซ่อนปุ่มเมื่อแสดงข้อมูลทั้งหมดแล้ว
    if (itemsToShow >= allItems.length) {
      loadMoreButton.style.display = 'none';
    }
  });
});
