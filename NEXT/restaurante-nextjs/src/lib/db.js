import fs from 'fs';
import path from 'path';

export function getDatabaseData() {
  const filePath = path.join(process.cwd(), 'db.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}