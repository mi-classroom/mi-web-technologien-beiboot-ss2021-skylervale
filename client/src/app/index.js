import React, {useEffect, useState} from 'react';
import axios from "axios";
import ReactJson from 'react-json-view';
import { BrowserRouter as Router} from 'react-router-dom';
import Collapsible from 'react-collapsible';
import ImageView from 'react-single-image-viewer'

import { NavBar } from '../components';
import { Tree } from '../components/tree/tree.component';
import { ImageDetails } from '../components/imageDetails/imagedetails.component';

import {path} from '../config/env.config';
import {useStyles} from '../config/usestyles.config';
import '../style/style.css';

import Button from '@material-ui/core/Button';
import Input from "@material-ui/core/Input";
import IconButton from '@material-ui/core/IconButton';
import { AiOutlineDownload } from "react-icons/ai";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-single-image-viewer/dist/index.css'

export default function App() {
    const classes = useStyles();
    const [imgpath, setImgPath] = useState("");
    const [structure, setStructure] = useState({});
    const [imgData, setImgData] = useState({});
    const [jsonData, setJsonData] = useState({});
    const [filteredData,setFilteredData] = useState(structure);
    const [updatedData, setUpdatedData] = useState({})

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
        root.copied = copyNode(root);
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

    const searchFunction = async (searchText, list) => {
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
          console.log(value)
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
                console.log(res.data)
                setImgData(res.data);
                setJsonData({});
            })
    }

    const saveMetaData = () => {
      axios
          .post(`${path}/updateimgmetadata`, {
                params: updatedData,
                imgpath:imgpath
          })
    }

    const downloadzip = () => {
        axios
            .get(`${path}/download`, {
            params: {
              folderPath: "./data"
            },
            })
            .then((res) => {
                console.log(res.data)
            })
    }
    
    useEffect(() => {
        getStructure();
    }, []);

    return (
        <Router>
            <NavBar />
            <div className={classes.root} style={{ display:'flex'}}>
              <div style={{ 'width': '20rem', 'max-height': '85vh', 'overflow': 'auto' }}>
                  <div className="padding">
                      <label>Search:</label>
                      <br></br>
                      <Input className={classes.search} type="text" onChange={(event) =>searchFunction(event.target.value.toLowerCase(), structure)} />
                  </div>
                  <div className="padding">
                    {filteredData.length > 0 ?
                      <IconButton 
                          edge="start" 
                          color="inherit"
                          aria-label="Download"
                          onClick={downloadzip}>
                          <AiOutlineDownload/>
                          <span className={classes.span}>Download folder</span>
                      </IconButton>
                    :""}
                  </div>
                  <div className="padding">
                      <Tree data={filteredData} toggle={selectElement} />
                  </div>
                  <div className="padding">
                    
                  </div>
                  
              </div>
              <div style={{ width: '100rem'}}>
                <div>
                  {JSON.stringify(jsonData) !== "{}" ? 
                    <ReactJson src={jsonData} collapsed={2}/>
                  : ""}
                  {imgpath !== "" ? 
                    <div>
                      <center>
                        <ImageView src={'http://localhost:5000/data/' + imgpath }/>
                      
                        <Collapsible trigger="Image details">
                          {JSON.stringify(imgData) !== "{}" ? 
                            <ImageDetails defaultData={imgData} selected={imgpath} data={updatedData} updateData={setUpdatedData} classes={classes}/>
                          : ""}
                          {JSON.stringify(imgData) !== "{}" ? 
                          <Button onClick={saveMetaData} className={classes.myButton}>
                              <span>Save</span>
                          </Button>
                          : ""}
                        </Collapsible>
                      </center>
                    </div>
                  : ""}
                  
                </div>
              </div>
            </div>
        </Router>
    );
}

