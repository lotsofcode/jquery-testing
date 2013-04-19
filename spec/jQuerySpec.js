describe("jQuery", function() {

	it ("should instantiate jQuery as $ object", function() {
		expect(typeof $).toBe('function')
	});

	it ("jQuery version should be 2.0.0", function() {
		expect($.fn.jquery).toBe('2.0.0')
	})

})
