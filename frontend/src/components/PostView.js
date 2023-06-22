import React, { useEffect, useState } from 'react';
import Header from './PostViewComponents/Header'
import Posts from './PostViewComponents/Posts'
import axios from 'axios';
import projectListData from './PostViewComponents/StaticData'
import {apiBaseUrl} from './PostViewComponents/BaseApiUrl'

const PostView = () => {
  const [allData, setAllData] = useState(projectListData());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(apiBaseUrl+'/postview');
        setAllData(prevData => [...prevData, ...res.data]);
        console.log('Manu', res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <center>
        <Header/>
        {
          allData.map((user) => {
            return (<Posts data={user}/>);
          })
        }
      </center>
    </div>
  )
}

export default PostView;
