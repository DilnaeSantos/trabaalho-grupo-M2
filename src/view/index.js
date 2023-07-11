var imageUrls = [
    "https://media.gettyimages.com/id/168505044/pt/foto/fiordes-da-noruega.jpg?s=612x612&w=0&k=20&c=lyJ5NRuHU3W-GzQQlZreeSD6PQt-zb313FDnQDvAL7I=",
    "https://turismoetc.com.br/wp-content/uploads/2018/05/Geiranger-1024x712-1024x712-1024x712.jpg",
    "https://catracalivre.com.br/wp-content/uploads/2018/09/o-que-voce-precisa-saber-para-visitar-a-noruega-1-910x607.jpg",
    "https://vocenaneve.com.br/wp-content/uploads/2022/09/aurora-boreal-na-noruega.jpg",
    // Adicione aqui as URLs das imagens que você deseja exibir
];

var currentIndex = 0;
var streetViewImage = document.getElementById('streetViewImage');

setInterval(function () {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    streetViewImage.src = imageUrls[currentIndex];
}, 4000)