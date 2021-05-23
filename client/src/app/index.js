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

    const getStructure = () => {
        axios
            .get(`${path}/tree`, {
            params: {},
            })
            .then((res) => {
                console.log("structure:", res.data.children);
                setStructure(res.data.children);
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
                console.log("response getImageData:", res.data);
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
                      <Tree data={structure} toggle={selectImg} />
                  </div>
                  <div className="padding">
                    {JSON.stringify(imgData) !== "{}" ? 
                      <ImageDetails data={imgData}/>
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

