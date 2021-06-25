describe('app renders on the screen', () => {
	it('Does not do much!', () => {
		expect(true).to.equal(true)
	})

	it('h1 is visible on the screen', () => {
		cy.visit('/')
		cy.get('.app').contains('The Mini Crossword')
	})

	it('Game options are visible on the screen', () => {
		cy.visit('/')
		cy.get('.app').contains('Rebus')
	})
})
