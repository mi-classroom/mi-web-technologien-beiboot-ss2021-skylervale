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
    const [jsonData, setJsonData] = useState({});
    const [filteredData,setFilteredData] = useState(structure);

    var currentPath = [];

    function depthFirstTraversal(o, fn) {
        currentPath.push(o);
        if(o.children) {
            for(var i = 0, len = o.children.length; i < len; i++) {
                depthFirstTraversal(o.children[i], fn);
            }
        }
        fn.call(null, o, currentPath);
        currentPath.pop();
    }

    function shallowCopy(o) {
        var result = {};
        for(var k in o) {
            if(o.hasOwnProperty(k)) {
                result[k] = o[k];
            }
        }
        return result;
    }

    function copyNode(node) {
        var n = shallowCopy(node);
        if(n.children) { n.children = []; }
        return n;
    }

    function filterTree(root, searchText) {
        root.copied = copyNode(root); // create a copy of root
        var filteredResult = root.copied;

        depthFirstTraversal(root, function(node, branch) {
            if( !node.children && node.name.indexOf(searchText) !== -1 ) {
                for(var i = 0, len = branch.length; i < len; i++) {
                    if(branch[i].copied) { continue; } 

                    branch[i].copied = copyNode(branch[i]);
                    branch[i-1].copied.children.push(branch[i].copied);
                }
            }
        });

        depthFirstTraversal(root, function(node, branch) {
            delete node.copied;
        });

        return filteredResult;
    }

    const searchFunction = (searchText, list) => {
          var filteredList = [];
          for(var i = 0, len = list.length; i < len; i++) {
              filteredList.push( filterTree(list[i], searchText) );
          }
          setFilteredData(filteredList);
          return filteredList;
    }



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

    const selectElement = (value) => {
      if(value !== ""){
        if(value.indexOf(".json") > 0){
          getJsonData(value);
        }else if(value.indexOf(".dzi") > 0){

        }else{
          setImgPath(value);
          getImageData(value);
        }
        
      }
      
    }

    const getJsonData = (value) => {
        axios
            .get(`${path}/jsondata`, {
            params: {
              jsonpath: value
            },
            })
            .then((res) => {
                setJsonData(res.data);
                setImgData({});
                setImgPath("");
            })
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
                setJsonData({});
            })
    }

    const PrettyPrintJson = ({data}) => (<div><pre>{JSON.stringify(data, null, 2) }</pre></div>);
    
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
                      <Tree data={filteredData} toggle={selectElement} />
                  </div>
                  <div className="padding">
                    {JSON.stringify(imgData) !== "{}" ? 
                      <ImageDetails data={imgData} selected={imgpath}/>
                    : ""}
                    
                  </div>
                  
              </div>
              <div style={{ width: '60rem'}}>
                <div className="padding">
                  {JSON.stringify(jsonData) !== "{}" ? 
                    <PrettyPrintJson data={jsonData} />
                  : ""}
                  {imgpath !== "" ? 
                    <div className="imagecontainer">
                      <img src={'./data/' + imgpath } alt={imgpath} className="image"/>
                    </div>
                  : ""}
                  
                </div>
              </div>
            </div>
        </Router>
    );
}

