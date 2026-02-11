const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const EXCEL_PATH = path.join(process.cwd(), '../data/cards_repository.xlsx');
console.log(`Reading ${EXCEL_PATH}`);

if (!fs.existsSync(EXCEL_PATH)) {
    console.error('File does not exist!');
    process.exit(1);
}

const workbook = XLSX.readFile(EXCEL_PATH);
const sheetName = workbook.SheetNames[0];
console.log(`Sheet Name: ${sheetName}`);

const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet);

console.log(`Total rows: ${data.length}`);

// Debug first row
if (data.length > 0) {
    console.log('First row keys:', Object.keys(data[0]));
    console.log('First row sample:', data[0]);
}

// Check for PROD-04
const targetId = 'PROD-04';
const found = data.find(row => {
    // Try to find the ID column dynamically
    const id = row['Card ID'] || row['ID'] || row['Code'] || row['id'];
    return String(id).trim() === targetId;
});

if (found) {
    console.log(`Found ${targetId}:`, found);
} else {
    console.log(`${targetId} NOT FOUND.`);
}
