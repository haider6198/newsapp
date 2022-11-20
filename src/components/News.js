import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor(){
        super();
        console.log("constructor from news component")
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
        let url =`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5f56ae59d95c4800a92cd3c550aae857&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data= await fetch(url)
        let parsedData= await data.json()
        // console.log(parsedData)
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    }
    handlNextClick=async ()=>{
            let url =`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5f56ae59d95c4800a92cd3c550aae857&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            console.log(url)
            this.setState({loading:true})
            let data= await fetch(url)
            let parsedData= await data.json()
            // console.log(parsedData)
            // this.setState({articles:parsedData.articles})
         this.setState({
            page:this.state.page + 1,
            articles:parsedData.articles,
            loading:false
         })
    }
    handlePrevClick= async ()=>{
        let url =`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5f56ae59d95c4800a92cd3c550aae857&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data= await fetch(url)
        let parsedData= await data.json()
        // console.log(parsedData)
        // this.setState({articles:parsedData.articles})
        this.setState({
            page:this.state.page - 1,
            articles:parsedData.articles,
            loading:false
         })
    }
    render() {
        return (
            <div className="container my-5" >
                <h1 className='text-center'style={{margin:'40px 0'}}>Global-News Top Headlines! </h1>
                {this.state.loading && <Spinner/>}
                <div className="row my-6">
                {!this.state.loading && this.state.articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newUrl={element.url} />
                    </div>
                })}
                    
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-sm btn-dark" onClick={this.handlePrevClick} > &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-sm btn-dark" onClick={this.handlNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
