import os
import re

files_map = {
    'index.html': 'index.html',
    'empresa.html': 'empresa.html',
    'productos.html': 'productos.html',
    'recetas.html': 'recetas.html',
    'tienda.html': 'tienda.html',
    'blog.html': 'blog.html',
    'contacto.html': 'contacto.html'
}

for filename, target_href in files_map.items():
    if not os.path.exists(filename):
        continue
        
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Step 1: Remove 'active' from all nav-links
    # find something like class="nav-link active" or class="active nav-link" and replace with class="nav-link"
    content = re.sub(r'class="nav-link active"', 'class="nav-link"', content)
    content = re.sub(r'class="active nav-link"', 'class="nav-link"', content)
    
    # Step 2: Add 'active' to the link corresponding to this page
    # find <a href="filename" class="nav-link"> and replace with <a href="filename" class="nav-link active">
    target_str = f'href="{target_href}" class="nav-link"'
    replacement = f'href="{target_href}" class="nav-link active"'
    content = content.replace(target_str, replacement)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

print("Clase 'active' actualizada en todos los menús de navegación.")
