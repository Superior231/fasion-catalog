// Navbar
const Navbar          = document.querySelector(".navbar"),
      NavDropdownMenu = document.querySelector(".navbar_2"),
      hamburgerMenu   = document.querySelector(".color-icon");


window.addEventListener("scroll", () => {
    if(window.pageYOffset > 0.1) {
        NavDropdownMenu.classList.add("fixed-top", "background");
        Navbar.classList.add("fixed-top", "background");
        hamburgerMenu.classList.add("dark");
    }
    else {
        NavDropdownMenu.classList.remove("fixed-top", "background");
        Navbar.classList.remove("fixed-top", "background");
        hamburgerMenu.classList.remove("dark");
    }
});



// Navbar Active
const menuItems = document.querySelectorAll('nav ul li a');


// jika nav items diclick
menuItems.forEach(item => {
    item.addEventListener('click', function() {
    // Menghapus kelas "active" dari semua elemen menu
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Menambahkan kelas "active" pada elemen menu yang diklik
    this.classList.add('active');
    });

});

const menuItemsHp = document.querySelectorAll('nav li a');

// jika nav items diclick
menuItemsHp.forEach(item => {
    item.addEventListener('click', function() {
    // Menghapus kelas "active" dari semua elemen menu
    menuItemsHp.forEach(item => {
        item.classList.remove('active');
    });
    
    // Menambahkan kelas "active" pada elemen menu yang diklik
    this.classList.add('active');
    });

});

// Navbar Active End


// Hamburger Menu
const toggleBtn     = document.querySelector(".toggle_btn"),
      toggleBtnIcon = document.querySelector(".toggle_btn i"),
      dropDownMenu  = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")

    toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark color-icon dark"
    : "fa-solid fa-bars-staggered color-icon dark"
}
// Hamburger Menu End


// Search Button
const inputSearchMobile = document.querySelector("#search-mobile input");
const btnSearch = document.querySelector(".container-search-mobile #btn-search");
const btnClose = document.getElementById("btn-close");
const containerSearchMobile = document.querySelector(".container-search-mobile");
const logo = document.querySelector("#logo");
const btnMenu = document.querySelector(".toggle_btn");

btnSearch.addEventListener("click", () => {
  containerSearchMobile.classList.add("active");
  btnClose.classList.add("active");
  btnSearch.classList.add("active");
  logo.classList.add("search-active");
  btnMenu.classList.add("search-active");
});

// Close Button
btnClose.addEventListener("click", () => {
  containerSearchMobile.classList.remove("active");
  btnClose.classList.remove("active");
  btnSearch.classList.remove("active");
  logo.classList.remove("search-active");
  btnMenu.classList.remove("search-active");
  inputSearchMobile.value = "";
});
// Navbar End



// Animasi Scroll
window.addEventListener("scroll", active);

function active() {
    let elements = document.querySelectorAll(".element");

    // perulangan untuk setiap sections dengan class element
    for (let i = 0; i < elements.length; i++) {
        let tinggiLayar     = window.innerHeight; // mengambil ukuran tinggi layar
        let jarakAtasElemen = elements[i].getBoundingClientRect().top; // menangkap ukuran element dan posisinya relative terhadap viewport
        let ukuranScroll = 100; // menentukan ukuran scroll untuk memunculkan element

        // jika jarak atas element kurang dari tinggi layar dikurangi ukuran scroll maka tambahkan class active di setiap sections dengan class element
        if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
            elements[i].classList.add("active");
        }
        else {
            elements[i].classList.remove("active");
        }
    }
}
// Animasi Scroll End
