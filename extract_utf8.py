import pdfplumber

def extract_text(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() + "\n"
    return text

if __name__ == "__main__":
    path = "CV-项目经理-翟强-1.pdf"
    content = extract_text(path)
    with open("cv_utf8.txt", "w", encoding="utf-8") as f:
        f.write(content)
    print("Done")
