let listadoCelulares = [
    {
      id: 1,
      marca: "samsung",
      nombre: 'galaxy z fold3 5g',
      precio: 350,
      precioInicial: 700 ,
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolorem facilis perspiciatis consequuntur enim maiores velit placeat? Quia soluta maiores nobis veritatis, quasi aliquid asperiores id, ea, molestiae quo modi.100" ,
      imagen: "https://i.ibb.co/tX8kKtm/card1.png" ,
    },

    {
      id: 2,
      marca: "samsung",
      nombre: 'galaxy s22 ultra',
      precio: 300,
      precioInicial: 600 ,
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolorem facilis perspiciatis consequuntur enim maiores velit placeat? Quia soluta maiores nobis veritatis, quasi aliquid asperiores id, ea, molestiae quo modi.100" ,
      imagen: 'https://i.ibb.co/t8P4HY2/card2.png',
    },

    {
      id: 3,
      marca: "samsung",
      nombre: 'galaxy note20',
      precio: 300,
      precioInicial: 600 ,
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolorem facilis perspiciatis consequuntur enim maiores velit placeat? Quia soluta maiores nobis veritatis, quasi aliquid asperiores id, ea, molestiae quo modi.100" ,
      imagen: 'https://i.ibb.co/02j2dPG/card3.png',
    },

    {
      id: 4,
      marca: "samsung",
      nombre: 'galaxy a53 5g',
      precio: 110,
      precioInicial: 220 ,
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolorem facilis perspiciatis consequuntur enim maiores velit placeat? Quia soluta maiores nobis veritatis, quasi aliquid asperiores id, ea, molestiae quo modi.100" ,
      imagen: 'https://i.ibb.co/CvvHf5D/card4.png',
    },

    {
      id: 5,
      marca: "samsung",
      nombre: 'galaxy a72',
      precio: 150,
      precioInicial: 300 ,
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolorem facilis perspiciatis consequuntur enim maiores velit placeat? Quia soluta maiores nobis veritatis, quasi aliquid asperiores id, ea, molestiae quo modi.100" ,
      imagen: 'https://i.ibb.co/0DBzr7J/card5.png',
    },

    {
      id: 6,
      marca: "samsung",
      nombre: 'galaxy m23 5g',
      precio: 70,
      precioInicial: 140 ,
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolorem facilis perspiciatis consequuntur enim maiores velit placeat? Quia soluta maiores nobis veritatis, quasi aliquid asperiores id, ea, molestiae quo modi.100" ,
      imagen: 'https://i.ibb.co/K6CNTqV/card6.png',
    },

    {
      id: 7,
      marca: "iphone",
      nombre: 'iphone 11',
      precio: 400,
      precioInicial: 800 ,
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolorem facilis perspiciatis consequuntur enim maiores velit placeat? Quia soluta maiores nobis veritatis, quasi aliquid asperiores id, ea, molestiae quo modi.100" ,
      imagen: 'https://i.ibb.co/9hmPDwy/card7.png',
    },

    {
      id: 8,
      marca: "iphone",
      nombre: 'iphone 12',
      precio: 500,
      precioInicial: 1000 ,
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolorem facilis perspiciatis consequuntur enim maiores velit placeat? Quia soluta maiores nobis veritatis, quasi aliquid asperiores id, ea, molestiae quo modi.100",
      imagen: 'https://i.ibb.co/jvZfv8n/card8.png',
    },

    {
      id: 9,
      marca: "iphone",
      nombre: 'iphone 13 Pro',
      precio: 600,
      precioInicial: 1200 ,
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolorem facilis perspiciatis consequuntur enim maiores velit placeat? Quia soluta maiores nobis veritatis, quasi aliquid asperiores id, ea, molestiae quo modi.100" ,
      imagen: 'https://i.ibb.co/DgWs6sR/card9.png',
    },

    {
      id: 10,
      marca: "iphone",
      nombre: 'iphone 12 mini',
      precio: 550,
      precioInicial: 1100 ,
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolorem facilis perspiciatis consequuntur enim maiores velit placeat? Quia soluta maiores nobis veritatis, quasi aliquid asperiores id, ea, molestiae quo modi.100" ,
      imagen: 'https://i.ibb.co/WsbbtYV/card10.png',
    },

    {
      id: 11,
      marca: "iphone",
      nombre: 'iphone SE',
      precio: 500,
      precioInicial: 1000,
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolorem facilis perspiciatis consequuntur enim maiores velit placeat? Quia soluta maiores nobis veritatis, quasi aliquid asperiores id, ea, molestiae quo modi.100" ,
      imagen: 'https://i.ibb.co/3TY3C1Y/card11.png',
    },

    {
      id: 12,
      marca: "iphone",
      nombre: 'iphone 13 Mini',
      precio: 700,
      precioInicial: 1400 ,
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolorem facilis perspiciatis consequuntur enim maiores velit placeat? Quia soluta maiores nobis veritatis, quasi aliquid asperiores id, ea, molestiae quo modi.100" ,
      imagen: 'https://i.ibb.co/kycHmxs/card12.png',
    },

]

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("listadoCelulares")) {
    return
  } else {
    localStorage.setItem('listadoCelulares', JSON.stringify(listadoCelulares));
  }
  });