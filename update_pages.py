import re

def update_empresa():
    with open("empresa.html", "r", encoding="utf-8") as f:
        content = f.read()

    new_empresa = """
        <div class="split-section" style="margin-top: 2rem;">
          <div class="split-image">
            <div class="placeholder-img">
              <i class="fas fa-users"></i>
              <span>[Espacio para Imagen: Equipo/Empresa]</span>
            </div>
          </div>
          <div class="split-text">
            <h2>¿Quiénes Somos?</h2>
            <p>
              En Comercializadora Cidelac somos una empresa dedicada al empaque, distribución y comercialización de leche en polvo, comprometida con ofrecer productos de alta calidad que contribuyan a la nutrición y bienestar de nuestros clientes.
            </p>
            <p>
              Trabajamos bajo estrictos estándares de calidad y control, garantizando un producto confiable. Nuestro compromiso es brindar soluciones alimenticias prácticas, seguras y nutritivas para hogares, comercios e industrias.
            </p>
          </div>
        </div>

        <div class="split-section">
          <div class="split-text">
            <h2>Nuestra Propuesta de Valor</h2>
            <ul style="list-style-type: none; padding: 0;">
              <li style="margin-bottom: 1rem;"><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> Calidad garantizada en nuestra leche en polvo.</li>
              <li style="margin-bottom: 1rem;"><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> Eficiencia logística, asegurando entregas oportunas.</li>
              <li style="margin-bottom: 1rem;"><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> Atención personalizada a cada cliente.</li>
              <li style="margin-bottom: 1rem;"><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> Precios competitivos para el crecimiento de nuestros aliados.</li>
            </ul>
          </div>
          <div class="split-image">
            <div class="placeholder-img">
              <i class="fas fa-handshake"></i>
              <span>[Espacio para Imagen: Logística/Atención]</span>
            </div>
          </div>
        </div>

        <div class="info-cards" style="margin-top: 6rem;">
          <div class="info-card">
            <div class="info-card-icon">
              <i class="fas fa-bullseye"></i>
            </div>
            <h3>Nuestra Misión</h3>
            <p>
              Ser una empresa líder en la distribución y comercialización de leche en polvo, contribuyendo al mejoramiento de la alimentación de los hogares y aportando al crecimiento, desarrollo y nutrición de las familias en Colombia.
            </p>
          </div>
          <div class="info-card">
            <div class="info-card-icon">
              <i class="fas fa-eye"></i>
            </div>
            <h3>Nuestra Visión</h3>
            <p>
              Proyectarnos como una empresa reconocida a nivel nacional por su liderazgo en la comercialización de leche en polvo, consolidando alianzas y fortaleciendo el talento humano para impactar positivamente la calidad de vida.
            </p>
          </div>
        </div>

        <div class="split-section" style="margin-top: 6rem;">
          <div class="split-image">
            <div class="placeholder-img" style="height: 100%;">
              <i class="fas fa-certificate"></i>
              <span>[Espacio para Imagen: Certificación/Calidad]</span>
            </div>
          </div>
          <div class="split-text">
            <h2>Política de Calidad</h2>
            <p>Comprometidos con la satisfacción de nuestros clientes mediante procesos confiables:</p>
            <ul style="list-style-type: none; padding: 0; margin-bottom: 2rem;">
              <li style="margin-bottom: 0.5rem;"><i class="fas fa-shield-alt" style="color: var(--primary); margin-right: 10px;"></i> Colaboradores capacitados</li>
              <li style="margin-bottom: 0.5rem;"><i class="fas fa-shield-alt" style="color: var(--primary); margin-right: 10px;"></i> Control y verificación de calidad</li>
              <li style="margin-bottom: 0.5rem;"><i class="fas fa-shield-alt" style="color: var(--primary); margin-right: 10px;"></i> Mejoramiento continuo logístico</li>
            </ul>

            <h2>Valores Institucionales</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div><i class="fas fa-star" style="color: var(--primary);"></i> Responsabilidad</div>
              <div><i class="fas fa-star" style="color: var(--primary);"></i> Calidad</div>
              <div><i class="fas fa-star" style="color: var(--primary);"></i> Compromiso</div>
              <div><i class="fas fa-star" style="color: var(--primary);"></i> Honestidad</div>
              <div><i class="fas fa-star" style="color: var(--primary);"></i> Servicio</div>
              <div><i class="fas fa-star" style="color: var(--primary);"></i> Trabajo en equipo</div>
            </div>
          </div>
        </div>
    """
    
    # We replace everything between <h1>Nuestra Empresa</h1> and </section>
    content = re.sub(r'<h1>Nuestra Empresa</h1>.*?</section>', '<h1>Nuestra Empresa</h1>\n' + new_empresa + '\n</section>', content, flags=re.DOTALL)
    
    with open("empresa.html", "w", encoding="utf-8") as f:
        f.write(content)

