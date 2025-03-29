const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputFile = 'README.md';
const outputDir = 'diagrams';

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Leer el contenido del archivo Markdown
let content = fs.readFileSync(inputFile, 'utf8');

// Expresión regular para encontrar bloques Mermaid
const mermaidRegex = /```mermaid\n([\s\S]*?)\n```/g;

let match;
let index = 1;
while ((match = mermaidRegex.exec(content)) !== null) {
    const mermaidCode = match[1];
    const mermaidFile = path.join(outputDir, `diagram_${index}.mmd`);
    const imageFile = path.join(outputDir, `diagram_${index}.png`);
    
    // Guardar el código en un archivo .mmd
    fs.writeFileSync(mermaidFile, mermaidCode);
    
    // Generar la imagen con mmdc
    execSync(`mmdc -i "${mermaidFile}" -o "${imageFile}"`);
    
    // Reemplazar el bloque en el contenido
    content = content.replace(match[0], `![Diagrama ${index}](${imageFile})`);
    
    index++;
}

// Guardar el archivo modificado
fs.writeFileSync(inputFile, content, 'utf8');

console.log('Conversión completada.');
