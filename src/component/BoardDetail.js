
import React, {useState, useEffect} from 'react';
import { getDataByNo, chageViews, deleteData } from '../Data';
import { Link } from 'react-router-dom';

const BoardDetail = ({ history, location, match }) => {

  useEffect(() => {    
    setReset(no);
  }, [ ]);

  const [ data, setData ] = useState({});
  const [ beforeData, setBeforeData ] = useState({});
  const [ afterData,  setAfterData ] = useState({});

  const { no, mode } = match.params;

  const setReset = (no) =>{
    const first = 1;
    const last = 10;
    const before = Number(no)-1;
    const after = Number(no)+1;

    setData(null);
    setBeforeData(null);
    setAfterData(null);

    setData(getDataByNo(no));
    setAfterData(getDataByNo(after));
    setBeforeData(getDataByNo(before));

    chageViews(no);

  }

  const onDelete = () => {
    deleteData(no);
    history.push('/');
  }
  
  

  return (
    <div className="board-view-wrapper">
      <div>
        {
          data ? (
            <>
              <div className="board-view-title">
                <span>{ data.title }</span>
                <span>{ data.date }</span>
                <span>{ data.views }</span>
              </div>
             
              <div className="board-view-contents">
                <div>
                  {
                    data.contents
                  }
                </div>
              </div>
              <br/>
              {beforeData ? 
                (<div className="board-view-bottom-list">
                  <span>Before</span>
                  <span onClick={()=> setReset(beforeData.no)}>{beforeData.title}</span>
                  <span>{beforeData.date}</span>
                  <span>{beforeData.views}</span>
                </div>) : ''
              }
              {data ? 
                (<div className="board-view-bottom-list-now">
                  <span></span>
                  <span onClick={()=> setReset(data.no)}>{data.title}</span>
                  <span>{data.date}</span>
                  <span>{data.views}</span>
                </div>) : ''
              }
              {afterData ?
                (<div className="board-view-bottom-list">
                  <span>After</span>
                  <span onClick={()=> setReset(afterData.no)}>{afterData.title}</span>
                  <span>{afterData.date}</span>
                  <span>{afterData.views}</span>
                </div>):''
              }
            </>
          ) : 'No results'
        }
      </div>
      <div className="board-view-btn">
        <button className="board-view-btn-home" onClick={() => history.push('/')}>List</button>
        <span>
          <button onClick={onDelete}>Delete</button>
          <Link to={`/boardModify/${no}`}><button>Modify</button></Link>
          <Link to={`/boardModify/0`}><button>New</button></Link>
        </span>
      </div>
      
    </div>
  )
}

export default BoardDetail;