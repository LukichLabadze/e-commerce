document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.querySelector('.sidebar');
  const menuButton = document.querySelector('.menu');
  const overlay = document.getElementById('overlay');

  // Function to show the sidebar and overlay
  function showSidebar() {
      sidebar.style.display = 'flex';
      overlay.style.display = 'block';
  }

  // Function to hide the sidebar and overlay
  function hideSidebar() {
      sidebar.style.display = 'none';
      overlay.style.display = 'none';
  }

  // Add event listener to the menu button to show the sidebar
  menuButton.addEventListener('click', showSidebar);

  // Add event listener to the overlay to hide the sidebar when clicked
  overlay.addEventListener('click', hideSidebar);

  // Add event listener to the sidebar close button to hide the sidebar
  const closeButton = sidebar.querySelector('li:first-child a');
  closeButton.addEventListener('click', hideSidebar);
});

const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const quantityElement = document.getElementById('quantity-to-add');
const badgeNumber = document.getElementById('cart-count')
const addToCart = document.getElementById('addCartID')

plusButton.addEventListener('click', () => {
   let currentValue = parseInt(quantityElement.textContent);
   quantityElement.textContent = currentValue + 1;
});

minusButton.addEventListener('click', () => {
  let currentValue = parseInt(quantityElement.textContent);
    if (currentValue > 0) {
        quantityElement.textContent = currentValue - 1;
    }
});

addToCart.addEventListener('click', () => {
    badgeNumber.innerText = parseInt(badgeNumber.innerText) + parseInt(quantityElement.innerText)
})


