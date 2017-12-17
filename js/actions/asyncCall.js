import axios from "axios";

export function asyncAll(url,name,post_value){
  return function(dispatch){
  var output;
  axios.get(url, {
    params: {
      pvalue: post_value
    }
  })
    .then((response)=>{
      dispatch({type:name,payload:response.data})
      output=true;
  })
     .catch((err)=>{
      dispatch({type:"FAIL",payload:err});
      output=false;
  })
}
}
export function getIntervalArray(array,start,end){
  var newarray=[];
    for (var i = start; i <= end; i++) {
      if (array[i]!=null || array[i]!=undefined){
          newarray.push(array[i]);
        }
}
return newarray;
}
export function changeBarNum(bar,type){
  return function(dispatch){
  console.log("bar is: " +bar);
  dispatch({type:type, barnum:bar})
}
}
export function sendBarDataPatient(type, array0, next0, selected0){
  return function(dispatch){
    console.log("type:"+type)
    console.log("array:"+array0)
    console.log("next:"+next0)
    console.log("selected:"+selected0)
  dispatch({type:type, array_patient:array0, next_patient:next0, selected_patient:selected0})
}
}
export function sendBarDataDoctor(type, array0, next0, selected0){
  return function(dispatch){
  dispatch({type:type, array_doctor:array0, next_doctor:next0, selected_doctor:selected0 })
}
}
export function sendBarDataPharma(type, array_0, next_0, selected_0){
  return function(dispatch){
  dispatch({type:type, array_pharma:array_0, next_pharma:next_0, selected_pharma:selected_0 })
}
}
export function printSomething(){
  console.log("I'VE PRINTED SOMETHING-TEST_FUNCTION");
}
