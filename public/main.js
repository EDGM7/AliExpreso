document.addEventListener('DOMContentLoaded', function () {
       
    // Función para navegar a las secciones de género cuando se hace clic en el menú
    document.querySelectorAll('.menu a').forEach(function (menuItem) {
        menuItem.addEventListener('click', function (event) {
            event.preventDefault();
            var targetSectionId = this.getAttribute('href').substring(1); // Elimina el símbolo #

            // Desplázate a la sección correspondiente con suavidad
            document.getElementById(targetSectionId).scrollIntoView({
                behavior: 'smooth'
            });

            // Cierra el menú en dispositivos móviles
            document.getElementById('navList').classList.remove('show');
        });
    });

   
});

    





// Función toggleMenu para dispositivos móviles
function toggleMenu() {
    var menu = document.getElementById('navList');
    menu.classList.toggle('show');
}
