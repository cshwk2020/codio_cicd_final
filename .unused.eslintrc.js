module.exports = {
  env: {
    browser: true, 
    es2021: true, 
    node: true, 
    jest: true 
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        //'.eslintrc.{js,cjs}',
        ['.eslintrc.js', '.eslintrc.cjs'],
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}
