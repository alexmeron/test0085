import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Para usar variables de entorno localmente, si existe un archivo .env
try {
  const envPath = path.join(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, 'utf8');
    envFile.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) process.env[match[1]] = match[2].trim();
    });
  }
} catch (e) {
  // Ignorar errores al cargar .env
}

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

if (!FIGMA_TOKEN || !FIGMA_FILE_KEY) {
  console.error("❌ ERROR: Faltan variables de entorno: FIGMA_TOKEN o FIGMA_FILE_KEY.");
  console.error("👉 Crea un archivo .env en la raíz del proyecto con:");
  console.error("FIGMA_TOKEN=tu_token_aqui");
  console.error("FIGMA_FILE_KEY=tu_file_key_aqui");
  process.exit(1);
}

async function fetchFigmaTokens() {
  console.log('⏳ Descargando tokens desde la API de Figma...');
  
  const response = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`, {
    headers: {
      'X-Figma-Token': FIGMA_TOKEN
    }
  });

  if (!response.ok) {
    throw new Error(`Error en la API de Figma: ${response.statusText}`);
  }

  const data = await response.json();
  
  const tokensData = {
    variableCollections: Object.values(data.meta.variableCollections),
    variables: Object.values(data.meta.variables)
  };

  const outputPath = path.join(__dirname, '../tokens/figma-raw-tokens.json');
  fs.writeFileSync(outputPath, JSON.stringify(tokensData, null, 2));
  
  console.log('✅ figma-raw-tokens.json actualizado correctamente.');
}

fetchFigmaTokens().catch(console.error);
