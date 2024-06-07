const flag = document.getElementById('flag');
let isOnFire = false;

flag.addEventListener('click', () => {
  if (!isOnFire) {
    startBurning();
  }
});

function startBurning() {
  isOnFire = true;
  flag.classList.add('burning');

  // Start the burning animation
  let flameHeight = 0;
  const flameBurnInterval = setInterval(() => {
    flameHeight += 2;
    flag.style.height = `${200 + flameHeight}px`;

    if (flameHeight >= 100) {
      clearInterval(flameBurnInterval);
    }
  }, 50);
}
