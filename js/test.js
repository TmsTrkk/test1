class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="primary-header" class="primary-header">
            <div class="b-mark-logo">
                <a href="index.html">
                    <picture>
                        <source srcset="images/logo-white.svg" class="logo" media="(prefers-color-scheme: dark)">
                        <img src="images/logo-black.svg" class="logo">
                    </picture>
                </a>    
            </div>


            <button class="hamburger">
                    <div class="bar"></div>
            </button>

			<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about/">About</a></li>
				<li><a href="/clients/">Clients</a></li>
				<li><a href="/contact/">Contact Us</a></li>
			</ul>
		</nav>	
                
        </header>
        `
    }
}

customElements.define('bmark-header' , MyHeader)


