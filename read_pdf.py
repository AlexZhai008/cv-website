import PyPDF2
import sys

def extract_text(pdf_path):
    text = ""
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        for page in reader.pages:
            text += page.extract_text() + "\n"
    return text

if __name__ == "__main__":
    path = "CV-项目经理-翟强-1.pdf"
    print(extract_text(path))
