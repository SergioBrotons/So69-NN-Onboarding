import * as XLSX from 'xlsx';
import * as path from 'path';

const EXCEL_PATH = path.join(process.cwd(), '../data/cards_repository.xlsx');
console.log(`Reading ${EXCEL_PATH}`);

const workbook = XLSX.readFile(EXCEL_PATH);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data: any[] = XLSX.utils.sheet_to_json(sheet);

console.log(`Total rows: ${data.length}`);

// Check for PROD-04
const targetId = 'PROD-04';
const found = data.find(row => {
    const id = row['Card ID'] || row['ID'] || row['Code'];
    return String(id).trim() === targetId;
});

if (found) {
    console.log(`Found ${targetId}:`, found);
} else {
    console.log(`${targetId} NOT FOUND.`);
    console.log('Sample IDs:', data.slice(0, 5).map(r => r['Card ID'] || r['ID'] || r['Code']));
    console.log('Keys:', Object.keys(data[0]));
}
