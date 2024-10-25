from PIL import Image

def image_to_matrix(image_path, width=64, height=32):
    img = Image.open(image_path)
    img = img.resize((width, height))
    img = img.convert('RGB')
    pixels = list(img.getdata())
    matrix = []
    for y in range(height):
        row = []
        for x in range(width):
            r, g, b = pixels[y * width + x]
            row.append(1 if g > 128 and r < 128 and b < 128 else 0)
        matrix.append(row)
    return matrix

def save_matrix_to_file(matrix, file_path):
    with open(file_path, 'w') as f:
        for row in matrix:
            f.write(''.join(map(str, row)) + '\n')

matrix = image_to_matrix('image-scripts/input/naolib.png')
save_matrix_to_file(matrix, 'image-scripts/output/naolibMatrix.txt')