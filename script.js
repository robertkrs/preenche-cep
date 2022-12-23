/*var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/').then(resposta => resposta.json()).then(r => {
    if(r.erro){
        throw Error('Esse cep não existe!');
    }else
    console.log(r)
})
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento concluído!'));


*/// Outra maneira de fazer o codigo asyncrono
async function consultaCep(cep) {
    
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPValidado = await consultaCEP.json();

        if(consultaCEPValidado.erro){
            throw Error('Cep não existente');
        }
        
        preencheEndereco(consultaCEPValidado);

        console.log(consultaCEPValidado);
        return consultaCEPValidado;
    }catch (erro){
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => consultaCep(cep.value));

function preencheEndereco(cepValidado){
    var cidade = document.getElementById('cidade');
        var bairro = document.getElementById('bairro');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = cepValidado.localidade;
        logradouro.value = cepValidado.logradouro;
        bairro.value = cepValidado.bairro;
        estado.value = cepValidado.uf;

}