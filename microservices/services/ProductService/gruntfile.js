module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);
grunt.loadNpmTasks('grunt-contrib-clean');  
grunt.loadNpmTasks('grunt-auto-install');		  
grunt.loadNpmTasks('grunt-contrib-copy');	
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.initConfig({
    babel: {
		options: {
			sourceMap: false,
			presets: ['babel-preset-es2015']
		}
  ,
		dist: {
			files: {
				'app/config/app.js': 'src/config/app.es6.js',
				'app/server.js':'src/server.es6.js',
        'app/business/productBusiness.js':'src/business/productBusiness.js',
        'app/services/dbClient.js':'src/services/dbClient.js',
        'app/routes/productRoutes.js':'src/routes/productRoutes.js',
        'app/config/config.js':'src/config/config.js',
        'app/server.js':'src/server.es6.js',
        'app/common/logging/logger.js':'src/common/logging/logger.js',
        'app/common/security/cors.js':'src/common/security/cors.js',
        'app/common/security/identity.js':'src/common/security/identity.js',
        'app/common/errors/error.js':'src/common/errors/error.js'
			}
		}
  },
     auto_install: {
      local: {},
      subdir: {
      options: {
        cwd: 'app',
        stdout: true,
        stderr: true,
        failOnError: true,
        npm: '--production'
      }
    }
  }
  ,
    copy: {
      config: {
            files: [
      // includes files within path
                  {expand: true, cwd:'src/config',src: '*.json', dest: 'app/config/', filter: 'isFile'},
                  {expand: true, cwd:'src/',src: 'package.json', dest: 'app/', filter: 'isFile'},
                  {expand: true, src: '.empty', dest: 'app/logs/.empty', filter: 'isFile'}
                  ],
              },
        },
    clean: {
      cleanapp: ['app/**']
    },

    watch: {
  scripts: {
    files: 'src/**/*.js',
    tasks: ['compile'],
    options: {
      debounceDelay: 250,
    },
  },
},

 mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt', // Optionally capture the reporter output to a file 
          quiet: false, // Optionally suppress output to standard out (defaults to false) 
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
        },
        src: ['test/**/*.js']
      }
    },
    mocha_istanbul: {
            coverage: {
                src: 'test/**/*.js'
            }
  }
	
  });

grunt.registerTask('cleanapp', ['clean']);
grunt.registerTask('compile', ['babel']);
grunt.registerTask('updateconfig', ['copy:config']);
grunt.registerTask('npminstall',['auto_install:subdir']);
grunt.registerTask('test', ['mochaTest','mocha_istanbul']);
grunt.registerTask('build', ['cleanapp','babel','copy:config','auto_install:subdir','mochaTest','mocha_istanbul']);



};
