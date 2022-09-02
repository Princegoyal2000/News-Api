import React , {useState,useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import NewsBox from './NewsBox';
import LoadingBar from 'react-top-loading-bar';

function News(props) {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [progress, setProgress] = useState(0);

    /* API key */
    const APIkey = "839f5a4d8c724c688d9f506d65ff258a";

    const fetchNews = async ()=>{

        let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=7&category=${props.category}&page=${page}&apiKey=${APIkey}`;
        let data = await fetch(url);
        setProgress(20);
        let jsonData = await data.json();
        setProgress(40);
        setArticles(jsonData.articles);
        setProgress(55);
        setTotal(jsonData.totalResults);
        setPage(2);
        setProgress(100);

    }

    useEffect(() => {
        fetchNews();
    }, [])


    const fetchMore = async ()=>{
        setPage((page)=> page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=7&category=${props.category}&page=${page}&apiKey=${APIkey}`;
        let data = await fetch(url);
        let jsonData = await data.json();
        setArticles(articles.concat(jsonData.articles));
        setTotal(jsonData.totalResults);
    }
    
    
    return (
        <>
        <LoadingBar
            height={3}
            color='#f11946'
            progress={progress} 
        />
        <h1 className="text-center my-3">Top Headlines</h1>
        
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMore}
            hasMore={articles.length !== total}
            loader={<h6 className="text-center">Loading...</h6>}
        >

        
        <div className="container-fluid row">
            { articles.map((item) => {
                return (
                    <div className="col-lg-3 my-3" key={item.url}>
                        <NewsBox  image={item.urlToImage} title={item.title} description = {item.description} author={item.author} date={item.publishedAt} url={item.url}/>
                    </div>
                )
            }) }

        </div>

        </InfiniteScroll>
        </>
    )
}

export default News