def update_productos():
    with open("productos.html", "r", encoding="utf-8") as f:
        content = f.read()
    
    hero_banner = """
    <div class="split-section" style="margin-top: 2rem; margin-bottom: 4rem;">
      <div class="split-text">
        <h1 style="text-align: left; margin-bottom: 1rem;">Catálogo de Productos</h1>
        <p>Conoce nuestra amplia variedad de productos diseñados para brindar la mejor nutrición, sabor y rendimiento. Seleccionamos cuidadosamente nuestras materias primas para garantizar tu satisfacción.</p>
      </div>
      <div class="split-image">
        <div class="placeholder-img" style="height: 250px;">
          <i class="fas fa-box-open"></i>
          <span>[Espacio para Imagen: Banner Productos]</span>
        </div>
      </div>
    </div>
    """
    
    content = re.sub(r'<h1>Nuestros Productos</h1>', hero_banner, content)
    with open("productos.html", "w", encoding="utf-8") as f:
        f.write(content)

def update_recetas():
    with open("recetas.html", "r", encoding="utf-8") as f:
        content = f.read()

    new_recetas = """
    <div class="split-section" style="margin-top: 2rem; margin-bottom: 4rem;">
      <div class="split-image">
        <div class="placeholder-img" style="height: 250px;">
          <i class="fas fa-utensils"></i>
          <span>[Espacio para Imagen: Recetas/Cocina]</span>
        </div>
      </div>
      <div class="split-text">
        <h1 style="text-align: left; margin-bottom: 1rem;">Recetas con CIDELAC</h1>
        <p>Descubre formas deliciosas y creativas de integrar nuestros productos en tu día a día. Desde desayunos nutritivos hasta postres increíbles.</p>
      </div>
    </div>

    <div class="blog-posts" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
      <div class="info-card" style="padding: 0; text-align: left;">
        <div class="placeholder-img" style="height: 200px; border-radius: 24px 24px 0 0; border: none;">
          <i class="fas fa-image"></i>
          <span>[Imagen Receta 1]</span>
        </div>
        <div style="padding: 2rem;">
          <h3 style="color: var(--primary);">Batido Energético MERRY</h3>
          <p>Un delicioso batido lleno de energía para comenzar el día con toda la actitud.</p>
          <a href="#" class="cta-button" style="padding: 0.5rem 1rem; font-size: 0.9rem; margin-top: 1rem;">Ver Receta</a>
        </div>
      </div>

      <div class="info-card" style="padding: 0; text-align: left;">
        <div class="placeholder-img" style="height: 200px; border-radius: 24px 24px 0 0; border: none;">
          <i class="fas fa-image"></i>
          <span>[Imagen Receta 2]</span>
        </div>
        <div style="padding: 2rem;">
          <h3 style="color: var(--primary);">Postre Tradicional</h3>
          <p>Prepara un postre cremoso y delicioso utilizando nuestra leche en polvo entera CIDELAC.</p>
          <a href="#" class="cta-button" style="padding: 0.5rem 1rem; font-size: 0.9rem; margin-top: 1rem;">Ver Receta</a>
        </div>
      </div>

      <div class="info-card" style="padding: 0; text-align: left;">
        <div class="placeholder-img" style="height: 200px; border-radius: 24px 24px 0 0; border: none;">
          <i class="fas fa-image"></i>
          <span>[Imagen Receta 3]</span>
        </div>
        <div style="padding: 2rem;">
          <h3 style="color: var(--primary);">Crema para Café</h3>
          <p>El complemento perfecto para tu café de las mañanas, dándole un toque suave y espumoso.</p>
          <a href="#" class="cta-button" style="padding: 0.5rem 1rem; font-size: 0.9rem; margin-top: 1rem;">Ver Receta</a>
        </div>
      </div>
    </div>
    """
    content = re.sub(r'<h1>Recetas</h1>.*?</section>', new_recetas + '\n</section>', content, flags=re.DOTALL)
    with open("recetas.html", "w", encoding="utf-8") as f:
        f.write(content)

def update_tienda():
    with open("tienda.html", "r", encoding="utf-8") as f:
        content = f.read()

    new_tienda = """
    <div class="split-section" style="margin-top: 2rem; text-align: center; grid-template-columns: 1fr;">
      <div class="split-text" style="max-width: 800px; margin: 0 auto;">
        <div class="info-card-icon" style="font-size: 5rem; margin-bottom: 2rem;">
          <i class="fas fa-store-alt"></i>
        </div>
        <h1 style="font-size: 3.5rem;">Tienda Virtual en Construcción</h1>
        <p style="font-size: 1.2rem; margin-bottom: 3rem;">
          Pronto podrás adquirir todos nuestros productos de forma rápida y segura desde la comodidad de tu hogar.
          Estamos preparando la mejor experiencia de compra para ti.
        </p>
        <div class="placeholder-img" style="max-width: 600px; margin: 0 auto; height: 300px;">
          <i class="fas fa-shopping-cart"></i>
          <span>[Espacio para Imagen: Banner Tienda/Carro de Compras]</span>
        </div>
      </div>
    </div>
    """
    content = re.sub(r'<h1>Tienda Virtual</h1>.*?</section>', new_tienda + '\n</section>', content, flags=re.DOTALL)
    with open("tienda.html", "w", encoding="utf-8") as f:
        f.write(content)

