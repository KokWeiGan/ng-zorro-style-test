var path = require('path');
var fs = require('fs');
var themeCssPath = path.join(__dirname, '../dist/assets/theme.css');
var themeLessPath = path.join(__dirname, '../dist/theme/styles/variables.less');
var filesToChange = [themeCssPath, themeLessPath];

String.prototype.replaceAll = function(pattern, replacement) {
    return this.split(pattern).join(replacement);
};

for (var filePath of filesToChange) {
    console.log('Processing: ', filePath);
    if (fs.existsSync(filePath)) {
        var fileContent = fs.readFileSync(filePath, 'utf-8');

        // Rename assets path, because in dev mode, the assets path is different than compiled version.
        // In dev assets paths are relative to /src/styles/theme.less
        // In prod assets paths are relative to /assets
        if (fileContent) {
            fileContent = fileContent
                .replace(/:url\('..\/assets\//gi, ":url('./")
                .replace(/:url\(..\/assets\//gi, ':url(./')
                .replace(/: url\('..\/assets\//gi, ": url('./")
                .replace(/: url\(..\/assets\//gi, ': url(./');
            fs.writeFileSync(filePath, fileContent, 'utf-8');
            console.log('Processed: ', filePath);
            console.log();
        }
    } else {
        console.error(filePath, ' not found.');
    }
}
