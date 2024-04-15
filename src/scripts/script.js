let sumidao=ScrollReveal({reset:true});
sumidao.reveal('.cabecalho',{duration:3700})
sumidao.reveal('.nome',{duration:1000})
sumidao.reveal('.nome1',{ rotate:{x:100,y:0,z:0},duration:3500})
sumidao.reveal('.descricao',{  rotate:{x:32,y:0,z:0},duration:2500 })
sumidao.reveal('.foto',{  rotate:{x:15,y:0,z:0},duration:1500 })

sumidao.reveal('.sobre',{  rotate:{x:0,y:15,z:0},duration:1500 })
sumidao.reveal('.perfil',{  rotate:{x:0,y:100,z:0},duration:2000 })
sumidao.reveal('.Projetos',{  rotate:{x:0,y:100,z:0},duration:2600 })
sumidao.reveal('.contatos',{  rotate:{x:100,y:5,z:0},duration:2600 })

VanillaTilt.init(document.querySelectorAll(".card"));

