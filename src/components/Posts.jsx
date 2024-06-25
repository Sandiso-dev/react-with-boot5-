import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../customeStyles/posts.css";
import post1 from '../assets/post1.png';
import {posts} from "../../data";
import DropDownBtn from "../feature/DropDownBtn"
import { FaThumbsUp, FaShare } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Posts() {
  const [data, setData] = useState(posts);
  const [key, setKey] = useState('home');


  return (
    <div className="posts_container">
     <div className="tabs">
     <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="All Posts">
        {data.map(item => {
          return(
            <div className="post" key={item.id}>

         <div className="image">
         <img src={item.landImg} alt={item.gen} className='post_pic'/>
         </div>

         <div className="post_desc">
          <p style={{fontWeight:"600"}}>
          <FaThumbsUp style={{ color: 'yellow' , marginRight: "10px"}} />
            {item.gen}</p>

          <div className="topic">
            <h4>{item.topic}</h4>
            <DropDownBtn/>
          </div>

          <p className='p1'>{item.comments}</p>

          <div className="banner">
            <img src={item.profPic} alt="ProfilePic" className='profPic'/>
            <p>{item.userName}</p>
            <p>{item.views}</p>
             <button className='sharebtn'>
             <FaShare style={{ color: 'black', marginRight:"10px" }} />
             </button>
          </div>
         </div>

        </div>
          )
        })}
      </Tab>
      <Tab eventKey="profile" title="Article">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Event" >
        Tab content for Contact
      </Tab>
      <Tab eventKey="contact" title="Education" disabled></Tab>
      <Tab eventKey="contact" title="Job" disabled>  </Tab>
    </Tabs>
     </div>

     <div className="location">
     <FaMapMarkerAlt size={24} color="red" />
     South Africa, Cape Town
     <p 
     className='p1'
     style={{
      borderTop:"1px solid black"
     }}
     >Your location helps us provide you with the best 
      news feed around you
     </p>

     </div>
    </div>
  );
}

export default Posts;