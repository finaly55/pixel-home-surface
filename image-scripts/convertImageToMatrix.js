const fs = require('fs');

function loadMatrixFromFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');
  return data
    .trim()
    .split('\n')
    .map((line) => line.split('').map(Number));
}

function saveMatrixToJson(matrix, jsonPath) {
  fs.writeFileSync(jsonPath, JSON.stringify(matrix, null, 2));
  console.log(`Matrice enregistrée dans ${jsonPath}`);
}

const matrix = loadMatrixFromFile('image-scripts/output/naolibMatrix.txt');
saveMatrixToJson(matrix, 'image-scripts/output/naolibMatrix.json');
