import os

files = {
    'index.html': 'Inicio',
    'empresa.html': 'Nuestra Empresa',
    'productos.html': 'Productos y Catálogo',
    'recetas.html': 'Recetas Deliciosas',
    'tienda.html': 'Tienda Virtual',
    'blog.html': 'Blog y Noticias',
    'contacto.html': 'Contáctenos'
}

for filename, title in files.items():
    if not os.path.exists(filename):
        continue
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the standard title with an SEO optimized one
    new_title = f'<title>{title} | Comercializadora Cidelac</title>'
    content = content.replace('<title>Comercializadora Cidelac</title>', new_title)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

print("Títulos SEO actualizados.")
