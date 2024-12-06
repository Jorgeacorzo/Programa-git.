document.addEventListener('DOMContentLoaded', function() {
    const inicioSesionButton = document.querySelector('#inicio-sesion form button');
    inicioSesionButton.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('panel-vendedor').style.display = 'block';
        document.getElementById('inventarios').style.display = 'none';
        document.getElementById('balances').style.display = 'none';
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            document.querySelectorAll('section').forEach(section => {
                section.style.display = section.id === sectionId ? 'block' : 'none';
            });
        });
    });
});
