function sort(a,arr_size)
    { 
        let lowerIndex = 0;
        let upperIndex = arr_size - 1;
        let mid = 0;
        let temp = 0;
        while (mid <= upperIndex)
        {
            if(a[mid] == 0)
            {
                temp = a[lowerIndex];
                a[lowerIndex] = a[mid];
                a[mid] = temp;
                lowerIndex++;
                mid++;
            }else if(a[mid] == 1){
                mid++;
            }else{
                temp = a[mid];
                a[mid] = a[upperIndex];
                a[upperIndex] = temp;
                upperIndex--;
            }
             
        }
    }
    function sortedArray(arr,arr_size)
    {
        for (let i = 0; i < arr_size; i++)
        {
            console.log(arr[i] + " ");
        }
    }
    let arr= [0, 2, 1, 2, 0 ];
    let arr_size = arr.length;
    sort(arr, arr_size);
    console.log("Array after sorting")
    sortedArray(arr, arr_size);