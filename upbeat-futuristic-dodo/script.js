 (async function() {
  var obj={get then(){console.log("get then")}}
  const ret = await obj;
  return ret;
})()