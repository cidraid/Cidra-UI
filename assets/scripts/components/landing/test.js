class Test extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.test();
	}

	test() {
		this.innerHTML = `<h1>Test</h1>`;

		console.log('test');
	}
}

customElements.define('my-test', Test);
