import './styles/Model.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Model() {
    return (        
        <div className="container-fluid">

            {/* Header */}
            <div className='row align-items-center'>
                <div className='col-sm-4' id="logo">
                    <img src="https://cartzilla.createx.studio/img/logo-dark.png" width="150" alt="Cartzilla" />
                </div>
                <div className='col-sm-4' id="search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search"/>
                        <div className="input-group-append">
                            <button className='btn btn-secondary'><span className="fa fa-search"></span></button>
                        </div>
                    </div>                  
                </div>
                <div className='col-sm-4' id="login">
                    <div className="btn-group">
                        <button type="button" className="btn "><span className="fa fa-user fa-lg"></span>
                            <div className="row-1">
                                Login
                            </div>
                            <div className="row-2">
                                Account
                            </div>
                        </button>                        
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="/">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

           

            {/* carrusel*/}
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="item active">
                        <img src="src\images\green.jpg" alt="Los Angeles"/>
                    </div>

                    <div class="item">
                        <img src="src\images\mujer.jpg" alt="Chicago"/>
                    </div>

                    <div class="item">
                        <img src="src\images\pareja.jpg" alt="New York"/>
                    </div>
                </div>

                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>    


            {/* Main */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 d-flex justify-content-center">      
                        <div className="card" style={{"width": "18rem"}}>
                            <img src="https://img.clasf.es/2020/12/17/Hotspur-2021-chandal-de-futbol-mas-baratos-graits-envio-20201217120600.3317430015.jpg" className="card-img-top" style={{"width": "200px", "hight": "300px"}} alt="bear"/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title mt-auto">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>  
                        </div>
                    </div>

                    <div className="col-sm-4 d-flex justify-content-center"> 
                        <div className="card" style={{"width": "18rem"}}>
                            <img src="https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/247317.jpg" className="card-img-top" style={{"width": "200px", "hight": "300px"}} alt="bear"/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title mt-auto">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-4 d-flex justify-content-center"> 
                        <div className="card" style={{"width": "18rem"}}>
                            <img src="https://cf.shopee.cl/file/73535e85860ce23973bc3526ef65e4c4_tn" className="card-img-top" style={{"width": "200px", "hight": "300px"}} alt="bear"/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title mt-auto">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row  mx-auto">
                    <div className="col-sm-4 d-flex justify-content-center">     
                        <div className="card" style={{"width": "18rem"}}>
                            <img src="https://img.ltwebstatic.com/images3_pi/2021/02/01/1612147676ad548422f8bacfcbc56b8655f3e347d3.webp" className="card-img-top" style={{"width": "200px", "hight": "300px"}} alt="bear"/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title mt-auto">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 d-flex justify-content-center">
                        <div className="card" style={{"width": "18rem"}}>
                            <img src="https://m.media-amazon.com/images/I/518cOjhFkHL._AC_UX342_.jpg" className="card-img-top" style={{"width": "200px", "hight": "300px"}} alt="bear"/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title mt-auto">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 d-flex justify-content-center">
                        <div className="card" style={{"width": "18rem"}}>
                            <img src="https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1388A2MPA3691PT17X20Y12D173263382FS9322/views/1,width=378,height=378,appearanceId=2,backgroundColor=F2F2F2/vibraciones-aleatorias-sudadera-con-capucha-cuello-alto-unisex.jpg" className="card-img-top" style={{"width": "200px", "hight": "300px"}} alt="bear"/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title mt-auto">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            

            
            {/* Footer */}
            <div container>
                <footer className="text-center text-lg-start bg-light text-muted">           
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    
                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>
                    

                        <div>
                            <a href="/" className="me-4 text-reset">
                                <i className="fa fa-facebook-f"></i>
                            </a>
                            <a href="/" className="me-4 text-reset">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="/" className="me-4 text-reset">
                                <i className="fa fa-google"></i>
                            </a>
                            <a href="/" className="me-4 text-reset">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="/" className="me-4 text-reset">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a href="/" className="me-4 text-reset">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                        
                    </section>
                
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                        
                            <div className="row mt-3">
                            
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Company name
                                </h6>
                                <p>
                                Cartzilla is a store dedicated exclusively to the sale of works of art. We have physical stores in Madrid and Barcelona.
                                </p>
                                </div>
                            
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">engraved art</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">paintings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">sculptures</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">collage</a>
                                </p>
                                </div>
                            
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Products</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                                </div>
                            
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fa fa-home me-3"></i> Madrid, MAD 10012, ES</p>
                                <p>
                                    <i className="fa fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fa fa-phone me-3"></i> + 34 234 567 88</p>
                                <p><i className="fa fa-print me-3"></i> + 34 234 567 89</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </footer> 
            </div>           
        </div>    
                        
    );
}

export default Model