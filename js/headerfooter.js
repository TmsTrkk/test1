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

            <nav class="primary-navigation">
                <ul role= "list" id="navbar" data-visible="false" class="navbar">
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="products.html">PRODUCTS</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                    <li><a href="contacts.html">CONTACTS</a></li>
                </ul>
            </nav>
                
        </header>
        `
    }
}

customElements.define('bmark-header' , MyHeader)




class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>

            <div class="footercolumn">
                <div class="balfooter">
                    <ul role= "list" class="footernavbar">
                        <h3>PAGES</h3>
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="products.html">PRODUCTS</a></li>
                        <li><a href="about.html">ABOUT</a></li>
                        <li><a href="contacts.html">CONTACTS</a></li>
                    </ul>
                </div>

                <div class="jobbfooter">
                    <h3>CONTACTS</h3>
                    <p><a href="mailto:info@b-mark.hu">info@b-mark.hu</a></p>
                    <p><a href="tel:+3662541514">Tel:+36 62 541 514</a></p>
                    <p><a href="https://goo.gl/maps/HkWQu2wkoGsrDb386"> Szeged <br>
                    József Attila sgt. 61 <br>
                    Hungary</a></p>
                </div>
            </div>



            <!--<section class="news-letter" id="News-letter">
                <div class="news ">
                  <div class="container">
                    <p class="des how-de"> Subscribe to our newsletter</p>
            
                    <form action="">
                      <input type="email"  maxlength="50" required placeholder="Enter your email address">
                      <button class="bt">Subscribe</button>
                    </form>
                  </div>
                </div>
            
            </section>



            <div class="language-selector">
                <div tabindex="1" id="dk_container_herolist" class="dk_container language-selector-width dk_shown dk_theme_default">
                  <a class="dk_toggle"><span class="dk_label">English</span><span class="select-icon"></span></a>
                    <div class="dk_options">
                      <ul class="dk_options_inner">
                        <li class="dk_option_current"><a href="index.html" data-dk-dropdown-value="EN">English</a></li>
                        <li class=""><a href="indexhu.html" data-dk-dropdown-value="HU">Hungarian</a></li>
                        <li class=""><a href="indexro.html" data-dk-dropdown-value="RO">Romanian</a></li>
                      </ul>
                    </div>
                </div>
                <select name="languageselector" tabindex="1" class="span3" value="Choose your Language" style="display: none;">
                  <option selected="selected"  value="EN">English</option>
                  <option value="HU">Hungarian</option>
                  <option value="RO">Romanian</option>
                </select>
            </div>-->




            <div class="copy">
                <h4>© 2023 B-Mark</h4> 
            </div>

        </footer>
        `
    }
}

customElements.define('bmark-footer' , MyFooter)