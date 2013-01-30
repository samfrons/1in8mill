module.exports = function(grunt) {
    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            version: '<%= pkg.version %>',
            banner: '/*! JCole BornSinner Gallery - v<%= pkg.version %> \n' +
            '* generated: <%= grunt.template.today("yyyy-mm-dd - HH:mm:ss.sss") %>\n' +
            // '* Copyright (c) <%= grunt.template.today("yyyy") %> , Inc. ' +
            'William Kasel*/\n'
        },
        js: {
            files: {
                dependencies: [
                    // <dependencies>
                      '../vendor/jquery.js', '../vendor/underscore-min.js', '../vendor/backbone-min.js', '../vendor/modernizr-2.6.2.min.js',
                      '../vendor/handlebars.min.js', '../vendor/jquery.animate-enhanced.min.js', '../helper.js','../vendor/jquery.scrollTo.min.js','../vendor/jquery.color.js',
                      //<bootstrap>
                      '../vendor/bootstrap/bootstrap-transition.js', '../vendor/bootstrap/bootstrap-alert.js', '../vendor/bootstrap/bootstrap-button.js'
                      , '../vendor/bootstrap/bootstrap-carousel.js', '../vendor/bootstrap/bootstrap-collapse.js', '../vendor/bootstrap/bootstrap-dropdown.js'
                      , '../vendor/bootstrap/bootstrap-modal.js', '../vendor/bootstrap/bootstrap-tooltip.js', '../vendor/bootstrap/bootstrap-popover.js'
                      , '../vendor/bootstrap/bootstrap-scrollspy.js', '../vendor/bootstrap/bootstrap-tab.js', '../vendor/bootstrap/bootstrap-typeahead.js'
                      //</bootstrap>
                      // </dependencies>
                ],
                app: [
                    // <app>
                    '../src/Setup.js',
                    '../templates/templates.js',
                    '../src/Models.js', '../src/Collections.js',
                    // <views>
                    '../src/views/MainView.js','../src/views/StoriesView.js','../src/views/StoryView.js', 
                    // </views>
                    '../src/Events.js', '../src/Routers.js',
                    '../src/Init.js',
                    // </app>
                ]
            }
        },
        jslint: {
            files: [
                'Gruntfile.js',
                '../application.js'
            ],
            directives: {
                browser: true,
                unparam: true,
                predef: [
                'jQuery', '_', 'Backbone'
                ]
            },
            //not implemented yet
            options: {
                junit: 'tests/out/junit.xml',
                log: 'tests/out/lint.log',
                jslintXml: 'tests/out/jslint_xml.xml',
                errorsOnly: true,
                failOnError: false
            }
        },
        recess: {
            dist: {
                src: [
                '../../css/less/bootstrap/bootstrap.less',
                '../../css/less/app.less'
                ],
                dest: '../../css/application.css',
                options: {
                    compile: true,
                    compress: true,
                    zeroUnits: true,
                }
            }
        },
        concat: {
            options: {
                banner: '<%= meta.banner %>'
            },
            dist: {
                src: ['<%= js.files.dependencies %>','<%= js.files.app %>'],
                dest: '../application.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= meta.banner %>'
            },
            dist: {
                src: ['<%= js.files.dependencies %>','<%= js.files.app %>'],
                dest: '../application.min.js'
            }
        },
        mincss: {
            compress: {
                files: {
                    '../../css/application.min.css': ['../../css/application.css']
                }
            }
        },
        jade: {
          compile: {
            options: {
                data: {
                    version: "<%= pkg.version %>",
                    debug: true,
                    timestamp: "<%= new Date().getTime() %>"
                },
                pretty: true,
            },
            files: {
              "../../templates/static/*.handlebars": ["../../templates/jade/*.jade", "../../templates/jade/**/*.jade"]
            }
          }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: "app.templates",
                    wrapped: true,
                    processName: function(filename) {
                        return filename.substring(23, filename.length - 11); // removes the string ".handlebars" -- if the name changes from /templates, update this
                    }
                },
                files: {
                    "../templates/templates.js": ["../../templates/static/*.handlebars","../../templates/static/**/*.handlebars"]
                }
            }
        },
        coffee: {
            options: {
                bare:true
            },
            compile: {
                files: {
                    '../src/*.js': ['../coffee/*.coffee', '../coffee/**/*.coffee']
                }
            }
        },
        less: {
            compile: {
                options: {
                    compress: true
                },
                files: {
                    "../../css/application.css": "../../css/less/app.less",
                }
            }
        },

        watch: {
            files: [
                '<%= js.files.dependencies %>',  //raw js dependencies
                '../../css/less/*.less', '../../css/less/bootstrap/*.less', //less
                '../coffee/*.coffee','../coffee/**/*.coffee', //coffee
                "../../templates/jade/*.jade", "../../templates/jade/**/*.jade", // jade
                '../templates/*.handlebars', '../templates/**/*.handlebars' //handlebars
                ],
            tasks: 'default'
        },
    });
    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-recess'); //has been manually updated to work with grunt 0.4.0
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['coffee','jade','handlebars', 'less', 'concat', 'mincss']);
    grunt.registerTask('deploy', ['coffee','jade','handlebars', 'less', 'recess', 'concat', 'uglify', 'mincss']);

};
