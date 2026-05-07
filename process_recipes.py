import re

def process_recipes():
    with open('recetas.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # The text we got from RECETAS.docx:
    recipes_text = """Secretos de Cocina con Leche CIDELAC: Recetas que Enamoran
1. AREQUIPE CASERO CON LECHE EN POLVO 
Ingredientes
2 tazas de leche en polvo
2 tazas de azúcar
1 taza de agua
1 cucharada de mantequilla
½ cucharadita de bicarbonato
1 cucharadita de vainilla (opcional)
Preparación
En una olla mezcla el agua con el azúcar y cocina a fuego medio.
Agrega la leche en polvo poco a poco mezclando bien para evitar grumos.
Incorpora la mantequilla y el bicarbonato.
Cocina a fuego bajo revolviendo constantemente.
Cuando espese y tome color caramelo agrega la vainilla.
Deja enfriar y guarda en un frasco.
2. HELADO CREMOSO DE VAINILLA
Ingredientes
1 taza de leche en polvo
2 tazas de agua fría
½ taza de azúcar
1 cucharadita de vainilla
½ taza de crema de leche (opcional)
Preparación
Licúa todos los ingredientes durante 1 minuto.
Vierte la mezcla en un recipiente.
Lleva al congelador.
Cada hora revuelve para evitar cristales de hielo.
Después de 4 horas estará listo para servir.
3. GALLETAS SUAVES CON LECHE EN POLVO
Ingredientes
1 taza de leche en polvo
1 taza de harina de trigo
½ taza de mantequilla
½ taza de azúcar
1 huevo
½ cucharadita de polvo para hornear
1 cucharadita de vainilla
Preparación
Precalienta el horno a 180°C.
Mezcla la mantequilla con el azúcar hasta formar una crema.
Agrega el huevo y la vainilla.
Incorpora la harina, el polvo de hornear y la leche en polvo.
Forma bolitas y colócalas en una bandeja.
Hornea durante 12–15 minutos."""
    # (Just adding a few as a proof of concept or I can add the full text here)

    # Actually, let's just make it simpler. I will write the HTML directly for a few recipes as an example,
    # or let the user know I am ready to process the rest of the folders.
    pass

if __name__ == '__main__':
    process_recipes()
