let arr=[0,1,0,3,12];
function movezero(arr){
    for(let i=0;i<arr.length;i++){
        let val=arr.length-1;
        if(arr[i]==0){
            lastval= arr[i];
            arr[arr.length-1]=arr[i];

        }
    }
}