function showDropdownMenu() {
  const menu = document.getElementById('dropdown-menu');
  const isVisible = menu.style.display === 'block';

  menu.style.display = isVisible ? 'none' : 'block';
}