def update_blog():
    with open("blog.html", "r", encoding="utf-8") as f:
        content = f.read()

    new_blog = """
    <div class="split-section" style="margin-top: 2rem; margin-bottom: 4rem;">
      <div class="split-text">
        <h1 style="text-align: left; margin-bottom: 1rem;">Blog y Noticias</h1>
        <p>Mantente al día con las últimas novedades de CIDELAC, consejos de nutrición y noticias del sector lácteo.</p>
      </div>
      <div class="split-image">
        <div class="placeholder-img" style="height: 200px;">
          <i class="fas fa-newspaper"></i>
          <span>[Espacio para Imagen: Banner Blog]</span>
        </div>
      </div>
    </div>

    <div class="blog-posts" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
      <div class="info-card" style="padding: 0; text-align: left;">
        <div class="placeholder-img" style="height: 200px; border-radius: 24px 24px 0 0; border: none;">
          <i class="fas fa-image"></i>
          <span>[Imagen Artículo 1]</span>
        </div>
        <div style="padding: 2rem;">
          <h3 style="color: var(--primary);">Beneficios de la Leche en Polvo</h3>
          <p>Descubre por qué la leche en polvo es una excelente alternativa nutricional que perdura en el tiempo.</p>
          <a href="#" style="color: var(--primary); font-weight: 600; text-decoration: none; margin-top: 1rem; display: inline-block;">Leer más <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>

      <div class="info-card" style="padding: 0; text-align: left;">
        <div class="placeholder-img" style="height: 200px; border-radius: 24px 24px 0 0; border: none;">
          <i class="fas fa-image"></i>
          <span>[Imagen Artículo 2]</span>
        </div>
        <div style="padding: 2rem;">
          <h3 style="color: var(--primary);">Lanzamiento Línea MERRY</h3>
          <p>Conoce todo sobre nuestra nueva línea de productos enriquecidos para toda la familia.</p>
          <a href="#" style="color: var(--primary); font-weight: 600; text-decoration: none; margin-top: 1rem; display: inline-block;">Leer más <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
    """
    content = re.sub(r'<h1>Blog y Noticias</h1>.*?</section>', new_blog + '\n</section>', content, flags=re.DOTALL)
    with open("blog.html", "w", encoding="utf-8") as f:
        f.write(content)

def update_contacto():
    with open("contacto.html", "r", encoding="utf-8") as f:
        content = f.read()

    new_contacto = """
    <div class="split-section" style="margin-top: 2rem;">
      <div class="split-text">
        <h1 style="text-align: left; margin-bottom: 1rem;">Contáctenos</h1>
        <p>¿Tienes alguna duda o quieres ser distribuidor? Escríbenos y nuestro equipo te responderá lo más pronto posible.</p>
        
        <form class="contact-form" style="margin-top: 2rem;">
          <div class="form-group">
            <input type="text" id="nombre" name="nombre" placeholder="Nombre Completo" required />
          </div>
          <div class="form-group">
            <input type="email" id="correo" name="correo" placeholder="Correo Electrónico" required />
          </div>
          <div class="form-group">
            <input type="text" id="telefono" name="telefono" placeholder="Teléfono / Celular" />
          </div>
          <div class="form-group">
            <textarea id="mensaje" name="mensaje" placeholder="Tu Mensaje" rows="5" required style="width: 100%; padding: 1rem; border-radius: 10px; border: 1px solid #ccc; font-family: inherit;"></textarea>
          </div>
          <button type="submit" class="cta-button" style="width: 100%;">Enviar Mensaje</button>
        </form>
      </div>
      
      <div class="split-image" style="display: flex; flex-direction: column; gap: 2rem;">
        <div class="placeholder-img" style="height: 300px;">
          <i class="fas fa-headset"></i>
          <span>[Espacio para Imagen: Servicio al Cliente]</span>
        </div>
        
        <div class="info-card" style="padding: 2rem; text-align: left;">
          <h3 style="margin-bottom: 1rem;"><i class="fas fa-map-marker-alt"></i> Nuestras Sedes</h3>
          <p><strong>Cartagena - Bolívar:</strong> +57 3157546407</p>
          <p><strong>Medellín - Antioquia:</strong> +57 3167402991</p>
          <p><strong>Oriente Antioqueño:</strong> +57 3158515745</p>
          <p><strong>Montería / Caucasia:</strong> +57 3021267391</p>
          <p><strong>Bucaramanga - Cúcuta:</strong> +57 3002196903</p>
          <br>
          <p><i class="fas fa-envelope"></i> ventas@cidelac.com</p>
        </div>
      </div>
    </div>
    """
    content = re.sub(r'<h1>Contáctenos</h1>.*?</section>', new_contacto + '\n</section>', content, flags=re.DOTALL)
    with open("contacto.html", "w", encoding="utf-8") as f:
        f.write(content)

update_empresa()
update_productos()
update_recetas()
update_tienda()
update_blog()
update_contacto()

print("Todas las secciones actualizadas con placeholders y diseños split.")
