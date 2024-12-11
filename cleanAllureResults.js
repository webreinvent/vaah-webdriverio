import fs from 'fs';
import path from 'path';


const allureResultsDir = path.join(process.cwd(), 'allure-results');


async function cleanAllureResults() {
    try {
        if (fs.existsSync(allureResultsDir)) {
            await fs.promises.rm(allureResultsDir, { recursive: true, force: true });
            console.log('Deleted allure-results folder');
        } else {
            console.log('allure-results folder does not exist');
        }
    } catch (error) {
        console.error('Error deleting allure-results folder:', error);
    }
}


cleanAllureResults();
