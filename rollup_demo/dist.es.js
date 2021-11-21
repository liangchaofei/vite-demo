var name = "rollup_demo";
var version = "1.0.0";
var description = "";
var main = "index.js";
var scripts = {
	build: "rollup --config rollup.config.js --plugin json"
};
var keywords = [
];
var author = "";
var license = "ISC";
var dependencies = {
	"@rollup/plugin-json": "^4.1.0",
	rollup: "^2.60.0"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	scripts: scripts,
	keywords: keywords,
	author: author,
	license: license,
	dependencies: dependencies
};

console.log('pkg',pkg);
console.log('aa');
