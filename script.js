document.getElementById('generate-button').addEventListener('click', function() {
    const container = document.getElementById('grid-container');
// Pulisce il contenitore prima di aggiungere nuove celle
    container.innerHTML = ''; 
    for (let i = 1; i <= 100; i++) {
        const quadrati = document.createElement('div');
        quadrati.classList.add('quadrati');
        quadrati.textContent = i;
        quadrati.addEventListener('click', function() {
            quadrati.style.backgroundColor = 'lightcoral';
            console.log(`Cella cliccata: ${i}`);
        });
        container.append(quadrati);
    }
});