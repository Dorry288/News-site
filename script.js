document.addEventListener("DOMContentLoaded", function () {


    // ================================
    // DISPLAY NEWS ON HOMEPAGE
    // ================================

    const newsContainer = document.getElementById("news-container");


    if (newsContainer && typeof newsDatabase !== "undefined") {


        newsContainer.innerHTML = "";


        newsDatabase.forEach(news => {


            newsContainer.innerHTML += `

            <div class="col-md-6">

                <article class="card news-card shadow-sm h-100">


                    <div class="card-img-container">


                        <span class="category-badge">
                            ${news.category}
                        </span>


                        <img src="${news.image}"
                             alt="${news.title}">


                    </div>



                    <div class="card-body d-flex flex-column">


                        <div class="news-meta">

                            📅 ${news.date} 
                            |
                            👤 ${news.author}

                        </div>




                        <h3 class="card-news-title">

                            <a href="news-details.html?id=${news.id}">

                                ${news.title}

                            </a>

                        </h3>




                        <p class="news-preview">

                            ${news.summary}

                        </p>




                        <a href="news-details.html?id=${news.id}"
                           class="btn btn-readmore mt-auto">

                           Read More

                        </a>



                    </div>


                </article>


            </div>

            `;


        });


    }





    // ================================
    // DISPLAY FEATURED NEWS
    // ================================


    const featuredNews = document.getElementById("featured-news");


    if(featuredNews && typeof newsDatabase !== "undefined"){


        let mainNews = newsDatabase[0];


        featuredNews.innerHTML = `


        <img src="${mainNews.image}" 
             class="img-fluid rounded"
             alt="${mainNews.title}">


        <span class="category-badge">

            ${mainNews.category}

        </span>



        <h2 class="mt-3">

            ${mainNews.title}

        </h2>



        <p>

            ${mainNews.summary}

        </p>



        <a href="news-details.html?id=${mainNews.id}"
           class="btn btn-readmore">

           Read More

        </a>


        `;


    }





    // ================================
    // TRENDING STORIES
    // ================================


    const trendingContainer = document.getElementById("trending-container");


    if(trendingContainer && typeof newsDatabase !== "undefined"){


        trendingContainer.innerHTML = "";


        newsDatabase.slice(0,5).forEach(news=>{


            trendingContainer.innerHTML += `


            <a href="news-details.html?id=${news.id}"
               class="sidebar-list-item">


                <div class="sidebar-item-title">

                    ${news.title}

                </div>


                <div class="sidebar-item-meta">

                    ${news.category} | ${news.date}

                </div>


            </a>


            `;


        });


    }





    // ================================
    // MOBILE NAVBAR
    // ================================


    const navbarToggler = document.querySelector(".navbar-toggler");


    const navbarMenu = document.querySelector("#mainNavbar");



    if(navbarToggler){


        navbarToggler.addEventListener("click", function(){


            navbarMenu.classList.toggle("show");


        });


    }



});
