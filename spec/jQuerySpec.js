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

})
