function buscarCEP() {
    const cep = document.getElementById('cep').value;
    if (cep.length !== 8 || isNaN(cep)) {
        alert('Por favor, digite um CEP válido com 8 dígitos.');
        return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.getElementById('resultado').innerHTML = '<p>CEP não encontrado.</p>';
            } else {
                document.getElementById('resultado').innerHTML = `
                
                    <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.localidade} - ${data.uf}</p>
                `
                console.log(data)
                ;
            }
        })
        .catch(error => console.error('Erro ao buscar o CEP:', error));
}