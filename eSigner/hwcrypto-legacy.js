!function (a) {
	"use strict";
	function b(a) {
		switch (typeof a) {
		case "undefined":
			return "undefined";
		case "boolean":
			return "boolean";
		case "number":
			return "number";
		case "string":
			return "string";
		default:
			return null === a ? "null" : "object"
		}
	}
	function c(a) {
		return Object.prototype.toString.call(a).replace(/^\[object *|\]$/g, "")
	}
	function d(a) {
		return "function" == typeof a
	}
	function e(a) {
		if (null === a || a === D)
			throw TypeError();
		return Object(a)
	}
	function f(a) {
		return a >> 0
	}
	function g(a) {
		return a >>> 0
	}
	function h(a) {
		function b(b) {
			Object.defineProperty(a, b, {
				get : function () {
					return a._getter(b)
				},
				set : function (c) {
					a._setter(b, c)
				},
				enumerable : !0,
				configurable : !1
			})
		}
		if (a.length > E)
			throw RangeError("Array too large for polyfill");
		var c;
		for (c = 0; c < a.length; c += 1)
			b(c)
	}
	function i(a, b) {
		var c = 32 - b;
		return a << c >> c
	}
	function j(a, b) {
		var c = 32 - b;
		return a << c >>> c
	}
	function k(a) {
		return [255 & a]
	}
	function l(a) {
		return i(a[0], 8)
	}
	function m(a) {
		return [255 & a]
	}
	function n(a) {
		return j(a[0], 8)
	}
	function o(a) {
		return a = M(Number(a)),
		[0 > a ? 0 : a > 255 ? 255 : 255 & a]
	}
	function p(a) {
		return [a >> 8 & 255, 255 & a]
	}
	function q(a) {
		return i(a[0] << 8 | a[1], 16)
	}
	function r(a) {
		return [a >> 8 & 255, 255 & a]
	}
	function s(a) {
		return j(a[0] << 8 | a[1], 16)
	}
	function t(a) {
		return [a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a]
	}
	function u(a) {
		return i(a[0] << 24 | a[1] << 16 | a[2] << 8 | a[3], 32)
	}
	function v(a) {
		return [a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a]
	}
	function w(a) {
		return j(a[0] << 24 | a[1] << 16 | a[2] << 8 | a[3], 32)
	}
	function x(a, b, c) {
		function d(a) {
			var b = H(a),
			c = a - b;
			return .5 > c ? b : c > .5 ? b + 1 : b % 2 ? b + 1 : b
		}
		var e,f,g,h,i,j,k,l = (1 << b - 1) - 1;
		for (a !== a ? (f = (1 << b) - 1, g = L(2, c - 1), e = 0) : a === 1 / 0 || a ===  - (1 / 0) ? (f = (1 << b) - 1, g = 0, e = 0 > a ? 1 : 0) : 0 === a ? (f = 0, g = 0, e = 1 / a ===  - (1 / 0) ? 1 : 0) : (e = 0 > a, a = G(a), a >= L(2, 1 - l) ? (f = K(H(I(a) / F), 1023), g = d(a / L(2, f) * L(2, c)), g / L(2, c) >= 2 && (f += 1, g = 1), f > l ? (f = (1 << b) - 1, g = 0) : (f += l, g -= L(2, c))) : (f = 0, g = d(a / L(2, 1 - l - c)))), i = [], h = c; h; h -= 1)
			i.push(g % 2 ? 1 : 0), g = H(g / 2);
		for (h = b; h; h -= 1)
			i.push(f % 2 ? 1 : 0), f = H(f / 2);
		for (i.push(e ? 1 : 0), i.reverse(), j = i.join(""), k = []; j.length; )
			k.push(parseInt(j.substring(0, 8), 2)), j = j.substring(8);
		return k
	}
	function y(a, b, c) {
		var d,e,f,g,h,i,j,k,l = [];
		for (d = a.length; d; d -= 1)
			for (f = a[d - 1], e = 8; e; e -= 1)
				l.push(f % 2 ? 1 : 0), f >>= 1;
		return l.reverse(),
		g = l.join(""),
		h = (1 << b - 1) - 1,
		i = parseInt(g.substring(0, 1), 2) ? -1 : 1,
		j = parseInt(g.substring(1, 1 + b), 2),
		k = parseInt(g.substring(1 + b), 2),
		j === (1 << b) - 1 ? 0 !== k ? 0 / 0 : i * (1 / 0) : j > 0 ? i * L(2, j - h) * (1 + k / L(2, c)) : 0 !== k ? i * L(2,  - (h - 1)) * (k / L(2, c)) : 0 > i ? -0 : 0
	}
	function z(a) {
		return y(a, 11, 52)
	}
	function A(a) {
		return x(a, 11, 52)
	}
	function B(a) {
		return y(a, 8, 23)
	}
	function C(a) {
		return x(a, 8, 23)
	}
	var D = void 0,
	E = 1e5,
	F = Math.LN2,
	G = Math.abs,
	H = Math.floor,
	I = Math.log,
	J = Math.max,
	K = Math.min,
	L = Math.pow,
	M = Math.round;
	!function () {
		var a = Object.defineProperty,
		b = !function () {
			try {
				return Object.defineProperty({}, "x", {})
			} catch (a) {
				return !1
			}
		}
		();
		(!a || b) && (Object.defineProperty = function (b, c, d) {
			if (a)
				try {
					return a(b, c, d)
				} catch (e) {}

			if (b !== Object(b))
				throw TypeError("Object.defineProperty called on non-object");
			return Object.prototype.__defineGetter__ && "get" in d && Object.prototype.__defineGetter__.call(b, c, d.get),
			Object.prototype.__defineSetter__ && "set" in d && Object.prototype.__defineSetter__.call(b, c, d.set),
			"value" in d && (b[c] = d.value),
			b
		})
	}
	(),
	function () {
		function i(a) {
			if (a = f(a), 0 > a)
				throw RangeError("ArrayBuffer size is not a small enough positive integer.");
			Object.defineProperty(this, "byteLength", {
				value : a
			}),
			Object.defineProperty(this, "_bytes", {
				value : Array(a)
			});
			for (var b = 0; a > b; b += 1)
				this._bytes[b] = 0
		}
		function j() {
			if (!arguments.length || "object" != typeof arguments[0])
				return function (a) {
					if (a = f(a), 0 > a)
						throw RangeError("length is not a small enough positive integer.");
					Object.defineProperty(this, "length", {
						value : a
					}),
					Object.defineProperty(this, "byteLength", {
						value : a * this.BYTES_PER_ELEMENT
					}),
					Object.defineProperty(this, "buffer", {
						value : new i(this.byteLength)
					}),
					Object.defineProperty(this, "byteOffset", {
						value : 0
					})
				}
			.apply(this, arguments);
			if (arguments.length >= 1 && "object" === b(arguments[0]) && arguments[0]instanceof j)
				return function (a) {
					if (this.constructor !== a.constructor)
						throw TypeError();
					var b = a.length * this.BYTES_PER_ELEMENT;
					Object.defineProperty(this, "buffer", {
						value : new i(b)
					}),
					Object.defineProperty(this, "byteLength", {
						value : b
					}),
					Object.defineProperty(this, "byteOffset", {
						value : 0
					}),
					Object.defineProperty(this, "length", {
						value : a.length
					});
					for (var c = 0; c < this.length; c += 1)
						this._setter(c, a._getter(c))
				}
			.apply(this, arguments);
			if (arguments.length >= 1 && "object" === b(arguments[0]) && !(arguments[0]instanceof j) && !(arguments[0]instanceof i || "ArrayBuffer" === c(arguments[0])))
				return function (a) {
					var b = a.length * this.BYTES_PER_ELEMENT;
					Object.defineProperty(this, "buffer", {
						value : new i(b)
					}),
					Object.defineProperty(this, "byteLength", {
						value : b
					}),
					Object.defineProperty(this, "byteOffset", {
						value : 0
					}),
					Object.defineProperty(this, "length", {
						value : a.length
					});
					for (var c = 0; c < this.length; c += 1) {
						var d = a[c];
						this._setter(c, Number(d))
					}
				}
			.apply(this, arguments);
			if (arguments.length >= 1 && "object" === b(arguments[0]) && (arguments[0]instanceof i || "ArrayBuffer" === c(arguments[0])))
				return function (a, b, c) {
					if (b = g(b), b > a.byteLength)
						throw RangeError("byteOffset out of range");
					if (b % this.BYTES_PER_ELEMENT)
						throw RangeError("buffer length minus the byteOffset is not a multiple of the element size.");
					if (c === D) {
						var d = a.byteLength - b;
						if (d % this.BYTES_PER_ELEMENT)
							throw RangeError("length of buffer minus byteOffset not a multiple of the element size");
						c = d / this.BYTES_PER_ELEMENT
					} else
						c = g(c), d = c * this.BYTES_PER_ELEMENT;
					if (b + d > a.byteLength)
						throw RangeError("byteOffset and length reference an area beyond the end of the buffer");
					Object.defineProperty(this, "buffer", {
						value : a
					}),
					Object.defineProperty(this, "byteLength", {
						value : d
					}),
					Object.defineProperty(this, "byteOffset", {
						value : b
					}),
					Object.defineProperty(this, "length", {
						value : c
					})
				}
			.apply(this, arguments);
			throw TypeError()
		}
		function x(a, b, c) {
			var d = function () {
				Object.defineProperty(this, "constructor", {
					value : d
				}),
				j.apply(this, arguments),
				h(this)
			};
			"__proto__" in d ? d.__proto__ = j : (d.from = j.from, d.of = j.of),
			d.BYTES_PER_ELEMENT = a;
			var e = function () {};
			return e.prototype = y,
			d.prototype = new e,
			Object.defineProperty(d.prototype, "BYTES_PER_ELEMENT", {
				value : a
			}),
			Object.defineProperty(d.prototype, "_pack", {
				value : b
			}),
			Object.defineProperty(d.prototype, "_unpack", {
				value : c
			}),
			d
		}
		a.ArrayBuffer = a.ArrayBuffer || i,
		Object.defineProperty(j, "from", {
			value : function (a) {
				return new this(a)
			}
		}),
		Object.defineProperty(j, "of", {
			value : function () {
				return new this(arguments)
			}
		});
		var y = {};
		j.prototype = y,
		Object.defineProperty(j.prototype, "_getter", {
			value : function (a) {
				if (arguments.length < 1)
					throw SyntaxError("Not enough arguments");
				if (a = g(a), a >= this.length)
					return D;
				var b,c,d = [];
				for (b = 0, c = this.byteOffset + a * this.BYTES_PER_ELEMENT; b < this.BYTES_PER_ELEMENT; b += 1, c += 1)
					d.push(this.buffer._bytes[c]);
				return this._unpack(d)
			}
		}),
		Object.defineProperty(j.prototype, "get", {
			value : j.prototype._getter
		}),
		Object.defineProperty(j.prototype, "_setter", {
			value : function (a, b) {
				if (arguments.length < 2)
					throw SyntaxError("Not enough arguments");
				if (a = g(a), !(a >= this.length)) {
					var c,d,e = this._pack(b);
					for (c = 0, d = this.byteOffset + a * this.BYTES_PER_ELEMENT; c < this.BYTES_PER_ELEMENT; c += 1, d += 1)
						this.buffer._bytes[d] = e[c]
				}
			}
		}),
		Object.defineProperty(j.prototype, "constructor", {
			value : j
		}),
		Object.defineProperty(j.prototype, "copyWithin", {
			value : function (a, b) {
				var c = arguments[2],
				d = e(this),
				h = d.length,
				i = g(h);
				i = J(i, 0);
				var j,
				k = f(a);
				j = 0 > k ? J(i + k, 0) : K(k, i);
				var l,
				m = f(b);
				l = 0 > m ? J(i + m, 0) : K(m, i);
				var n;
				n = c === D ? i : f(c);
				var o;
				o = 0 > n ? J(i + n, 0) : K(n, i);
				var p,
				q = K(o - l, i - j);
				for (j > l && l + q > j ? (p = -1, l = l + q - 1, j = j + q - 1) : p = 1; q > 0; )
					d._setter(j, d._getter(l)), l += p, j += p, q -= 1;
				return d
			}
		}),
		Object.defineProperty(j.prototype, "every", {
			value : function (a) {
				if (this === D || null === this)
					throw TypeError();
				var b = Object(this),
				c = g(b.length);
				if (!d(a))
					throw TypeError();
				for (var e = arguments[1], f = 0; c > f; f++)
					if (!a.call(e, b._getter(f), f, b))
						return !1;
				return !0
			}
		}),
		Object.defineProperty(j.prototype, "fill", {
			value : function (a) {
				var b = arguments[1],
				c = arguments[2],
				d = e(this),
				h = d.length,
				i = g(h);
				i = J(i, 0);
				var j,
				k = f(b);
				j = 0 > k ? J(i + k, 0) : K(k, i);
				var l;
				l = c === D ? i : f(c);
				var m;
				for (m = 0 > l ? J(i + l, 0) : K(l, i); m > j; )
					d._setter(j, a), j += 1;
				return d
			}
		}),
		Object.defineProperty(j.prototype, "filter", {
			value : function (a) {
				if (this === D || null === this)
					throw TypeError();
				var b = Object(this),
				c = g(b.length);
				if (!d(a))
					throw TypeError();
				for (var e = [], f = arguments[1], h = 0; c > h; h++) {
					var i = b._getter(h);
					a.call(f, i, h, b) && e.push(i)
				}
				return new this.constructor(e)
			}
		}),
		Object.defineProperty(j.prototype, "find", {
			value : function (a) {
				var b = e(this),
				c = b.length,
				f = g(c);
				if (!d(a))
					throw TypeError();
				for (var h = arguments.length > 1 ? arguments[1] : D, i = 0; f > i; ) {
					var j = b._getter(i),
					k = a.call(h, j, i, b);
					if (Boolean(k))
						return j;
					++i
				}
				return D
			}
		}),
		Object.defineProperty(j.prototype, "findIndex", {
			value : function (a) {
				var b = e(this),
				c = b.length,
				f = g(c);
				if (!d(a))
					throw TypeError();
				for (var h = arguments.length > 1 ? arguments[1] : D, i = 0; f > i; ) {
					var j = b._getter(i),
					k = a.call(h, j, i, b);
					if (Boolean(k))
						return i;
					++i
				}
				return -1
			}
		}),
		Object.defineProperty(j.prototype, "forEach", {
			value : function (a) {
				if (this === D || null === this)
					throw TypeError();
				var b = Object(this),
				c = g(b.length);
				if (!d(a))
					throw TypeError();
				for (var e = arguments[1], f = 0; c > f; f++)
					a.call(e, b._getter(f), f, b)
			}
		}),
		Object.defineProperty(j.prototype, "indexOf", {
			value : function (a) {
				if (this === D || null === this)
					throw TypeError();
				var b = Object(this),
				c = g(b.length);
				if (0 === c)
					return -1;
				var d = 0;
				if (arguments.length > 0 && (d = Number(arguments[1]), d !== d ? d = 0 : 0 !== d && d !== 1 / 0 && d !==  - (1 / 0) && (d = (d > 0 || -1) * H(G(d)))), d >= c)
					return -1;
				for (var e = d >= 0 ? d : J(c - G(d), 0); c > e; e++)
					if (b._getter(e) === a)
						return e;
				return -1
			}
		}),
		Object.defineProperty(j.prototype, "join", {
			value : function (a) {
				if (this === D || null === this)
					throw TypeError();
				for (var b = Object(this), c = g(b.length), d = Array(c), e = 0; c > e; ++e)
					d[e] = b._getter(e);
				return d.join(a === D ? "," : a)
			}
		}),
		Object.defineProperty(j.prototype, "lastIndexOf", {
			value : function (a) {
				if (this === D || null === this)
					throw TypeError();
				var b = Object(this),
				c = g(b.length);
				if (0 === c)
					return -1;
				var d = c;
				arguments.length > 1 && (d = Number(arguments[1]), d !== d ? d = 0 : 0 !== d && d !== 1 / 0 && d !==  - (1 / 0) && (d = (d > 0 || -1) * H(G(d))));
				for (var e = d >= 0 ? K(d, c - 1) : c - G(d); e >= 0; e--)
					if (b._getter(e) === a)
						return e;
				return -1
			}
		}),
		Object.defineProperty(j.prototype, "map", {
			value : function (a) {
				if (this === D || null === this)
					throw TypeError();
				var b = Object(this),
				c = g(b.length);
				if (!d(a))
					throw TypeError();
				var e = [];
				e.length = c;
				for (var f = arguments[1], h = 0; c > h; h++)
					e[h] = a.call(f, b._getter(h), h, b);
				return new this.constructor(e)
			}
		}),
		Object.defineProperty(j.prototype, "reduce", {
			value : function (a) {
				if (this === D || null === this)
					throw TypeError();
				var b = Object(this),
				c = g(b.length);
				if (!d(a))
					throw TypeError();
				if (0 === c && 1 === arguments.length)
					throw TypeError();
				var e,
				f = 0;
				for (e = arguments.length >= 2 ? arguments[1] : b._getter(f++); c > f; )
					e = a.call(D, e, b._getter(f), f, b), f++;
				return e
			}
		}),
		Object.defineProperty(j.prototype, "reduceRight", {
			value : function (a) {
				if (this === D || null === this)
					throw TypeError();
				var b = Object(this),
				c = g(b.length);
				if (!d(a))
					throw TypeError();
				if (0 === c && 1 === arguments.length)
					throw TypeError();
				var e,
				f = c - 1;
				for (e = arguments.length >= 2 ? arguments[1] : b._getter(f--); f >= 0; )
					e = a.call(D, e, b._getter(f), f, b), f--;
				return e
			}
		}),
		Object.defineProperty(j.prototype, "reverse", {
			value : function () {
				if (this === D || null === this)
					throw TypeError();
				for (var a = Object(this), b = g(a.length), c = H(b / 2), d = 0, e = b - 1; c > d; ++d, --e) {
					var f = a._getter(d);
					a._setter(d, a._getter(e)),
					a._setter(e, f)
				}
				return a
			}
		}),
		Object.defineProperty(j.prototype, "set", {
			value : function () {
				if (arguments.length < 1)
					throw SyntaxError("Not enough arguments");
				var a,
				b,
				c,
				d,
				e,
				f,
				h,
				i,
				j,
				k;
				if ("object" == typeof arguments[0] && arguments[0].constructor === this.constructor) {
					if (a = arguments[0], c = g(arguments[1]), c + a.length > this.length)
						throw RangeError("Offset plus length of array is out of range");
					if (i = this.byteOffset + c * this.BYTES_PER_ELEMENT, j = a.length * this.BYTES_PER_ELEMENT, a.buffer === this.buffer) {
						for (k = [], e = 0, f = a.byteOffset; j > e; e += 1, f += 1)
							k[e] = a.buffer._bytes[f];
						for (e = 0, h = i; j > e; e += 1, h += 1)
							this.buffer._bytes[h] = k[e]
					} else
						for (e = 0, f = a.byteOffset, h = i; j > e; e += 1, f += 1, h += 1)
							this.buffer._bytes[h] = a.buffer._bytes[f]
				} else {
					if ("object" != typeof arguments[0] || "undefined" == typeof arguments[0].length)
						throw TypeError("Unexpected argument type(s)");
					if (b = arguments[0], d = g(b.length), c = g(arguments[1]), c + d > this.length)
						throw RangeError("Offset plus length of array is out of range");
					for (e = 0; d > e; e += 1)
						f = b[e], this._setter(c + e, Number(f))
				}
			}
		}),
		Object.defineProperty(j.prototype, "slice", {
			value : function (a, b) {
				for (var c = e(this), d = c.length, h = g(d), i = f(a), j = 0 > i ? J(h + i, 0) : K(i, h), k = b === D ? h : f(b), l = 0 > k ? J(h + k, 0) : K(k, h), m = l - j, n = c.constructor, o = new n(m), p = 0; l > j; ) {
					var q = c._getter(j);
					o._setter(p, q),
					++j,
					++p
				}
				return o
			}
		}),
		Object.defineProperty(j.prototype, "some", {
			value : function (a) {
				if (this === D || null === this)
					throw TypeError();
				var b = Object(this),
				c = g(b.length);
				if (!d(a))
					throw TypeError();
				for (var e = arguments[1], f = 0; c > f; f++)
					if (a.call(e, b._getter(f), f, b))
						return !0;
				return !1
			}
		}),
		Object.defineProperty(j.prototype, "sort", {
			value : function (a) {
				if (this === D || null === this)
					throw TypeError();
				for (var b = Object(this), c = g(b.length), d = Array(c), e = 0; c > e; ++e)
					d[e] = b._getter(e);
				for (a ? d.sort(a) : d.sort(), e = 0; c > e; ++e)
					b._setter(e, d[e]);
				return b
			}
		}),
		Object.defineProperty(j.prototype, "subarray", {
			value : function (a, b) {
				function c(a, b, c) {
					return b > a ? b : a > c ? c : a
				}
				a = f(a),
				b = f(b),
				arguments.length < 1 && (a = 0),
				arguments.length < 2 && (b = this.length),
				0 > a && (a = this.length + a),
				0 > b && (b = this.length + b),
				a = c(a, 0, this.length),
				b = c(b, 0, this.length);
				var d = b - a;
				return 0 > d && (d = 0),
				new this.constructor(this.buffer, this.byteOffset + a * this.BYTES_PER_ELEMENT, d)
			}
		});
		var E = x(1, k, l),
		F = x(1, m, n),
		I = x(1, o, n),
		L = x(2, p, q),
		M = x(2, r, s),
		N = x(4, t, u),
		O = x(4, v, w),
		P = x(4, C, B),
		Q = x(8, A, z);
		a.Int8Array = a.Int8Array || E,
		a.Uint8Array = a.Uint8Array || F,
		a.Uint8ClampedArray = a.Uint8ClampedArray || I,
		a.Int16Array = a.Int16Array || L,
		a.Uint16Array = a.Uint16Array || M,
		a.Int32Array = a.Int32Array || N,
		a.Uint32Array = a.Uint32Array || O,
		a.Float32Array = a.Float32Array || P,
		a.Float64Array = a.Float64Array || Q
	}
	(),
	function () {
		function b(a, b) {
			return d(a.get) ? a.get(b) : a[b]
		}
		function e(a, b, d) {
			if (!(a instanceof ArrayBuffer || "ArrayBuffer" === c(a)))
				throw TypeError();
			if (b = g(b), b > a.byteLength)
				throw RangeError("byteOffset out of range");
			if (d = d === D ? a.byteLength - b : g(d), b + d > a.byteLength)
				throw RangeError("byteOffset and length reference an area beyond the end of the buffer");
			Object.defineProperty(this, "buffer", {
				value : a
			}),
			Object.defineProperty(this, "byteLength", {
				value : d
			}),
			Object.defineProperty(this, "byteOffset", {
				value : b
			})
		}
		function f(a) {
			return function (c, d) {
				if (c = g(c), c + a.BYTES_PER_ELEMENT > this.byteLength)
					throw RangeError("Array index out of range");
				c += this.byteOffset;
				for (var e = new Uint8Array(this.buffer, c, a.BYTES_PER_ELEMENT), f = [], h = 0; h < a.BYTES_PER_ELEMENT; h += 1)
					f.push(b(e, h));
				return Boolean(d) === Boolean(i) && f.reverse(),
				b(new a(new Uint8Array(f).buffer), 0)
			}
		}
		function h(a) {
			return function (c, d, e) {
				if (c = g(c), c + a.BYTES_PER_ELEMENT > this.byteLength)
					throw RangeError("Array index out of range");
				var f,
				h,
				j = new a([d]),
				k = new Uint8Array(j.buffer),
				l = [];
				for (f = 0; f < a.BYTES_PER_ELEMENT; f += 1)
					l.push(b(k, f));
				Boolean(e) === Boolean(i) && l.reverse(),
				h = new Uint8Array(this.buffer, c, a.BYTES_PER_ELEMENT),
				h.set(l)
			}
		}
		var i = function () {
			var a = new Uint16Array([4660]),
			c = new Uint8Array(a.buffer);
			return 18 === b(c, 0)
		}
		();
		Object.defineProperty(e.prototype, "getUint8", {
			value : f(Uint8Array)
		}),
		Object.defineProperty(e.prototype, "getInt8", {
			value : f(Int8Array)
		}),
		Object.defineProperty(e.prototype, "getUint16", {
			value : f(Uint16Array)
		}),
		Object.defineProperty(e.prototype, "getInt16", {
			value : f(Int16Array)
		}),
		Object.defineProperty(e.prototype, "getUint32", {
			value : f(Uint32Array)
		}),
		Object.defineProperty(e.prototype, "getInt32", {
			value : f(Int32Array)
		}),
		Object.defineProperty(e.prototype, "getFloat32", {
			value : f(Float32Array)
		}),
		Object.defineProperty(e.prototype, "getFloat64", {
			value : f(Float64Array)
		}),
		Object.defineProperty(e.prototype, "setUint8", {
			value : h(Uint8Array)
		}),
		Object.defineProperty(e.prototype, "setInt8", {
			value : h(Int8Array)
		}),
		Object.defineProperty(e.prototype, "setUint16", {
			value : h(Uint16Array)
		}),
		Object.defineProperty(e.prototype, "setInt16", {
			value : h(Int16Array)
		}),
		Object.defineProperty(e.prototype, "setUint32", {
			value : h(Uint32Array)
		}),
		Object.defineProperty(e.prototype, "setInt32", {
			value : h(Int32Array)
		}),
		Object.defineProperty(e.prototype, "setFloat32", {
			value : h(Float32Array)
		}),
		Object.defineProperty(e.prototype, "setFloat64", {
			value : h(Float64Array)
		}),
		a.DataView = a.DataView || e
	}
	()
}
(this), function (a, b, c) {
	b[a] = b[a] || c(),
	"undefined" != typeof module && module.exports ? module.exports = b[a] : "function" == typeof define && define.amd && define(function () {
			return b[a]
		})
}
("Promise", "undefined" != typeof global ? global : this, function () {
	"use strict";
	function a(a, b) {
		m.add(a, b),
		l || (l = o(m.drain))
	}
	function b(a) {
		var b,
		c = typeof a;
		return null == a || "object" != c && "function" != c || (b = a.then),
		"function" == typeof b ? b : !1
	}
	function c() {
		for (var a = 0; a < this.chain.length; a++)
			d(this, 1 === this.state ? this.chain[a].success : this.chain[a].failure, this.chain[a]);
		this.chain.length = 0
	}
	function d(a, c, d) {
		var e,
		f;
		try {
			c === !1 ? d.reject(a.msg) : (e = c === !0 ? a.msg : c.call(void 0, a.msg), e === d.promise ? d.reject(TypeError("Promise-chain cycle")) : (f = b(e)) ? f.call(e, d.resolve, d.reject) : d.resolve(e))
		} catch (g) {
			d.reject(g)
		}
	}
	function e(d) {
		var g,
		i,
		j = this;
		if (!j.triggered) {
			j.triggered = !0,
			j.def && (j = j.def);
			try {
				(g = b(d)) ? (i = new h(j), g.call(d, function () {
						e.apply(i, arguments)
					}, function () {
						f.apply(i, arguments)
					})) : (j.msg = d, j.state = 1, j.chain.length > 0 && a(c, j))
			} catch (k) {
				f.call(i || new h(j), k)
			}
		}
	}
	function f(b) {
		var d = this;
		d.triggered || (d.triggered = !0, d.def && (d = d.def), d.msg = b, d.state = 2, d.chain.length > 0 && a(c, d))
	}
	function g(a, b, c, d) {
		for (var e = 0; e < b.length; e++)
			!function (e) {
				a.resolve(b[e]).then(function (a) {
					c(e, a)
				}, d)
			}
		(e)
	}
	function h(a) {
		this.def = a,
		this.triggered = !1
	}
	function i(a) {
		this.promise = a,
		this.state = 0,
		this.triggered = !1,
		this.chain = [],
		this.msg = void 0
	}
	function j(b) {
		if ("function" != typeof b)
			throw TypeError("Not a function");
		if (0 !== this.__NPO__)
			throw TypeError("Not a promise");
		this.__NPO__ = 1;
		var d = new i(this);
		this.then = function (b, e) {
			var f = {
				success : "function" == typeof b ? b : !0,
				failure : "function" == typeof e ? e : !1
			};
			return f.promise = new this.constructor(function (a, b) {
					if ("function" != typeof a || "function" != typeof b)
						throw TypeError("Not a function");
					f.resolve = a,
					f.reject = b
				}),
			d.chain.push(f),
			0 !== d.state && a(c, d),
			f.promise
		},
		this["catch"] = function (a) {
			return this.then(void 0, a)
		};
		try {
			b.call(void 0, function (a) {
				e.call(d, a)
			}, function (a) {
				f.call(d, a)
			})
		} catch (g) {
			f.call(d, g)
		}
	}
	var k,
	l,
	m,
	n = Object.prototype.toString,
	o = "undefined" != typeof setImmediate ? function (a) {
		return setImmediate(a)
	}
	 : setTimeout;
	try {
		Object.defineProperty({}, "x", {}),
		k = function (a, b, c, d) {
			return Object.defineProperty(a, b, {
				value : c,
				writable : !0,
				configurable : d !== !1
			})
		}
	} catch (p) {
		k = function (a, b, c) {
			return a[b] = c,
			a
		}
	}
	m = function () {
		function a(a, b) {
			this.fn = a,
			this.self = b,
			this.next = void 0
		}
		var b,
		c,
		d;
		return {
			add : function (e, f) {
				d = new a(e, f),
				c ? c.next = d : b = d,
				c = d,
				d = void 0
			},
			drain : function () {
				var a = b;
				for (b = c = l = void 0; a; )
					a.fn.call(a.self), a = a.next
			}
		}
	}
	();
	var q = k({}, "constructor", j, !1);
	return k(j, "prototype", q, !1),
	k(q, "__NPO__", 0, !1),
	k(j, "resolve", function (a) {
		var b = this;
		return a && "object" == typeof a && 1 === a.__NPO__ ? a : new b(function (b, c) {
			if ("function" != typeof b || "function" != typeof c)
				throw TypeError("Not a function");
			b(a)
		})
	}),
	k(j, "reject", function (a) {
		return new this(function (b, c) {
			if ("function" != typeof b || "function" != typeof c)
				throw TypeError("Not a function");
			c(a)
		})
	}),
	k(j, "all", function (a) {
		var b = this;
		return "[object Array]" != n.call(a) ? b.reject(TypeError("Not an array")) : 0 === a.length ? b.resolve([]) : new b(function (c, d) {
			if ("function" != typeof c || "function" != typeof d)
				throw TypeError("Not a function");
			var e = a.length,
			f = Array(e),
			h = 0;
			g(b, a, function (a, b) {
				f[a] = b,
				++h === e && c(f)
			}, d)
		})
	}),
	k(j, "race", function (a) {
		var b = this;
		return "[object Array]" != n.call(a) ? b.reject(TypeError("Not an array")) : new b(function (c, d) {
			if ("function" != typeof c || "function" != typeof d)
				throw TypeError("Not a function");
			g(b, a, function (a, b) {
				c(b)
			}, d)
		})
	}),
	j
});