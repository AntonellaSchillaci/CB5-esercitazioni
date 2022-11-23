 const qs = (type) => document.querySelector(type);

 const ce = (type) => document.createElement(type);

 const GET = async (url) => {
    const res = await fetch(url);
    return await res.json();
 }

 export {ce, qs, GET}