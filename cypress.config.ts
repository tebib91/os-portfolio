import { defineConfig } from 'cypress'
module.exports = defineConfig({
  projectId: "pc8hth",
  // The rest of the Cypress config options go here...
  e2e: {
    baseUrl: 'http://localhost:4200',
    supportFile: false
  },

})
