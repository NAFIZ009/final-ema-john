const getFormLs=(setProducts)=>{
    let lsData;
    if(localStorage.getItem('cartProducts')){
        lsData=JSON.parse(localStorage.getItem('cartProducts'));
        setProducts(lsData);
    }
};
const addToLs=(product)=>{
    let lsData;
    if(localStorage.getItem('cartProducts')){
        lsData=JSON.parse(localStorage.getItem('cartProducts'));
        lsData.push(product);
        
    }else{
        lsData=[product];
    }
    localStorage.setItem('cartProducts', JSON.stringify(lsData));
}

export {addToLs,getFormLs};