// verify-build.js
const fs = require('fs');
const path = require('path');

function checkDirectory(dir) {
    console.log(`Checking directory: ${dir}`);

    if (!fs.existsSync(dir)) {
        console.error(`Directory not found: ${dir}`);
        return false;
    }

    const contents = fs.readdirSync(dir);
    console.log('Contents:', contents);

    return true;
}

function verifyBuild() {
    console.log('Verifying build output...');

    if (!fs.existsSync('dist')) {
        console.error('Dist directory not found!');
        return false;
    }

    const requiredFiles = [
        'index.html',
        'assets'
    ];

    let success = true;
    for (const file of requiredFiles) {
        const filepath = path.join('dist', file);
        if (!fs.existsSync(filepath)) {
            console.error(`Required path not found: ${file}`);
            success = false;
        } else {
            console.log(`Found: ${file}`);
        }
    }

    return success;
}

const success = verifyBuild();
if (success) {
    console.log('Build verification passed!');
} else {
    console.error('Build verification failed!');
    process.exit(1);
}
