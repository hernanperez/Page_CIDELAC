document.addEventListener('DOMContentLoaded', () => {
    // --- Product Modal ---
    const productModal = document.getElementById('productModal');
    // Si el modal no existe en la página, no continuamos.
    if (!productModal) return;

    const closeButton = document.querySelector('.modal .close-button');
    const modalProductTitle = document.getElementById('modal-product-title');
    const modalProductImage = document.getElementById('modal-product-image');
    const modalProductDescription = document.getElementById('modal-product-description');
    const modalProductNutritionalInfo = document.getElementById('modal-product-nutritional-info'); // Nuevo
    const modalProductFeatures = document.getElementById('modal-product-features');
    const verMasButtons = document.querySelectorAll('.btn-ver-mas');

    // Define product details
    const productDetails = {
      'cidelac-catalogo': {
        title: 'Leche Entera en Polvo',
        image: 'imagenes/PRODcid.webp', // Suggest different image for modal
        description: 'La leche entera en polvo de CIDELAC es un producto de alta calidad, rico en vitaminas y minerales esenciales para el crecimiento y desarrollo. Ideal para programas de alimentación y uso familiar.',
        
        
        nutritionalInfo: [ // Nueva propiedad
          'Porción: 25g',
          'Calorías: 120 kcal',
          'Proteínas: 6g',
          'Grasas: 7g',
          'Carbohidratos: 9g',
          'Calcio: 20% VD'
        ],
        features: [
          'Leche fresca entera y descremada, ideal para toda la familia.',
          'Yogures naturales, frutales y griegos, perfectos para un desayuno o snack saludable.',
          'Amplia variedad de quesos: campesino, doble crema, mozzarella, y más, para tus recetas favoritas.',
          'Mantequilla pura de leche, para un sabor auténtico en tus comidas.',
          'Crema de leche y arequipes, para postres y preparaciones especiales.'
        ]
      },
      'merry-productos': {
        title: 'Productos Exclusivos MERRY',
        image: 'imagenes/merry.webp',
        description: 'La línea MERRY está diseñada para deleitar a toda la familia con sabores innovadores y una nutrición excepcional. Perfectos para el desayuno, la merienda o como ingrediente especial en tus recetas favoritas. MERRY es la elección ideal para quienes buscan calidad y diversión en cada bocado.',
        
        nutritionalInfo: [ // Nueva propiedad
          'Porción: 25g',
          'Calorías: 120 kcal',
          'Proteínas: 6g',
          'Grasas: 7g',
          'Carbohidratos: 9g',
          'Calcio: 20% VD'
        ],
        
        features: [
          'Leches saborizadas: chocolate, fresa, vainilla, para los más pequeños y no tan pequeños.',
          'Yogures premium con trozos de fruta, una explosión de sabor y textura.',
          'Postres lácteos listos para consumir, la solución perfecta para un antojo dulce.',
          'Bebidas nutritivas enriquecidas con vitaminas y minerales, para un impulso de energía.',
          'Opciones sin lactosa disponibles, pensando en todas las necesidades dietéticas.'
       
        ],
        
      },
      'cidelac-merry-combinado': {
        title: 'Innovación CIDELAC & MERRY',
        image: 'imagenes/P2.webp',
        description: 'Explora la sinergia de calidad y sabor con nuestros productos combinados CIDELAC y MERRY. Ofrecemos soluciones prácticas y deliciosas para cada momento del día, aprovechando lo mejor de ambas marcas para brindarte una experiencia única y completa.',
        
        nutritionalInfo: [ // Nueva propiedad
          'Porción: 25g',
          'Calorías: 120 kcal',
          'Proteínas: 6g',
          'Grasas: 7g',
          'Carbohidratos: 9g',
          'Calcio: 20% VD'
        ],

        features: [
        
            'Combos familiares con variedad de productos, para que nunca falte nada en tu hogar.',
            'Paquetes promocionales para ahorro, disfruta más por menos.',
            'Productos estacionales y de edición limitada, sorpresas deliciosas durante todo el año.',
            'Soluciones para hostelería y grandes consumidores, adaptadas a tus necesidades de negocio.',
            'Innovaciones constantes en sabores y formatos, siempre buscando sorprenderte.'
        ],
        
      },
    // --- Recipes Details ---
      'receta-arequipe-casero-con-leche-en-polvo': {
        title: 'Arequipe Casero Con Leche En Polvo',
        image: 'imagenes/receta.jpg',
        description: 'Una deliciosa receta de arequipe casero con leche en polvo preparada con la calidad de los productos lácteos CIDELAC.',
        features: [
          '2 tazas de leche en polvo',
          '2 tazas de azúcar',
          '1 taza de agua',
          '1 cucharada de mantequilla',
          '½ cucharadita de bicarbonato',
          '1 cucharadita de vainilla (opcional)',
        ],
        nutritionalInfo: [
          'En una olla mezcla el agua con el azúcar y cocina a fuego medio.',
          'Agrega la leche en polvo poco a poco mezclando bien para evitar grumos.',
          'Incorpora la mantequilla y el bicarbonato.',
          'Cocina a fuego bajo revolviendo constantemente.',
          'Cuando espese y tome color caramelo agrega la vainilla.',
          'Deja enfriar y guarda en un frasco.',
        ]
      },
      'receta-helado-cremoso-de-vainilla': {
        title: 'Helado Cremoso De Vainilla',
        image: 'imagenes/receta.jpg',
        description: 'Una deliciosa receta de helado cremoso de vainilla preparada con la calidad de los productos lácteos CIDELAC.',
        features: [
          '1 taza de leche en polvo',
          '2 tazas de agua fría',
          '½ taza de azúcar',
          '1 cucharadita de vainilla',
          '½ taza de crema de leche (opcional)',
        ],
        nutritionalInfo: [
          'Licúa todos los ingredientes durante 1 minuto.',
          'Vierte la mezcla en un recipiente.',
          'Lleva al congelador.',
          'Cada hora revuelve para evitar cristales de hielo.',
          'Después de 4 horas estará listo para servir.',
        ]
      },
      'receta-galletas-suaves-con-leche-en-polvo': {
        title: 'Galletas Suaves Con Leche En Polvo',
        image: 'imagenes/receta.jpg',
        description: 'Una deliciosa receta de galletas suaves con leche en polvo preparada con la calidad de los productos lácteos CIDELAC.',
        features: [
          '1 taza de leche en polvo',
          '1 taza de harina de trigo',
          '½ taza de mantequilla',
          '½ taza de azúcar',
          '1 huevo',
          '½ cucharadita de polvo para hornear',
          '1 cucharadita de vainilla',
        ],
        nutritionalInfo: [
          'Precalienta el horno a 180°C.',
          'Mezcla la mantequilla con el azúcar hasta formar una crema.',
          'Agrega el huevo y la vainilla.',
          'Incorpora la harina, el polvo de hornear y la leche en polvo.',
          'Forma bolitas y colócalas en una bandeja.',
          'Hornea durante 12–15 minutos.',
        ]
      },
      'receta-trufas-de-leche-en-polvo': {
        title: 'Trufas De Leche En Polvo',
        image: 'imagenes/receta.jpg',
        description: 'Una deliciosa receta de trufas de leche en polvo preparada con la calidad de los productos lácteos CIDELAC.',
        features: [
          '1 taza de leche en polvo',
          '½ taza de leche condensada',
          '½ taza de coco rallado',
          '1 cucharada de mantequilla',
        ],
        nutritionalInfo: [
          'Mezcla todos los ingredientes en un recipiente.',
          'Forma una masa suave.',
          'Haz bolitas pequeñas.',
          'Pásalas por coco rallado o chocolate en polvo.',
          'Refrigera por 1 hora.',
        ]
      },
      'receta-flan-cremoso': {
        title: 'Flan Cremoso',
        image: 'imagenes/receta.jpg',
        description: 'Una deliciosa receta de flan cremoso preparada con la calidad de los productos lácteos CIDELAC.',
        features: [
          '1 taza de leche en polvo',
          '1 taza de agua',
          '3 huevos',
          '½ taza de azúcar',
          '1 cucharadita de vainilla',
          '½ taza de azúcar para el caramelo',
        ],
        nutritionalInfo: [
          'Derrite el azúcar para hacer caramelo y colócalo en un molde.',
          'Licúa el agua, la leche en polvo, huevos, azúcar y vainilla.',
          'Vierte la mezcla en el molde.',
          'Hornea a baño María durante 40 minutos a 180°C.',
          'Deja enfriar y desmolda.',
        ]
      },
      'receta-arroz-con-leche-cremoso': {
        title: 'Arroz Con Leche Cremoso',
        image: 'imagenes/arroz.jpg',
        description: 'Una deliciosa receta de arroz con leche cremoso preparada con la calidad de los productos lácteos CIDELAC.',
        features: [
          '1 taza de arroz',
          '3 tazas de agua',
          '1 taza de leche líquida',
          '3 cucharadas de leche en polvo',
          '½ taza de azúcar',
          '1 rama de canela',
        ],
        nutritionalInfo: [
          'Cocina el arroz con el agua y la canela.',
          'Cuando esté suave agrega la leche líquida.',
          'Añade la leche en polvo y mezcla bien.',
          'Agrega el azúcar.',
          'Cocina hasta que espese.',
        ]
      },
      'receta-batido-energetico-de-banano': {
        title: 'Batido Energético De Banano',
        image: 'imagenes/receta.jpg',
        description: 'Una deliciosa receta de batido energético de banano preparada con la calidad de los productos lácteos CIDELAC.',
        features: [
          '1 banano maduro',
          '2 cucharadas de leche en polvo',
          '1 vaso de agua o leche',
          '1 cucharada de miel',
        ],
        nutritionalInfo: [
          'Coloca todos los ingredientes en la licuadora.',
          'Licúa durante 30 segundos.',
          'Sirve frío.',
        ]
      },
      'receta-dulce-tipo-fudge': {
        title: 'Dulce Tipo Fudge',
        image: 'imagenes/receta.jpg',
        description: 'Una deliciosa receta de dulce tipo fudge preparada con la calidad de los productos lácteos CIDELAC.',
        features: [
          '2 tazas de leche en polvo',
          '1 taza de azúcar pulverizada',
          '½ taza de leche líquida',
          '1 cucharada de mantequilla',
        ],
        nutritionalInfo: [
          'Mezcla todos los ingredientes en una olla.',
          'Cocina a fuego bajo revolviendo constantemente.',
          'Cuando espese vierte en un molde.',
          'Deja enfriar.',
          'Corta en cuadros.',
        ]
      },
      'receta-pancakes-esponjosos': {
        title: 'Pancakes Esponjosos',
        image: 'imagenes/receta.jpg',
        description: 'Una deliciosa receta de pancakes esponjosos preparada con la calidad de los productos lácteos CIDELAC.',
        features: [
          '1 taza de harina de trigo',
          '2 cucharadas de leche en polvo',
          '1 huevo',
          '1 taza de agua o leche',
          '1 cucharada de azúcar',
          '1 cucharadita de polvo para hornear',
          '1 pizca de sal',
        ],
        nutritionalInfo: [
          'Mezcla todos los ingredientes hasta obtener una masa suave.',
          'Calienta una sartén con un poco de mantequilla.',
          'Vierte pequeñas porciones de mezcla.',
          'Cocina hasta que aparezcan burbujas y voltea.',
          'Sirve con miel o frutas.',
        ]
      },
      'receta-chocolate-caliente-cremoso': {
        title: 'Chocolate Caliente Cremoso',
        image: 'imagenes/receta.jpg',
        description: 'Una deliciosa receta de chocolate caliente cremoso preparada con la calidad de los productos lácteos CIDELAC.',
        features: [
          '1 taza de agua o leche',
          '2 cucharadas de leche en polvo',
          '1 cucharada de cocoa o chocolate en polvo',
          'azúcar al gusto',
        ],
        nutritionalInfo: [
          'Mezcla todos los ingredientes en una olla.',
          'Calienta a fuego medio revolviendo.',
          'Cuando hierva ligeramente sirve caliente.',
        ]
      },
      'receta-galletas-de-leche-en-polvo-airfryer': {
        title: 'Galletas De Leche En Polvo (Air Fryer)',
        image: 'imagenes/receta.jpg',
        description: 'Prepara un delicioso y rápido galletas de leche en polvo en tu freidora de aire con la Leche en Polvo CIDELAC.',
        features: [
          '1 taza de leche en polvo',
          '1 taza de harina de trigo',
          '½ taza de mantequilla',
          '½ taza de azúcar',
          '1 huevo',
          '1 cucharadita de vainilla',
        ],
        nutritionalInfo: [
          'Mezcla la mantequilla con el azúcar hasta formar una crema.',
          'Agrega el huevo y la vainilla.',
          'Incorpora la harina y la leche en polvo.',
          'Forma bolitas y aplástalas ligeramente.',
          'Colócalas en la canasta de la air fryer con papel para hornear.',
          'Cocina 8–10 minutos a 170°C.',
        ]
      },
      'receta-donitas-de-leche-en-polvo-airfryer': {
        title: 'Donitas De Leche En Polvo (Air Fryer)',
        image: 'imagenes/receta.jpg',
        description: 'Prepara un delicioso y rápido donitas de leche en polvo en tu freidora de aire con la Leche en Polvo CIDELAC.',
        features: [
          '1 taza de harina',
          '½ taza de leche en polvo',
          '¼ taza de azúcar',
          '1 huevo',
          '¼ taza de leche',
          '1 cucharadita de polvo para hornear',
        ],
        nutritionalInfo: [
          'Mezcla todos los ingredientes hasta formar una masa suave.',
          'Formas pequeñas donas.',
          'Colócalas en la air fryer.',
          'Cocina 8–10 minutos a 180°C.',
        ]
      },
      'receta-bizcochuelo-rapido-airfryer': {
        title: 'Bizcochuelo Rápido (Air Fryer)',
        image: 'imagenes/receta.jpg',
        description: 'Prepara un delicioso y rápido bizcochuelo rápido en tu freidora de aire con la Leche en Polvo CIDELAC.',
        features: [
          '1 taza de harina',
          '½ taza de leche en polvo',
          '½ taza de azúcar',
          '2 huevos',
          '½ taza de leche líquida',
          '1 cucharadita de polvo de hornear',
        ],
        nutritionalInfo: [
          'Mezcla todos los ingredientes.',
          'Vierte en un molde pequeño apto para air fryer.',
          'Cocina 18–20 minutos a 170°C.',
        ]
      },
      'receta-pancakes-esponjosos-airfryer': {
        title: 'Pancakes Esponjosos (Air Fryer)',
        image: 'imagenes/receta.jpg',
        description: 'Prepara un delicioso y rápido pancakes esponjosos en tu freidora de aire con la Leche en Polvo CIDELAC.',
        features: [
          '1 taza de harina',
          '2 cucharadas de leche en polvo',
          '1 huevo',
          '1 taza de leche',
          '1 cucharada de azúcar',
          '1 cucharadita de polvo de hornear',
        ],
        nutritionalInfo: [
          'Mezcla todos los ingredientes.',
          'Coloca pequeñas porciones en un molde de silicona.',
          'Cocina 7–8 minutos a 180°C.',
        ]
      },
      'receta-muffins-de-vainilla-airfryer': {
        title: 'Muffins De Vainilla (Air Fryer)',
        image: 'imagenes/receta.jpg',
        description: 'Prepara un delicioso y rápido muffins de vainilla en tu freidora de aire con la Leche en Polvo CIDELAC.',
        features: [
          '1 taza de harina',
          '½ taza de leche en polvo',
          '½ taza de azúcar',
          '1 huevo',
          '½ taza de leche',
          '1 cucharadita de vainilla',
          '1 cucharadita de polvo para hornear',
        ],
        nutritionalInfo: [
          'Mezcla todos los ingredientes.',
          'Llena moldes de muffin hasta ¾.',
          'Cocina 15 minutos a 170°C.',
        ]
      },
      'receta-pastel-de-leche-en-polvo-airfryer': {
        title: 'Pastel De Leche En Polvo (Air Fryer)',
        image: 'imagenes/receta.jpg',
        description: 'Prepara un delicioso y rápido pastel de leche en polvo en tu freidora de aire con la Leche en Polvo CIDELAC.',
        features: [
          '1 taza de leche en polvo',
          '1 taza de harina',
          '½ taza de azúcar',
          '2 huevos',
          '½ taza de mantequilla derretida',
          '1 cucharadita de polvo para hornear',
        ],
        nutritionalInfo: [
          'Mezcla todos los ingredientes.',
          'Coloca en un molde pequeño.',
          'Cocina 20 minutos a 170°C.',
        ]
      },
      'receta-pan-dulce-con-leche-en-polvo-airfryer': {
        title: 'Pan Dulce Con Leche En Polvo (Air Fryer)',
        image: 'imagenes/receta.jpg',
        description: 'Prepara un delicioso y rápido pan dulce con leche en polvo en tu freidora de aire con la Leche en Polvo CIDELAC.',
        features: [
          '2 tazas de harina',
          '½ taza de leche en polvo',
          '½ taza de azúcar',
          '1 huevo',
          '1 cucharadita de levadura',
          '¾ taza de leche tibia',
        ],
        nutritionalInfo: [
          'Mezcla los ingredientes y amasa.',
          'Deja reposar 40 minutos.',
          'Forma panecillos.',
          'Cocina 12–15 minutos a 180°C.',
        ]
      },
      'receta-brownies-con-leche-en-polvo-airfryer': {
        title: 'Brownies Con Leche En Polvo (Air Fryer)',
        image: 'imagenes/receta.jpg',
        description: 'Prepara un delicioso y rápido brownies con leche en polvo en tu freidora de aire con la Leche en Polvo CIDELAC.',
        features: [
          '1 taza de harina',
          '½ taza de leche en polvo',
          '½ taza de azúcar',
          '¼ taza de cocoa',
          '2 huevos',
          '½ taza de mantequilla',
        ],
        nutritionalInfo: [
          'Mezcla todos los ingredientes.',
          'Coloca en un molde.',
          'Cocina 18 minutos a 170°C.',
        ]
      },
      'receta-galletas-de-coco-airfryer': {
        title: 'Galletas De Coco (Air Fryer)',
        image: 'imagenes/receta.jpg',
        description: 'Prepara un delicioso y rápido galletas de coco en tu freidora de aire con la Leche en Polvo CIDELAC.',
        features: [
          '1 taza de coco rallado',
          '½ taza de leche en polvo',
          '½ taza de azúcar',
          '1 huevo',
        ],
        nutritionalInfo: [
          'Mezcla todos los ingredientes.',
          'Forma pequeñas galletas.',
          'Cocina 8–10 minutos a 170°C.',
        ]
      },
      'receta-postre-cremoso-tostado-tipo-natilla-horneada-airfryer': {
        title: 'Postre Cremoso Tostado (Tipo Natilla Horneada) (Air Fryer)',
        image: 'imagenes/receta.jpg',
        description: 'Prepara un delicioso y rápido postre cremoso tostado (tipo natilla horneada) en tu freidora de aire con la Leche en Polvo CIDELAC.',
        features: [
          '1 taza de leche en polvo',
          '1 taza de agua',
          '½ taza de azúcar',
          '2 huevos',
          '1 cucharadita de vainilla',
        ],
        nutritionalInfo: [
          'Licúa todos los ingredientes.',
          'Vierte en un molde pequeño.',
          'Cocina 15–18 minutos a 170°C.',
        ]
      },
    };

    function openModal(productId, triggerElement) {
      const product = productDetails[productId];
      if (product) {
        modalProductTitle.textContent = product.title;
        
        // Dynamically get image if triggerElement is provided and is a recipe
        if (productId.startsWith('receta-') && triggerElement) {
          const card = triggerElement.closest('.info-card');
          const cardImg = card ? card.querySelector('.card-image-wrapper img') : null;
          if (cardImg) {
            modalProductImage.src = cardImg.getAttribute('src');
          } else {
            modalProductImage.src = product.image;
          }
        } else {
          modalProductImage.src = product.image;
        }
        
        modalProductImage.alt = product.title;
        modalProductDescription.textContent = product.description;
        
        // Dynamic labels based on whether it is a recipe or product
        const nutritionalHeader = document.querySelector('.modal-nutritional-info h3');
        let ingredientsHeader = document.querySelector('.modal-text-column h3.ingredients-title');
        
        if (!ingredientsHeader) {
          ingredientsHeader = document.createElement('h3');
          ingredientsHeader.className = 'ingredients-title';
          ingredientsHeader.style.color = 'var(--primary)';
          ingredientsHeader.style.marginBottom = '0.5rem';
          ingredientsHeader.style.marginTop = '1rem';
          modalProductFeatures.parentNode.insertBefore(ingredientsHeader, modalProductFeatures);
        }

        if (productId.startsWith('receta-')) {
          if (nutritionalHeader) nutritionalHeader.textContent = 'Preparación';
          ingredientsHeader.textContent = 'Ingredientes';
          ingredientsHeader.style.display = 'block';
        } else {
          if (nutritionalHeader) nutritionalHeader.textContent = 'Información Nutricional';
          ingredientsHeader.style.display = 'none';
        }
        
        modalProductNutritionalInfo.innerHTML = ''; // Limpiar información nutricional previa
        product.nutritionalInfo.forEach(info => { // Rellenar información nutricional
          const li = document.createElement('li');
          li.textContent = info;
          modalProductNutritionalInfo.appendChild(li);
        });
        modalProductFeatures.innerHTML = ''; // Clear previous features
        product.features.forEach(feature => {
          const li = document.createElement('li');
          li.textContent = feature;
          modalProductFeatures.appendChild(li);
        });
        productModal.classList.add('active'); // Show modal
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }
    }

    function closeModal() {
      productModal.classList.remove('active'); // Hide modal
      document.body.style.overflow = ''; // Restore background scrolling
    }

    verMasButtons.forEach(button => button.addEventListener('click', (event) => openModal(button.dataset.productId, event.currentTarget)));
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
      if (event.target === productModal) closeModal();
    });
});