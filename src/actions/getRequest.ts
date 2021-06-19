
import GetAllBooks from "./action";

const getAllRequest=()=>{
    return (dispatch:any)=>{

     fetch("https://www.googleapis.com/books/v1/volumes?q=html&maxResults=5",{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
              }
        }).then(response=> {
          if (!response.ok) {
            throw Error(response.statusText);
        }
         return  response.json();
        })

        .then(json=>{ 
        let arr:any=[];
        let data= json.items.map((item:any, key:any)=> {
        let obj:any={};
            obj.id= item.id;
            obj.title =item.volumeInfo.title;;
            obj.subtitle=item.vulumeInfo?.subtitle;
            obj.publisher= item.volumeInfo?.publisher;
            obj.subtitle= item.volumeInfo.subtitle;
            obj.thumbnail= item.volumeInfo.imageLinks?.thumbnail;
            obj.author= item?.volumeInfo.authors;
            obj.pages= item?.volumeInfo.pageCount;
            arr.push(obj);
            });
            dispatch(GetAllBooks(arr));      
          }
        );
        
    }
}

export default getAllRequest;