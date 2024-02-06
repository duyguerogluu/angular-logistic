module.exports = {
  packages: {
    'ngx-daterangepicker-material': {
      ignorableDeepImportMatchers: [
        /plugin\//,
      ]
    },
    '@ckeditor/ckeditor5-angular': {
      ignorableDeepImportMatchers: [
        /node_modules\//,
      ]
    },
  },
};