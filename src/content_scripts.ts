console.log('href:' + location.href);
console.log('protocol:' + location.protocol);
console.log('host:' + location.host);
console.log('hostname:' + location.hostname);
console.log('port:' + location.port);
console.log('pathname:' + location.pathname);
console.log('search:' + location.search);
console.log('hash:' + location.hash);

if (location.hostname.match("m.mtgwiki.com")) {
	location.href = location.protocol + "//mtgwiki.com" + location.pathname + location.search + location.hash;
}
