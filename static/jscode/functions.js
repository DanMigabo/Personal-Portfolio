<<<<<<< HEAD
// Function to toggle the menu
function toggleMenu() {
    // Get the toggle menu and the button
    const menu = document.querySelector('.toggle-menu');
    const button = document.querySelector('.mobile-menu-btn button');
    
    // Toggle the visibility of the menu
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    
    // Change the button to 'X' when the menu is open, and back to hamburger when closed
    if (menu.style.display === "flex") {
        button.innerHTML = "&times;"; // Change to 'X' icon
        button.classList.add('open');
    } else {
        button.innerHTML = "&#9776;"; // Change back to hamburger icon
        button.classList.remove('open');
    }
}
function scrollToFooter() {
    // Get the footer element
    const footer = document.getElementById('footer');
    
    // Scroll smoothly to the footer
    footer.scrollIntoView({ behavior: 'smooth' });
=======
// Function to toggle the menu
function toggleMenu() {
    // Get the toggle menu and the button
    const menu = document.querySelector('.toggle-menu');
    const button = document.querySelector('.mobile-menu-btn button');
    
    // Toggle the visibility of the menu
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    
    // Change the button to 'X' when the menu is open, and back to hamburger when closed
    if (menu.style.display === "flex") {
        button.innerHTML = "&times;"; // Change to 'X' icon
        button.classList.add('open');
    } else {
        button.innerHTML = "&#9776;"; // Change back to hamburger icon
        button.classList.remove('open');
    }
}
function scrollToFooter() {
    // Get the footer element
    const footer = document.getElementById('footer');
    
    // Scroll smoothly to the footer
    footer.scrollIntoView({ behavior: 'smooth' });
>>>>>>> 3aff6891c6e2c564eb232a3e2e8060646fdb9ec1
}