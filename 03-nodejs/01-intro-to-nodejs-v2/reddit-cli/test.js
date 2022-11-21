const o = {
	u: {
		l: {course: 'node.js', a: { b: {}}}
	}
}

// will print [Object Object];
console.log(o);

// print all child object JSON.stringify(object, null, indent);
console.log(JSON.stringify(o, null, 2));
