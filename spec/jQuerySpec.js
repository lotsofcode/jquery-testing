describe("jQuery", function() {

	it ("should be accessible through $", function() {
		expect($).toEqual(jQuery)
	});

	it ("should instantiate $ as object", function() {
		expect(typeof $).toBe('function')
	});

	it ("version should be 2.0.0", function() {
		expect($.fn.jquery).toBe('2.0.0')
	})

	describe("Selector", function() {
		it ("should have length 0 if dom element doesn't exist", function() {
			expect($('.missing-selector').length).toEqual(0);
		})
	});

})
