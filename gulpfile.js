var gulp = require('gulp');
var browserSync = require('browser-sync');
/*var paths = {
    scss: './sass/*.scss'
};*/

// BrowserSync Server
gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "*.html", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

// Watch
gulp.task('watch', ['browser-sync'], function() {
    gulp.watch(['/*.html']);

});
