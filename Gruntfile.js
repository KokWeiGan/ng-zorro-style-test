module.exports = function(grunt) {
    var module = grunt.option('output');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            theme: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['styles/**/*.less'],
                        dest: 'dist/theme',
                    },
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['app/**/*.theme.less'],
                        dest: 'dist/theme',
                    },
                    {
                        expand: true,
                        src: [
                            './node_modules/ng-zorro-antd/**/**.less',
                        ],
                        dest: 'dist/',
                    },
                    {
                        expand: true,
                        src: [
                        ],
                        dest: 'dist/',
                    },
                ],
            },
            output: {
                expand: true,
                cwd: 'dist/',
                src: ['**/**.**'],
                dest: module || 'dist/',
            },
        },
    });

    // Load the plugin that provides the "copy" task.
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', []);
};
