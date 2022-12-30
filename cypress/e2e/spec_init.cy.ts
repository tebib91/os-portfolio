const assertOnline = () => {
  return cy.wrap(window).its('navigator.onLine').should('be.true');
};

const goOnline = () => {
  // disable offline mode, otherwise we will break our tests :)
  cy.log('**go online**').then(() => {
    // https://chromedevtools.github.io/devtools-protocol/1-3/Network/#method-emulateNetworkConditions
     Cypress.automation('remote:debugger:protocol', {
      command: 'Network.emulateNetworkConditions',
      params: {
        offline: false,
        latency: -1,
        downloadThroughput: -1,
        uploadThroughput: -1,
      },
    });
  });
};

describe('init spec', () => {
  beforeEach(goOnline);
  // afterEach(goOnline)

  it('When Angular starting page is loaded', () => {
    assertOnline();
    cy.visit('/');
    cy.contains('Finder');

  });
});
