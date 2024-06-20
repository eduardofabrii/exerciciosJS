function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formularioAno = document.getElementById('ano_nasc');
    var resultado = document.querySelector('div#resultado');
    
    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        window.alert('Erro | Verifique os dados e tente novamente!');
    } else {
        var formularioSexo = document.getElementsByName('sex');
        var idade = ano - Number(formularioAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (formularioSexo[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-masculino.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-masculino.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-masculino.png');
            } else {
                img.setAttribute('src', 'idoso-masculino.png');
            }
        } else if (formularioSexo[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-feminino.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-feminino.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-feminino.png');
            } else {
                img.setAttribute('src', 'idoso-feminino.png');
            }
        }
        
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resultado.appendChild(img);
    }
}