// Navbar
const Navbar          = document.querySelector(".navbar"),
      NavDropdownMenu = document.querySelector(".navbar_2");


window.addEventListener("scroll", () => {
    if(window.pageYOffset > 0.1) {
        NavDropdownMenu.classList.add("fixed-top");
        Navbar.classList.add("fixed-top", "background");
    }
    else {
        Navbar.classList.remove("fixed-top", "background");
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
    ? "fa-solid fa-xmark text-light"
    : "fa-solid fa-bars-staggered text-light"
}

// Hamburger Menu End
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