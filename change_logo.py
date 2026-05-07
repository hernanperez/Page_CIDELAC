import os

html_files = [
    'index.html',
    'empresa.html',
    'productos.html',
    'recetas.html',
    'tienda.html',
    'blog.html',
    'contacto.html'
]

for filename in html_files:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace logo.png with LogoCidelac12.png
        new_content = content.replace('imagenes/logo.png', 'imagenes/LogoCidelac12.png')
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(new_content)

print("Logo cambiado a LogoCidelac12.png en todos los archivos HTML.")
