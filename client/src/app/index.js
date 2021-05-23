import React, {useEffect, useState} from 'react';
import axios from "axios";

import { BrowserRouter as Router} from 'react-router-dom';
import { NavBar } from '../components';
import { Tree } from '../components/tree/tree';
import {path} from '../config/env.config';
import '../style/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    const [imgpath, setImgPath] = useState("");
    const [structure, setStructure] = useState({});

    console.log("actual Structure", structure);
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
    useEffect(() => {
        getStructure();
    }, []);
    return (
        <Router>
            <NavBar />
            <div style={{ display:'flex'}}>
              <div style={{ width: '60rem'}}>
                  <div className="tree">
                      <Tree data={structure} toggle={setImgPath} />
                  </div>
                  
              </div>
              <div style={{ width: '60rem'}}>
                <div>
                  <img src={'./data/' + imgpath.replace(/\\/g, "/") } alt={imgpath} className="image"/>
                </div>
              </div>
            </div>
            
            
        </Router>
    );
}
