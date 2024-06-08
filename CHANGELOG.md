## How to use javascript and icons in creating a simple harmburger menu
#                         (Code)

##                        For the nav bar and icons
 
 <nav class="nav-bar">
                   <img src="./image/Screenshot_1.png" alt="" class="image1">
                   <ul id="sidemenu"> 
                       <li class="navlist"><a href="#" class="navitems">Home</a></li>
                       <li class="navlist"><a href="#about" class="navitems">About</a></li>
                       <li class="navlist"><a href="#services" class="navitems">Services</a></li>
                       <li class="navlist"><a href="#portfolio" class="navitems">Portifolio</a></li>
                       <li class="navlist"><a href="#contact" class="navitems">Contact</a></li>
                       <i class="fas fa-times" onclick="closemenu()"></i>
                     </ul>
                     <i class="fas fa-bars" onclick="openmenu()"></i>
                 </nav>

  ##                        For the css style 

  
                               nav ul{
                                   background: #ff004f;
                                   position: fixed;
                                   top: 0;
                                   right: -200px;
                                   width: 200px;
                                   height: 1000vh;
                                   padding-top: 50px;
                                   z-index: 2;
                               }    

 ##                          For the javascript code 
                                     var sidemeu = document.getElementById("sidemenu");

                                    function openmenu(){
                                        sidemeu.style.right = "0";
                                    }


                                    function closemenu(){
                                        sidemeu.style.right = "-200px";
                                    }


##                        How to use HTML And CSS in creatign search button

#                                     HTML CODE
                                   <form action="">
                                         <div class="search">
                                              <i class="fa-solid fa-magnifying-glass search-icon"></i>
                                              <input class="search-input" type="search" placeholder="search">
                                          </div>
                                    </form>

  #                                 CSS CODE
  
                                    .search{
                                          width: max-content;
                                          display: flex;
                                          align-items: center;
                                          padding: 14px;
                                          background: #f6f6f6;
                                          border-radius: 28px;
                                          transition: box-shadow 0.2s;
                                      }

                                      .search:focus-within{
                                          box-shadow: 0 0 2px rgb(0, 0, 0, 0.75);
                                      }

                                      .search-input{
                                          font-size: 16px;
                                          font-family: 'lexend' sans-serif;
                                          color: #333333;
                                          margin-left: 14px;
                                          outline: none;
                                          border: none;
                                          background: transparent;
                                      }

                                      .search-input::placeholder, .search-icon{
                                          color: rgb(0, 0, 0.5);
                                      } 
                                         