import gulp from 'gulp';
import terser from 'gulp-terser';          // For minifying JS
import rev from 'gulp-rev';                // For appending hash to file names
import revReplace from 'gulp-rev-replace'; // For updating references in HTML
import { deleteAsync } from 'del';          // For cleaning up old files

// Paths to your asset folders
const paths = {
    scripts: 'js/*.js',           // All JS files in the 'js' folder (like common.js, app.js)
    html: '*.html',              // Assuming your HTML file is at the root
    images: 'img/**/*',           // All image files in the 'img' folder
    css: 'css/output.css',       // Tailwind output (we will move it to dist/css later)
    dist: 'dist/',                // Distribution folder
    distJs: 'dist/js',            // Final JS output folder
    distCss: 'dist/css',           // Final CSS output folder
    distImg: 'dist/img'           // Final images output folder
};

// Clean up old files in dist
gulp.task('clean', () => {
    return deleteAsync([`${paths.dist}/**`, `!${paths.dist}`]);
});

// Move and hash CSS
gulp.task('hash-css', function () {
    return gulp.src(paths.css)
        .pipe(rev()) // Add hash to the CSS file
        .pipe(gulp.dest(paths.distCss)) // Place the hashed CSS into the dist/css folder
        .pipe(rev.manifest('dist/rev-manifest.json', { merge: true })) // Update the manifest
        .pipe(gulp.dest('.'));
});

// Minify JS, hash, and output to dist/js
gulp.task('minify-js', function () {
    return gulp.src(paths.scripts)
        .pipe(terser())
        .pipe(rev()) // Add hash to the JS file
        .pipe(gulp.dest(paths.distJs)) // Place the hashed JS into the dist/js folder
        .pipe(rev.manifest('dist/rev-manifest.json', { merge: true })) // Update the manifest
        .pipe(gulp.dest('.'));
});

// Minify HTML and update references to hashed files (JS & CSS)
gulp.task('minify-html', function () {
    const manifest = gulp.src('dist/rev-manifest.json'); // Use the manifest to update HTML

    return gulp.src(paths.html)
        .pipe(revReplace({ manifest })) // Replace references in HTML with hashed filenames
        .pipe(gulp.dest(paths.dist));   // Output updated HTML into the 'dist' folder
});

// Default task to clean, hash CSS, minify JS, and then update HTML
gulp.task('default', gulp.series('clean', 'hash-css', 'minify-js', 'minify-html'));
