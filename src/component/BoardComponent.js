import Pagination from "react-js-pagination";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { dataList } from '../Data';


const BoardComponent = () => {

    const [ data, setDataList ] = useState(dataList);

    useEffect(() => {
        setDataList(dataList);
    }, [ ])


    const headerList = ["No.", "Title", "Registered date", "Views"];


    const [itemsCountPerPage, setViews] = useState(3);
    const totalItemsCount = data.length;
    const pageRangeDisplayed = 10;

    const [page, setPage] = useState(1);
    const [copyDataList, setCopyDataList] = useState(data.length >0? data.slice(0,itemsCountPerPage) : []);
    const handlePageChange = (page) => {
        const indexOfLastPost = page * itemsCountPerPage;
        const indexOfFirstPost = indexOfLastPost - itemsCountPerPage;

        setPage(page);
        setCopyDataList(data.slice(indexOfFirstPost,indexOfLastPost));
    };

    const selectChange = (e) => {
        const changeView = parseInt(e.target.value);
        const indexOfLastPost = page * changeView;
        const indexOfFirstPost = indexOfLastPost - changeView;
        setViews(changeView);
        setPage(page);
        setCopyDataList(data.slice(indexOfFirstPost,indexOfLastPost));        
    }

    return (
        <div className="board-list-wrapper">
            <select onChange={selectChange} className="board-list-page" value={itemsCountPerPage}>
                <option value={1}>1 views</option>
                <option value={2}>2 views</option>
                <option value={3}>3 views</option>
                <option value={4}>4 views</option>
            </select>
            <table className="board-list-table">
                <thead className="board-list-thead">
                    <tr>
                        {headerList.length > 0? headerList.map((heder)=>{
                            return (
                                <td>{heder}</td>
                            )

                        }) : ''}
                    </tr>
                </thead>
                <tbody>
                    {copyDataList.length > 0? copyDataList.map((data)=>{
                        let {no, title, date, views} = data;
                        return (
                            <tr>
                                <td>{no}</td>
                                <td><Link to={`/boardDetail/${no}`}>{ title }</Link></td>
                                <td>{date}</td>
                                <td>{views}</td>
                            </tr>
                        )
                    }) : <tr>No results</tr>}
                </tbody>
            </table>
            <br/>
            {copyDataList.length > 0?
            <Pagination
                activePage={page}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={pageRangeDisplayed}
                onChange={handlePageChange}
                
            />
            :''
            }
            <br/>
            <div className="board-view-btn">
                <span>
                <Link to={`/boardModify/0`}><button>New</button></Link>
                </span>
            </div>
        </div>

    );
}
export default BoardComponent;