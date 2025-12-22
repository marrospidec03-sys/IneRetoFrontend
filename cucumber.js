module.exports = {
  default: {
    formatOptions: {
      snippetInterface: 'async-await'
    },
    paths: [
      'features/**/*.feature'
    ],
    require: [
      'step_definitions/**/*.js'
    ]
  }
}