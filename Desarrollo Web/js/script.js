let estudiantes = [];


fetch('data/estudiantes.json')
    .then(response => response.json())
    .then(data => {
        estudiantes = data;
    })
    .catch(error => {
        console.error("Error cargando el JSON:", error);
    });


function mostrarEstudiante(id) {
    const contenedor = document.getElementById("resultado");

    const estudiante = estudiantes.find(e => e.id === id);

    if (estudiante) {
        contenedor.innerHTML = `
            <div class="card" style="border-color: ${estudiante.color}">
                <h3>${estudiante.nombre}</h3>
                <p><strong>Correo:</strong> ${estudiante.correo}</p>
                <p><strong>Programa:</strong> ${estudiante.programa}</p>
                
            </div>
        `;
    } else {
        contenedor.innerHTML = "Estudiante no encontrado";
    }
}