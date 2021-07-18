import React ,{useState,useEffect} from 'react';


const Main = ()=>{

    const[articles,setArticles]=useState([]);
    const[search,setSearch]=useState("microsoft");

    useEffect(()=>{
        
        let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=36872bfff8994108be70c46b512e7ec2`  ;

        fetch(url)
        .then((response)=>response.json())
        .then((news)=>{
            setArticles(news.articles);
            
        })
            


        
    },[])  //called when component is mounted
        
    function readValue(value){
       setSearch(value);
    }

    function searchNews(){
        let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=36872bfff8994108be70c46b512e7ec2`   ;

        fetch(url)
        .then((response)=>response.json())
        .then((news)=>{
            setArticles(news.articles);
            
        })
            
    }

    useEffect(()=>{
        
        let url = `https://newsapi.org/v2/everything?q=${search}&apiKey=36872bfff8994108be70c46b512e7ec2`   ;

        fetch(url)
        .then((response)=>response.json())
        .then((news)=>{
            setArticles(news.articles);
            
        })
            


        
    },[search])

    return(
        <div className="container">
            <div className="padd ">
                <div className="filter">
                    <input type="search" onChange={
                        (e)=>{
                            readValue(e.target. value)
                        }}
                         placeholder=" Enter a topic to search"></input>
                    <button className="btn1" onClick={searchNews}>Search News</button>
                </div>

                <h1>All News</h1>
                {   
                    articles.length===0?<h2>No Data Found</h2>:
                    articles.map((article,index)=>(
                        <div key={index} className="article container">
                            <div className="padd-article container">
                                <div className="news-img container">
                                    <img src={article.urlToImage}></img>
                                </div>
                                <div className="news-detail container">
                                    <h4>{article.title}</h4>
                                    <p>
                                        {article.author}
                                    </p>
                                    <p>{article.description}</p>
                                    <p>
                                        <a href={article.url} target="_blank">
                                        <button class="btn">Read Full Article</button>
                                        </a>
                                        
                                    </p>
                                </div>
                            </div>
                              
                        </div>

                            
                           
                           
                            
                    ))
                }
            </div>
          
        </div>
    )
}
export default Main;