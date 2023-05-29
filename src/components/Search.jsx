import axios from 'axios'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Search from './Search.css';

export default function News() {
  let[newsData,setNewsData] = useState([])
  let [query,setQuery]=useState('')
  let getNews=(e)=>{
    e.preventDefault()
  axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2023-04-27&sortBy=publishedAt&apiKey=c61a3bb6dadc41a2a4cd7aa7f35983ea
  `)
.then((res)=>{
  setNewsData(res.data.articles)
  console.log(res.data.articles)
})
.catch((err)=>{
  console.log(err)
})}



  return (
    <div>
      <form onSubmit={getNews}>
        <input type='text' onChange={(e)=>{
          setQuery(e.target.value)
        }}>
        </input>
        <button className='search' type='submit'><img className='image1' src="https://www.freepnglogos.com/uploads/search-png/search-icon-endless-icons-33.png" width="35" alt="search, icon endless icons" /></button>
        
      </form>
  {
    newsData.map((items)=>{
      return<div className='divb'>
            <Card className='cardmain' sx={{width:300}}>
              
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={items.urlToImage}
      />
      <CardContent>
        <Typography className='card-content' gutterBottom variant="h5" component="div">
          {items.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {items.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className='Like' size="small"><b className='li'>Like</b></Button>
        <Button className='Readmore' size="small"><b className='rm'>Read More</b></Button>
      </CardActions>
    </Card>
</div>
    })
  }
        </div>
  )
    }