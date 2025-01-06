import fs from 'fs-extra';
import path from 'path';


//paths for allure-report and allure-results
const allureReportDir = path.join(process.cwd(), 'allure-report');
const allureResultsDir = path.join(process.cwd(), 'allure-results');
const historyDir = path.join(allureReportDir, 'history');



async function copyHistoryFolder() {
    try {
        if (await fs.pathExists(historyDir)) {
        
            await fs.ensureDir(allureResultsDir); 
          
            await fs.copy(historyDir, path.join(allureResultsDir, 'history')); 
            console.log('Successfully copied the history folder to allure-results');
        } else {
            console.log('No history folder found in allure-report');
        }
    } catch (error) {
        console.error('Error copying history folder:', error);
    }
}

copyHistoryFolder();
