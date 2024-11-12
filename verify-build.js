// verify-build.js
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const requiredFiles = [
    'index.html',
    'assets',
    'assets/js',
    'assets/css'
];

const requiredAssets = [
    // Add any specific assets you need to verify
];

function checkDirectory(dir) {
    console.log(chalk.blue(`Checking directory: ${dir}`));

    if (!fs.existsSync(dir)) {
        console.error(chalk.red(`❌ Directory not found: ${dir}`));
        return false;
    }

    const contents = fs.readdirSync(dir);
    console.log(chalk.gray('Contents:'), contents);

    return true;
}

function verifyBuild() {
    console.log(chalk.yellow('Verifying build output...'));

    // Check dist directory exists
    if (!fs.existsSync('dist')) {
        console.error(chalk.red('❌ Dist directory not found!'));
        return false;
    }

    // Check required files and directories
    let success = true;
    for (const file of requiredFiles) {
        const filepath = path.join('dist', file);
        if (!fs.existsSync(filepath)) {
            console.error(chalk.red(`❌ Required path not found: ${file}`));
            success = false;
        } else {
            console.log(chalk.green(`✓ Found: ${file}`));
        }
    }

    // Check index.html content
    const indexContent = fs.readFileSync('dist/index.html', 'utf-8');
    if (!indexContent.includes('script') || !indexContent.includes('link')) {
        console.error(chalk.red('❌ index.html might be missing important tags!'));
        console.log(chalk.gray('index.html content:'), indexContent);
        success = false;
    }

    return success;
}

// Install required packages
console.log(chalk.yellow('Installing build verification dependencies...'));
await import('chalk').catch(() => {
    console.log('Installing chalk...');
    await exec('npm install --save-dev chalk');
});

// Run verification
const success = verifyBuild();
if (success) {
    console.log(chalk.green('✓ Build verification passed!'));
} else {
    console.error(chalk.red('❌ Build verification failed!'));
    process.exit(1);
}
