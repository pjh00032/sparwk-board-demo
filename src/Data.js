const dataList = [
  {no: 1, title:"title1", contents: "contents1", date: "2021/01/01", views:20},
  {no: 2, title:"title2", contents: "contents2", date: "2021/01/02", views:21},
  {no: 3, title:"title3", contents: "contents3", date: "2021/01/03", views:22},
  {no: 4, title:"title4", contents: "contents4", date: "2021/01/04", views:23},
  {no: 5, title:"title5", contents: "contents5", date: "2021/01/05", views:24},
  {no: 6, title:"title6", contents: "contents6", date: "2021/01/06", views:25},
  {no: 7, title:"title7", contents: "contents7", date: "2021/01/07", views:26},
  {no: 8, title:"title8", contents: "contents8", date: "2021/01/08", views:27},
  {no: 9, title:"title9", contents: "contents9", date: "2021/01/09", views:28},
  {no: 10, title:"title10", contents: "contents10", date: "2021/01/10", views:29}
];

const getDataByNo = no => {
  const array = dataList.filter(x => x.no == no);
  if (array.length == 1) {
    return array[0];
  }
  return null;
}

const lpad = (orgVal, totalLength, emptyVal) => {
  let returnVal = "";

  if(orgVal.length != totalLength){
    returnVal = orgVal.toString();
    while(returnVal.length < totalLength){
      returnVal = emptyVal + returnVal;
    }
  }

  return returnVal;
}

const changeData = (no, title, contents) => {
  const nowDate = new Date();
  let updateDate = "";

  updateDate = nowDate.getFullYear() + "/" + lpad((nowDate.getMonth()+1), 2, "0") + "/" + lpad((nowDate.getDate()), 2, "0");
  
  dataList.filter(x => x.no === parseInt(no)).forEach(o => o.title = title);
  dataList.filter(x => x.no === parseInt(no)).forEach(o => o.contents = contents);
  dataList.filter(x => x.no === parseInt(no)).forEach(o => o.date = updateDate); 
}

const addData = (title, contents) => {
  const no = dataList.length +1;
  const nowDate = new Date();
  let updateDate = "";

  updateDate = nowDate.getFullYear() + "/" + lpad((nowDate.getMonth()+1), 2, "0") + "/" + lpad((nowDate.getDate()), 2, "0");
  
  dataList.push({no: no, title:title, contents: contents, date: updateDate, views:0});
}


const chageViews = (no) => {
  dataList.filter(x => x.no === parseInt(no)).forEach(o => o.views = (o.views+1));
}

const deleteData = (no) => {
  const dataIndex = dataList.findIndex(function(x){return x.no === parseInt(no)});

  dataList.splice(dataIndex, 1);
}

export {
  dataList,
  getDataByNo,
  changeData,
  chageViews,
  addData,
  deleteData
};