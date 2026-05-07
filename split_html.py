import re

def main():
    with open('comercializadora_cidelac.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the top part (up to <main class="container">)
    top_match = re.search(r'(.*?<main class="container">)', content, re.DOTALL)
    top_part = top_match.group(1)

    # Find the bottom part (from </main> to the end)
    bottom_match = re.search(r'(</main>.*)', content, re.DOTALL)
    bottom_part = bottom_match.group(1)

    # Replace nav links in top_part
    nav_replacements = {
        '#inicio': 'index.html',
        '#empresa': 'empresa.html',
        '#productos': 'productos.html',
        '#recetas': 'recetas.html',
        '#tienda': 'tienda.html',
        '#blog': 'blog.html',
        '#contacto': 'contacto.html'
    }
    
    # We also need to add 'active' class correctly or just let the JS handle it or remove 'active' from HTML and do it in JS/CSS.
    # Actually, let's just replace hrefs.
    for old, new in nav_replacements.items():
        top_part = top_part.replace(f'href="{old}"', f'href="{new}"')

    # Also update the JS that handles nav links, because it's looking for "#" and doing e.preventDefault().
    # We should remove the e.preventDefault() for navigation between pages in the bottom part.
    # The bottom_part has:
    # navLinks.forEach((link) => {
    #   link.addEventListener("click", (e) => {
    #     e.preventDefault();
    # ...
    # We can just remove that JS block since navigation is now standard page loads!
    js_to_remove = r'navLinks\.forEach\(\(link\) => \{.*?\}\);'
    bottom_part = re.sub(js_to_remove, '', bottom_part, flags=re.DOTALL)

    # Extract sections
    sections_raw = re.findall(r'(<section id="(.*?)".*?</section>)', content, re.DOTALL)
    sections = {sec_id: sec_html for sec_html, sec_id in sections_raw}

    # Files mapping
    file_mapping = {
        'inicio': 'index.html',
        'empresa': 'empresa.html',
        'productos': 'productos.html',
        'recetas': 'recetas.html',
        'tienda': 'tienda.html',
        'blog': 'blog.html',
        'contacto': 'contacto.html'
    }

    # Generate files
    for sec_id, filename in file_mapping.items():
        sec_html = sections.get(sec_id, '')
        
        # Ensure section is active
        sec_html = sec_html.replace('class="section"', 'class="section active"')
        
        full_html = top_part + '\n' + sec_html + '\n' + bottom_part
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(full_html)

    print("Archivos HTML divididos con éxito.")

if __name__ == '__main__':
    main()
