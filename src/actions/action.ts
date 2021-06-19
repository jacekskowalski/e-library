function GetAllBooks(data:any) {
    return {
        type: "GET",
        payload: data
    }
}

export function UpdateBookById(data: any){
    return{
        type: "PUT",
        payload: data
    }
}

export function DeleteBookById(id:number) {
    return {
        type: "DELETE",
        payload: id
    }
}

export function AddBook(payload:any){
    return {
        type: "ADD",
        payload: payload
    }
}
export const fetchProductsBegin = () => {
    return {
    type: "FETCH_PRODUCTS_BEGIN"
    }
  };
export default GetAllBooks;