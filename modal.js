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
        image: 'imagenes/P1.png', // Suggest different image for modal
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
        image: 'imagenes/merry_productos_modal.jpg',
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
        image: 'imagenes/cidelac_merry_combinado_modal.jpg',
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
        
      }
    };

    function openModal(productId) {
      const product = productDetails[productId];
      if (product) {
        modalProductTitle.textContent = product.title;
        modalProductImage.src = product.image;
        modalProductImage.alt = product.title;
        modalProductDescription.textContent = product.description;
        
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
      }
    }

    function closeModal() {
      productModal.classList.remove('active'); // Hide modal
    }

    verMasButtons.forEach(button => button.addEventListener('click', () => openModal(button.dataset.productId)));
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
      if (event.target === productModal) closeModal();
    });
});