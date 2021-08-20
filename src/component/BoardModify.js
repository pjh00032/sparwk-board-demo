import React, {useState, useEffect} from 'react';
import { getDataByNo, changeData, addData } from '../Data';

const BoardModify = ({ history, location, match }) => {

  const [ data, setData ] = useState({});

  const { no } = match.params;
  
  useEffect(() => {    
    if(no === "0"){
      setData( {title:"", contents: ""});  
    }else{
      setData(getDataByNo(no));
    }
    
  }, [ ]);

  const onInputChange = (e) => {
    setData((data)=>({
      ...data,
      title : e.target.value,
    }));
  }

  const onTextAreaChange = (e) => {
    setData((data)=>({
      ...data,
      contents : e.target.value,
    }));
  }

  const onSave = () => {
    if(no === "0"){
      addData(data.title, data.contents);
    }
    else{
      changeData(no, data.title, data.contents);
    }

    history.goBack();
  }

  return (
    <div className="board-view-wrapper">
      <div>
        <div className="board-view-title">
          <span><input type="text" value={data.title || ''} onChange={onInputChange}/></span>
        </div>
        
        <div className="board-view-contents">
          <div>
            <textarea value={data.contents || ''} onChange={onTextAreaChange}></textarea>
          </div>
        </div>
        <br/>
      </div>
      <div className="board-view-btn">
        <button className="board-view-btn-home" onClick={() => history.push('/')}>List</button>
        <span>
          <button className="board-view-btn-new" onClick={() => history.goBack()}>Cancel</button>
          <button className="board-view-btn-delete" onClick={onSave}>Save</button>
        </span>
      </div>
      
    </div>
  )
}

export default BoardModify;