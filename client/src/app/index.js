import React, {useEffect, useState} from 'react';
import axios from "axios";

import { BrowserRouter as Router} from 'react-router-dom';
import { NavBar } from '../components';
import { Tree } from '../components/tree/tree.component';
import { ImageDetails } from '../components/imageDetails/imagedetails.component';
import {path} from '../config/env.config';
import '../style/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const [imgpath, setImgPath] = useState("");
    const [structure, setStructure] = useState({});
    const [imgData, setImgData] = useState({});
    const [filteredData,setFilteredData] = useState(structure);

    const searchFunction = (searchText, structure) => {
      if(searchText === ""){
        setFilteredData(structure);
      }
      let result;
      
      for(let i = 0; i < structure.length; i++) {
        if(structure[i].name.toLowerCase().includes(searchText)) {
          return structure[i];
        } else if(structure[i].children !== undefined) {
          result = searchFunction(searchText, structure[i].children);
          if(result){
            setFilteredData([result]);
            return result;
          }
        }
      }
      setFilteredData([]);
      return null;
    };
    

    const getStructure = () => {
        axios
            .get(`${path}/tree`, {
            params: {},
            })
            .then((res) => {
                setStructure(res.data.children);
                setFilteredData(res.data.children);
            })
    }

    const selectImg = (value) => {
      if(value !== ""){
        setImgPath(value);
        getImageData(value);
      }
      
    }

    const getImageData = (value) => {
        axios
            .get(`${path}/imgmetadata`, {
            params: {
              imgpath: value
            },
            })
            .then((res) => {
                setImgData(res.data);
            })
    }
    
    useEffect(() => {
        getStructure();
    }, []);

    return (
        <Router>
            <NavBar />
            <div style={{ display:'flex'}}>
              <div style={{ width: '60rem'}}>
                  <div className="padding">
                      <label>Search:</label>
                      <br></br>
                      <input type="text" onChange={(event) =>searchFunction(event.target.value.toLowerCase(), structure)} />
                  </div>
                  <div className="padding">
                      <Tree data={filteredData} toggle={selectImg} />
                  </div>
                  <div className="padding">
                    {JSON.stringify(imgData) !== "{}" ? 
                      <ImageDetails data={imgData} selected={imgpath}/>
                    : ""}
                  </div>
                  
              </div>
              <div style={{ width: '60rem'}}>
                <div>
                  <img src={'./data/' + imgpath } alt={imgpath} className="image"/>
                </div>
              </div>
            </div>
        </Router>
    );
}

