import fs from 'fs';
import path from 'path';

const DATABASE_PATH = '/src/database.json';

export function readFile(localPath) {
  return fs.readFileSync(
    path.join(process.cwd(), localPath),
    'utf8'
  );
}

export function writeFile(localPath, content) {
  return fs.writeFileSync(
    path.join(process.cwd(), localPath),
    content,
    { encoding: 'utf8' }
  );
}

export function logSiteVisit() {
  const db = JSON.parse(readFile(DATABASE_PATH));
  db.hits += 1;
  writeFile(DATABASE_PATH, JSON.stringify(db));

  return db.hits;
}