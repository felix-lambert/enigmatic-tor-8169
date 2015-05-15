module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      // You get to make the name
      // The paths tell JSHint which files to validate
      myFiles: [
        'backend/authentification/passport/passportSocial.js',
        'backend/authentification/auth.js',
        'backend/authentification/passportStrategy.js',
        'backend/socket.io/*',
        'backend/config/config.js',
        'backend/controllers/filesCtrl.js',
        'backend/controllers/friendNotificationCtrl.js',
        'backend/controllers/friendsCtrl.js',
        'backend/controllers/notificationCtrl.js',
        'backend/controllers/statusCtrl.js',
        'backend/controllers/transactionCtrl.js',
        'backend/db/*',
        'backend/models/models.js',
        'backend/models/schemas/announceSchemas/AnnounceCommentModel.js',
        'backend/models/schemas/announceSchemas/AnnounceModel.js',
        'backend/models/schemas/announceSchemas/CategoryModel.js',
        'backend/models/schemas/chatSchemas/MessageModel.js',
        'backend/models/schemas/chatSchemas/RoomModel.js',
        'backend/models/schemas/userSchemas/FriendModel.js',
        'backend/models/schemas/userSchemas/FriendNotificationModel.js',
        'backend/models/schemas/userSchemas/ImageModel.js',
        'backend/models/schemas/userSchemas/NotificationModel.js',
        'backend/models/schemas/userSchemas/StatusModel.js',
        'backend/models/schemas/userSchemas/TokenModel.js',
        'backend/models/schemas/userSchemas/UserModel.js',
        'backend/routes/announces/*',
        'backend/routes/sessions/*',
        'backend/routes/sockets/*',
        'frontend/app.js',
        'frontend/angularConstant/config.js',
        'frontend/angularConstant/geolocation_msgs.js',
        'frontend/angularConstant/useragentmsgs.js',
        'frontend/angularControlers/AnnouncesAngCtrl.js',
        'frontend/angularControlers/ForgotAngCtrl.js',
        'frontend/angularControlers/MainAngCtrl.js',
        'frontend/angularControlers/MainHeaderAngCtrl.js',
        'frontend/angularControlers/NavbarAngCtrl.js',
        'frontend/angularControlers/PaginationAngCtrl.js',
      ]
    },
    uglify: {
      build: {
        src: [
              'frontend/angularLib/angular.js',
              'frontend/angularLib/angular-animate.js',
              'frontend/angularLib/angular-messages.js',
              'frontend/angularLib/angular-route.js',
              'frontend/angularLib/ui-bootstrap.js',
              'frontend/angularLib/angular-css.min.js',
              'frontend/angularLib/http-auth-interceptor.js',
              'frontend/angularLib/angular-resource.js',
              'frontend/angularLib/ngStorage.js',
              'frontend/angularLib/toaster.js',
              'frontend/angularLib/angular-file-upload.js',
              'frontend/app.js',
              'frontend/angularConfig.js',
              'frontend/angularRun.js',
              'frontend/angularConstant/useragentmsgs.js',
              'frontend/angularConstant/config.js',
              'frontend/angularControllers/MainHeaderAngCtrl.js',
              'frontend/angularControllers/MainAngCtrl.js',
              'frontend/angularControllers/AnnouncesAngCtrl.js',
              'frontend/angularControllers/profile/ProfileAngCtrl.js',
              'frontend/angularControllers/profile/ActualityAngCtrl.js',
              'frontend/angularControllers/modal/AboutModalAngCtrl.js',
              'frontend/angularControllers/profile/HistoricAngCtrl.js',
              'frontend/angularControllers/profile/MessageAngCtrl.js',
              'frontend/angularControllers/profile/PictureAngCtrl.js',
              'frontend/angularControllers/profile/ReputationAngCtrl.js',
              'frontend/angularControllers/profile/SettingsAngCtrl.js',
              'frontend/angularControllers/profile/AboutAngCtrl.js',
              'frontend/angularControllers/profile/JournalAngCtrl.js',
              'frontend/angularControllers/profile/WalletAngCtrl.js',
              'frontend/angularDirectives/validator/pswCompareToValidatorDrct.js',
              'frontend/angularDirectives/filters/ratingDrct.js',
              'frontend/angularDirectives/chat/onBlurDrct.js',
              'frontend/angularDirectives/chat/onFocusDrct.js',
              'frontend/angularDirectives/validator/emailAvailableValidatorDrct.js',
              'frontend/angularDirectives/filters/userFilterDrct.js',
              'frontend/angularDirectives/filters/checkboxListDrct.js',
              'frontend/angularDirectives/validator/usernameAvailableValidatorDrct.js',
              'frontend/angularDirectives/fileUploadDrct.js',
              'frontend/angularControllers//profile/TransactionAngCtrl.js',
              'frontend/angularControllers//modal/transactionModalCtrl.js',
              'frontend/angularControllers/modal/AuthModalAngCtrl.js',
              'frontend/angularFactories/transactions/TransactionsFctr.js',
              'frontend/angularFactories/StatusFctr.js',
              'frontend/angularFactories/auth/AuthFctr.js',
              'frontend/angularFactories/auth/SessionFctr.js',
              'frontend/angularFactories/auth/user/UserFctr.js',
              'frontend/angularFactories/auth/user/UsernameFctr.js',
              'frontend/angularFactories/announces/AnnouncesFctr.js',
              'frontend/angularFactories/socket/NotificationsFctr.js',
              'frontend/angularFactories/announces/CommentsFctr.js',
              'frontend/angularFactories/FriendsFctr.js',
              'frontend/angularFactories/announces/AnnounceFctr.js',
              'frontend/angularFactories/socket/chat/MessagesFctr.js',
              'frontend/angularFactories/socket/chat/RoomsFctr.js',
              'frontend/angularFactories/socket/SocketFctr.js',
              'frontend/angularFactories/auth/user/ProfileFctr.js',
              'frontend/angularFactories/socket/SocketFctr.js',
              'frontend/angularFactories/auth/user/ProfileFctr.js',
              'frontend/angularFactories/ImageFctr.js',
              'frontend/angularFilters/starsFltr.js',
              'frontend/angularFilters/cutFltr.js',
              'frontend/angularFilters/searchForFltr.js',
        ],
        dest: 'frontend/minifiedProject.min.js'
      }
    },
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'assets/',
        src: ['frontend/minifiedProject.min.js'],
        dest: 'frontend/'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-contrib-compress');

  // Default task(s).
  grunt.registerTask('heroku', ['uglify']);

};
