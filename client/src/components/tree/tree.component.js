import React, {useState} from 'react';
import styled from "styled-components";
import { AiOutlineFile, AiOutlineFolder } from "react-icons/ai";
import { AiFillFileImage } from "react-icons/ai";

const FILE_ICONS = {
    jpg: <AiFillFileImage />
  };
  
  const StyledTree = styled.div`
    line-height: 1.5;
  `;
  const StyledFile = styled.div`
    padding-left: 20px;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  `;
  const StyledFolder = styled.div`
    padding-left: 20px;
  
    .folder--label {
      display: flex;
      align-items: center;
      span {
        margin-left: 5px;
      }
    }
  `;
  const Collapsible = styled.div`
    height: ${p => (p.isOpen ? "auto" : "0")};
    overflow: hidden;
  `; 
  
  const File = ({ name, path, toggle }) => {
    let ext = name.split(".")[2];
    return (
      <StyledFile>
        {FILE_ICONS[ext] || <AiOutlineFile />}
        <span style={{cursor:'pointer'}} onClick={() => toggle(path.replace(/\\/g, "/")) } >{name}</span>
        
      </StyledFile>
    );
  };
  
  const Folder = ({ name, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = e => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };
  
    return (
      <StyledFolder>
        <div className="folder--label" onClick={handleToggle}>
          <AiOutlineFolder />
          <span>{name}</span>
        </div>
        <Collapsible isOpen={isOpen}>{children}</Collapsible>
      </StyledFolder>
    );
  };
  
  const TreeRecursive = ({ data, toggle}) => {
    // loop through the data
    if(data.length > 0){
      return data.map(item => {
          // if its a file render <File />
          if (item.type === "file") {
              return <File name={item.name} key={item.name} path={item.relativePath} toggle={toggle}> 
              </File>;
          }
          // if its a folder render <Folder />
          else if (item.type === "directory") {
              return (
                  <Folder key={item.name} name={item.name}>
                    {/* Call the <TreeRecursive /> component with the current item.childrens */}
                    <TreeRecursive key={item.name} data={item.children} toggle={toggle} />
                  </Folder>
              );
          }
  
          else{
            return null
          }
      });
    }else{
      return ("We couldn’t find any matching")
    }
  };
  export const Tree = ({ data, toggle }) => {
      return (
          <StyledTree>
          {data ? <TreeRecursive data={data} toggle={toggle} /> : null}
          </StyledTree>
      );
  };
  
  Tree.File = File;
  Tree.Folder = Folder;
  