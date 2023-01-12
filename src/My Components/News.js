import React, { Component } from 'react'
import NewsItem from "./NewsItem";

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Benoît Morenne",
            "title": "Frackers Flush With Cash Shed Huge Debt Loads",
            "description": "U.S. oil and gas producers have used windfall profits to position themselves to weather future downturns",
            "url": "https://www.wsj.com/articles/frackers-flush-with-cash-shed-huge-debt-loads-11673419141?mod=hp_lead_pos12",
            "urlToImage": "https://images.wsj.net/im-699135/social",
            "publishedAt": "2023-01-11T10:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "BRIAN MELLEY and CHRISTOPHER WEBER",
            "title": "Storm-struck California scrambles to clean up ahead of rain",
            "description": "LOS ANGELES (AP) — Storm-ravaged California scrambled to clean up and repair widespread damage on Wednesday as the lashing rain eased in many areas, although the north could see thunderstorms and another powerful weather front was expected to hit the state Fr…",
            "url": "https://apnews.com/fd81a7f8760436fcaa673549e4461486",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/2dced0077df94935b04a07d10a13bf30/3000.jpeg",
            "publishedAt": "2023-01-11T09:37:31Z",
            "content": "LOS ANGELES (AP) — Storm-ravaged California scrambled to clean up and repair widespread damage on Wednesday as the lashing rain eased in many areas, although the north could see thunderstorms and ano… [+5326 chars]"
        },
        {
            "source": {
                "id": "google-news-uk",
                "name": "Google News (UK)"
            },
            "author": "Damian Carrington",
            "title": "Oceans were the hottest ever recorded in 2022, analysis shows",
            "description": "Seas dominate global weather patterns and the climate crisis is causing profound and damaging changes",
            "url": "https://www.theguardian.com/environment/2023/jan/11/oceans-were-the-hottest-ever-recorded-in-2022-analysis-shows",
            "urlToImage": "https://i.guim.co.uk/img/media/cf0ad45111a0c137e6cc8aaf803d504ec3db9151/0_85_5249_3151/master/5249.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d4848098be9d5058318a9bc14a5bc47f",
            "publishedAt": "2023-01-11T08:02:00+00:00",
            "content": "The worlds oceans were the hottest ever recorded in 2022, demonstrating the profound and pervasive changes that human-caused emissions have made to the planets climate.\r\nMore than 90% of the excess h… [+4704 chars]"
        },
        {
            "source": {
                "id": "google-news-in",
                "name": "Google News (India)"
            },
            "author": "The Weather Channel",
            "title": "Northwest India to Get a Break from Cold Wave This Week | Weather.com",
            "description": "Damp conditions may well replace the cold weather in India’s northwestern quarter this week.",
            "url": "https://weather.com/en-IN/india/news/news/2023-01-11-northwest-india-to-get-a-break-from-cold-wave-this-week",
            "urlToImage": "https://s.w-x.co/in-delhi%20cloudy%20eve.jpg",
            "publishedAt": "2023-01-11T06:18:26+00:00",
            "content": "Wednesday, January 11\r\n: After having endured bone-chilling nights for the past several weeks, residents of Northwest India will finally be in for a minor respite from the excruciating cold this week… [+2058 chars]"
        },
        {
            "source": {
                "id": "business-insider-uk",
                "name": "Business Insider (UK)"
            },
            "author": "Erin Snodgrass",
            "title": "California bird sanctuary staffer crossed floodwaters to feed parrots",
            "description": "Jamie McLeod, owner of the Santa Barbara Bird Sanctuary, told Insider the raging storms in California have brought memories of past weather disasters.",
            "url": "https://www.insider.com/california-bird-sanctuary-staffer-crossed-floodwaters-to-feed-parrots-2023-1",
            "urlToImage": "https://i.insider.com/63bdf9bb66c28600194379d9?width=1200&format=jpeg",
            "publishedAt": "2023-01-11T00:36:59Z",
            "content": "As torrential rains and heavy winds swept across California this week, Jamie McLeod's mind was on her birds.\r\nMcLeod, 60, owns and operates the Santa Barbara Bird Sanctuary, located in Summerland, Ca… [+4077 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Rachel Ramirez",
            "title": "Extreme weather has cost the US more than $1 trillion in the past seven years, feds report",
            "description": "The United States was lashed by 18 catastrophic extreme weather and climate disasters last year that cost at least $1 billion each, a new report shows.",
            "url": "http://us.cnn.com/2023/01/10/weather/billion-dollar-weather-disasters-noaa-climate/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230109152438-01-billion-dollar-disaster-noaa-report-weather-climate-restricted.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-01-10T16:00:05Z",
            "content": "The United States was lashed by 18 catastrophic extreme weather and climate disasters costing at least $1 billion each last year, a new report shows. They came in the form of tornadoes, extreme heat … [+6005 chars]"
        }
    ]
    constructor(){
        super();
        console.log("Hellow i am in constructor of News component");
        this.state={
            articles: this.articles,
            loading:false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">

                        <NewsItem title="myTitle" description="mydesc" newsUrl="todo" imgUrl="https://storage.googleapis.com/afs-prod/media/2dced0077df94935b04a07d10a13bf30/3000.jpeg" />
                    </div>
                    <div className="col-md-4">

                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                    <div className="col-md-4">

                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                    <div className="col-md-4">

                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                    <div className="col-md-4">

                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                    <div className="col-md-4">

                        <NewsItem title="myTitle" description="mydesc" />
                    </div>
                    <div className="col-md-4">

                        <NewsItem title="myTitle" description="mydesc" />
                    </div>

                </div>
            </div>
        )
    }
}

export default News