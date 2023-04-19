function toggleMode(){
   const html = document.documentElement
      html.classList.toggle("light")
//          OU \/
//    if(html.classList.contains('light')){
//        html.classList.remove('light')
//    } else {
//        html.classList.add('light')
//    }


// PEGAR A TAG IMG
    const img = document.querySelector("#profile img")
 // SUBSTITUIR A IMAGEM     
    if(html.classList.contains("light")){
        // SE TIVER EM LIGHT MODE
        img.setAttribute("src", "../assets/Avatarlight.png")
    } else {
        // SE TIVER EM DARK MODE
        img.setAttribute("src","../assets/Avatar.png")
    }
// SUBSTITUIR O ALT (DESCRIÇÃO DA IMAGEM)
    if(html.classList.contains("light")){
        img.setAttribute("alt", "Foto de Pedro na praia sem óculos")

    }else{
        img.setAttribute("alt", "Foto com óculos, dentro do carro")
    }
}

