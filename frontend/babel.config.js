module.exports = {
  presets : [
    "@babel/preset-env", // converte codigo Es6 para JS antigo
    "@babel/preset-react", 
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}