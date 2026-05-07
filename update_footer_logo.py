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

target_str = '<a href="#"><img src="imagenes/LogoCidelac12.png" alt="Logo Cidelac" /></a>'
replacement_str = '<a href="#"><img src="imagenes/LogoCidelac1.png" alt="Logo Cidelac" /></a>'

for filename in html_files:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if the exact target is in the file (to avoid any case/space issues, let's normalize slightly if needed, or just exact replace)
        if target_str in content:
            new_content = content.replace(target_str, replacement_str)
        else:
            # Fallback matching with slightly different formatting if any
            new_content = content.replace('LogoCidelac12.png" alt="Logo Cidelac"', 'LogoCidelac1.png" alt="Logo Cidelac"')
            
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(new_content)

print("Logo de footer cambiado a LogoCidelac1.png en todos los archivos HTML.")
