module.exports = function (grunt) {
    grunt.initConfig({
        babel : {
            dist : {
                files : [{
                    expand: true,
					cwd: 'src/',
					src: ['**/*.js'],
					dest: 'dest/'
                }]
            }
        },
		watch: {
			files: 'src/**/*.js',
			tasks: ['babel']
		}
    });
	
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['babel','watch']);
	grunt.registerTask('build', ['babel']);
};
