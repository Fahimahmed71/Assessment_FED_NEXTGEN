const menuItems = document.querySelectorAll(".menu-item");
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    const subMenu = this.querySelector(".sub-menu");
    if (subMenu.style.display === "none") {
      subMenu.style.display = "block";
    } else {
      subMenu.style.display = "none";
    }
  });
}

new Chartist.Line(
  ".ct-chart",
  {
    labels: [
      "Nov 1",
      "Nov 4",
      "Nov 8",
      "Nov 12",
      "Nov 16",
      "Nov 24",
      "Nov 28",
      "Nov 30",
    ],
    series: [[1, 2, 8, 1, 7, 12, 6, 8]],
  },
  {
    width: 500,
    height: 300,
    showArea: true,

    fullWidth: true,
    low: 0,
    axisX: {
      showLabel: true,
      showGrid: true,
    },
    axisY: {
      showLabel: false,
      showGrid: false,
    },
    showLine: true,
    showPoint: true,
  }
);

const menuBar = document.querySelector(".menu-bar");
const xmark = document.querySelector(".fa-xmark");
const menu = document.querySelector(".menu");

xmark.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

menuBar.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
