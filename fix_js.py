import os
import re

html_files = [
    'index.html', 'empresa.html', 'productos.html', 
    'recetas.html', 'tienda.html', 'blog.html', 'contacto.html'
]

pattern = r'\s*// --- Navigation ---.*?\s*\}\);\s*\}\);'

for filename in html_files:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # We want to replace the whole block starting from // --- Navigation --- 
        # up to the dangling }); });
        
        # A simpler way is to just find the block and replace it since we know exactly what it is.
        # It's better to use regex with DOTALL
        content = re.sub(pattern, '', content, flags=re.DOTALL)
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)

print("Errores JS de navegación solucionados.")
