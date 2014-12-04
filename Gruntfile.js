/* global module, require */

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

  grunt.initConfig({
    site: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      less: {
        files: ['<%= site.app %>/_less/**/*.less'],
        tasks: ['less:server']
      },
      jekyll: {
        files: [
          '<%= site.app %>/**/*.{html,yml,md,mkd,markdown}',
          '_config.yml',
          '<%= site.app %>/**/*.xml',
          '!<%= site.app %>/vendor'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: {
            port: '<%= connect.options.livereload %>'
          }
        },
        files: [
          '<%= site.app %>/**/*.xml',
          '<%= site.app %>/js/**/*.js',
          '<%= site.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
          '<%= site.app %>/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9033,
        livereload: 35728,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= site.dist %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '<%= site.dist %>/*',
              '!<%= site.dist %>/.git*'
            ]
          }
        ]
      }
    },
    less: {
      compile: {
        options: {},
        files: {
          '<%= site.dist %>/css/core.css': '<%= site.app %>/_less/core.less'
        }
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml',
        src: '<%= site.app %>'
      },
      build: {
        options: {
          dest: '<%= site.dist %>'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= site.app %>/_js/**/*.js'
      ]
    },
    jsbeautifier: {
      modify: {
        src: [
          '<%= site.app %>/js/**/*.js'
        ],
        options: {
          config: '.jsbeautifyrc'
        }
      },
      check: {
        src: [
          '<%= site.app %>/js/**/*.js'
        ],
        options: {
          mode: 'VERIFY_ONLY',
          config: '.jsbeautifyrc'
        }
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= site.dist %>/css/core.css'
        ]
      }
    }
  });


  grunt.registerTask('build', [
    'clean',
    'jekyll:build',
    'less'
  ]);

  grunt.registerTask('dev', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('check', [
    'jekyll:check',
    'jshint',
    'jsbeautifier:check',
    'csslint'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
