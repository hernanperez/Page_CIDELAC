import zipfile
import xml.etree.ElementTree as ET
import sys

def read_docx(path):
    try:
        with zipfile.ZipFile(path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.XML(xml_content)
            
            # The namespace dictionary
            namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            
            # Find all text elements
            texts = tree.findall('.//w:t', namespaces)
            
            # We want to keep some structure, maybe group by paragraph
            paragraphs = tree.findall('.//w:p', namespaces)
            text_content = []
            for p in paragraphs:
                p_texts = p.findall('.//w:t', namespaces)
                p_text = ''.join([t.text for t in p_texts if t.text])
                if p_text:
                    text_content.append(p_text)
            
            return '\n'.join(text_content)
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    doc_path = sys.argv[1]
    print(read_docx(doc_path))
