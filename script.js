class SpecialHeader extends HTMLElement{
    connectedCallback(){
      this.innerHTML= `<header class="container-fluid" style=" margin: 0; width: 100vw;">
          
      <div class="row align-items-center" style="background-color: rgb(2, 2, 42);">
          <div class="col-md-4">
              <h1 style="color: rgb(255, 187, 0); margin-left: 1vw;"><i>Ecommerce</i></h1>
          </div>
          <div class="col-md-6">
              <form>
              <input type="text" name="searchbx" id="searchBx" placeholder="Search Products" ><button type="button" onclick="" id="srchbtn">Search</button>
              </form>
          </div>
          <div class="col-md-1">
             <a href="login.html"> <button type="button" onclick="" class="btn btn-warning" id="lg-btn">Login</button> </a>
          </div>
          <div class="col-md-1">
              <a href="cart.html"> 
                  <i class="cart fa fa-shopping-cart fa-lg" style="color: orange;" id="crt-icn"></i> 
               </a>
          </div>
      </div>
  
  <div class="row align-items-center" id="nvbr">
      <ul class="nav nav-pills align-items-center justify-content-center">
          <li class="nav-item" id="nv-itm1">
              <a class="nav-link" style="color: rgb(0, 0, 0);" href="index_home.html">Home</a>
          </li>
          <li class="nav-item" id="nv-itm1">
              <a class="nav-link" style="color: rgb(0, 0, 0);" href="all_products.html">All Products</a>
          </li>
          <li class="nav-item dropdown" id="nv-itm2">
              <a class="nav-item dropdown-toggle" data-bs-toggle="dropdown" style="text-decoration: none; color: black;">Women</a>
              <ul class="dropdown-menu" style="border-radius: 5px;">
                  <li><a class="dropdown-item" href="women_products.html">All Products</a></li>
                  <li><a class="dropdown-item" href="dresses.html">Dresses</a></li>
                  <li><a class="dropdown-item" href="women_pants.html">Pants</a></li>
                  <li><a class="dropdown-item" href="skirt.html">Skirts</a></li>
              </ul>
          </li>
          <li class="nav-item dropdown" id="nv-itm3">
              <a class="nav-item dropdown-toggle" data-bs-toggle="dropdown" style="text-decoration: none; color: black;">Men</a>
              <ul class="dropdown-menu" style="border-radius: 5px;">
                  <li><a class="dropdown-item" href="men_products.html">All Products</a></li>
                  <li><a class="dropdown-item" href="shirts.html">Shirts</a></li>
                  <li><a class="dropdown-item" href="men_pants.html">Pants</a></li>
                  <li><a class="dropdown-item" href="hoodies.html">Hoodies</a></li>
              </ul>
          </li>
          <li class="nav-item" id="nv-itm4">
              <a class="nav-link" style="color: rgb(0, 0, 0);" href="kids.html">Kids</a>
          </li>
          <li class="nav-item" id="nv-itm4">
              <a class="nav-link" style="color: rgb(0, 0, 0);" href="contact.html">Contact</a>
          </li>
      </ul>
  </div>
  
  </header>`
    }
  }
  
  class SpecialFooter extends HTMLElement{
    connectedCallback(){
      this.innerHTML=`<footer class="container-fluid">
      <div class="row" >
          <div class="col-md-3" style="margin-top:10px;">
              <ul>
                  <h4>Women</h4>
                  <li><a class="ftr-lnk" href="dresses.html">Dresses</a></li>
                  <li><a class="ftr-lnk" href="women_pants.html">Pants</a></li>
                  <li><a class="ftr-lnk" href="skirt.html">Skirts</a></li>
              </ul>
          </div>
          <div class="col-md-3" style="margin-top:10px;">
              <ul>
                  <h4>Men</h4>
                  <li><a class="ftr-lnk" href="shirts.html">Shirts</a></li>
                  <li><a class="ftr-lnk" href="men_pants.html">Pants</a></li>
                  <li><a class="ftr-lnk" href="hoodies.html">Hoodies</a></li>
              </ul>
          </div>
          <div class="col-md-3" style="margin-top:10px;">
              <ul>
                  <li><a class="ftr-lnk" href="kids.html"><h4>Kids</h4></a></li>
              </ul>
          </div>
          <div class="col-md-3" style="margin-top:10px;">
              <ul>
                  <h4>Links</h4>
                  <li><a class="ftr-lnk" href="index_home.html">Home</a></li>
                  <li><a class="ftr-lnk" href="login.html">Login</a></li>
                  <li><a class="ftr-lnk" href="contact.html">Contact</a></li>
              </ul>
          </div>
      </div>
      <div class="row" style="margin-top:10px; text-align: center;">
          <p>Copyright &copy;Ecommerce 2024. All rights reserved.</p>
      </div>
  </footer>`
    }
  }
  
  customElements.define('special-header', SpecialHeader);
  customElements.define('special-footer', SpecialFooter);



