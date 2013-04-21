describe("jQuery", function() {

	it ("should be accessible through $", function() {
		expect($).toBe(jQuery);
	});

	it ("should instantiate $ as object", function() {
		expect(typeof $).toBe('function');
	});

	it ("version should be 2.0.0", function() {
		expect($.fn.jquery).toBe('2.0.0');
	})

	describe("Selector", function() {
		it ("should have length 0 if dom element doesn't exist", function() {
			expect($('.missing-selector').length).toEqual(0);
		})
	});

	describe("Element", function() {

		var element;
		beforeEach(function() {
			element = $('<div id="foobar" class="foo bar">');
			element.data("foo", "bar");
		});

		it ("should allow access to id from attr() method", function() {
			expect(element.attr('id')).toBe('foobar');
		})

		it ("should return attr() undefined after removal of attribute", function() {
			element.removeAttr('id');
			expect(element.attr('id')).toBeUndefined();
		})

		it ("should increase children length when using append()", function() {
			element.append("<div>");
			expect(element.children().length).toEqual(1);
		})

		it ("should retain attributes when using clone()", function() {
			var cloned = element.clone();
			expect(cloned.attr('id')).toBe('foobar');
			expect(cloned.attr('class')).toBe('foo bar');
		})

		it ("should have assigned data() to an object", function() {
			expect(element.data()).toEqual(jasmine.any(Object))
		})

		it ("should resolve value from data().name", function() {
			expect(element.data().foo).toEqual("bar")
		})

	});

})
