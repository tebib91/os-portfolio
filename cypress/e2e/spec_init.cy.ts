const assertOnline = () => {
  return cy.wrap(window).its('navigator.onLine').should('be.true');
};

const assertOffline = () => {
  return cy.wrap(window).its('navigator.onLine').should('be.false');
};

const goOffline = () => {
  cy.log('**go offline**')
    .then(() =>
      Cypress.automation('remote:debugger:protocol', {
        command: 'Network.enable',
      })
    )
    .then(() => {
      Cypress.automation('remote:debugger:protocol', {
        command: 'Network.emulateNetworkConditions',
        params: {
          offline: true,
          latency: -1,
          downloadThroughput: -1,
          uploadThroughput: -1,
        },
      });
    });
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
  const baseUrl = 'http://192.168.1.67:8080';
  beforeEach(goOnline);
  // afterEach(goOnline)

  it('shows title in offline mode', () => {
    assertOnline();
    cy.visit(baseUrl);
    cy.get('.content span').contains('os-front app is running!');


  });
});
