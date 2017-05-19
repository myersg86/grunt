module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		rsync: {
		    options: {
		        args: ["--verbose"],
		        exclude: [".git*","*.scss","node_modules"],
		        recursive: true
		    },
		    dist: {
		        options: {
		            src: "./",
		            dest: "../dist"
		        }
		    },
		    stage: {
		        options: {
		            src: "../dist/",
		            dest: "/var/www/site",
		            host: "greg@localhost",
		            delete: true // Careful this option could cause data loss, read the docs!
		        }
		    },
		    prod: {
		        options: {
		            src: "../dist/",
		            dest: "/var/www/site",
		            host: "greg@localhost",
		            delete: true // Careful this option could cause data loss, read the docs!
		        }
		    }
		}
	});

	grunt.loadNpmTasks('grunt-rsync');

	grunt.registerTask('default', ['rsync']);
};
